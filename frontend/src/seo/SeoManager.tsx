import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import seo from "./seoRoutes.json";

/**
 * Keeps <title>, description, canonical and social tags in sync with the
 * current page when visitors navigate inside the app (no full page reload).
 * The same data is baked into static HTML at build time (vite.config.ts).
 */
const setAttr = (selector: string, attr: string, value: string) => {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute(attr, value);
};

const SeoManager = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const clean = pathname !== "/" ? pathname.replace(/\/+$/, "") : "/";
    const route = seo.routes.find((r) => r.path === clean);
    const title = route ? route.title : `Page not found | ${seo.siteName}`;
    const description = route ? route.description : "The page you are looking for could not be found.";
    const url = seo.siteUrl + (clean === "/" ? "/" : clean);

    document.title = title;
    setAttr('meta[name="description"]', "content", description);
    setAttr('meta[property="og:title"]', "content", title);
    setAttr('meta[property="og:description"]', "content", description);
    setAttr('meta[name="twitter:title"]', "content", title);
    setAttr('meta[name="twitter:description"]', "content", description);
    setAttr('meta[name="robots"]', "content", route ? "index, follow, max-image-preview:large" : "noindex, follow");
    if (route) {
      setAttr('link[rel="canonical"]', "href", url);
      setAttr('link[rel="alternate"][hreflang="en-GB"]', "href", url);
      setAttr('meta[property="og:url"]', "content", url);
    }
  }, [pathname]);

  return null;
};

export default SeoManager;
