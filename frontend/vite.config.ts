import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";
import seo from "./src/seo/seoRoutes.json";

/**
 * SEO pre-render (head only).
 * After `vite build`, writes one HTML file per page (e.g. dist/about/index.html)
 * with that page's own <title>, description, canonical and social tags, so search
 * engines and link previews see correct metadata and a 200 status for every page.
 * Also writes dist/sitemap.xml and dist/404.html.
 */
function seoPrerender(): Plugin {
  const esc = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const urlFor = (p: string) => seo.siteUrl + (p === "/" ? "/" : p);

  const applyMeta = (html: string, title: string, description: string, url: string | null, robots?: string) => {
    let out = html
      .replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(title)}</title>`)
      .replace(/(<meta name="description" content=")[^"]*(")/, `$1${esc(description)}$2`)
      .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${esc(title)}$2`)
      .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${esc(description)}$2`)
      .replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${esc(title)}$2`)
      .replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${esc(description)}$2`);
    if (url) {
      out = out
        .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
        .replace(/(<link rel="alternate" hreflang="en-GB" href=")[^"]*(")/, `$1${url}$2`)
        .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`);
    } else {
      out = out
        .replace(/\s*<link rel="canonical"[^>]*>/, "")
        .replace(/\s*<link rel="alternate" hreflang[^>]*>/, "");
    }
    if (robots) out = out.replace(/(<meta name="robots" content=")[^"]*(")/, `$1${robots}$2`);
    return out;
  };

  return {
    name: "seo-prerender",
    apply: "build",
    closeBundle() {
      const dist = path.resolve(__dirname, "dist");
      const templatePath = path.join(dist, "index.html");
      if (!fs.existsSync(templatePath)) return;
      const template = fs.readFileSync(templatePath, "utf8");

      for (const r of seo.routes) {
        const html = applyMeta(template, r.title, r.description, urlFor(r.path));
        const outFile = r.path === "/" ? templatePath : path.join(dist, r.path.slice(1), "index.html");
        fs.mkdirSync(path.dirname(outFile), { recursive: true });
        fs.writeFileSync(outFile, html);
      }

      // Real 404 page (served by Vercel with a 404 status for unknown URLs)
      fs.writeFileSync(
        path.join(dist, "404.html"),
        applyMeta(template, `Page not found | ${seo.siteName}`, "The page you are looking for could not be found.", null, "noindex, follow"),
      );

      const today = new Date().toISOString().slice(0, 10);
      const sitemap =
        `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
        seo.routes
          .map((r) => `  <url>\n    <loc>${urlFor(r.path)}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${r.priority}</priority>\n  </url>`)
          .join("\n") +
        `\n</urlset>\n`;
      fs.writeFileSync(path.join(dist, "sitemap.xml"), sitemap);
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger(), seoPrerender()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
