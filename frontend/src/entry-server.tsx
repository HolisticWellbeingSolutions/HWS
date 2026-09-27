/**
 * Build-time pre-renderer entry (not shipped to browsers).
 * Renders each page to static HTML so search engines and AI crawlers that
 * don't run JavaScript can still read the full page text.
 * Used by the seoPrerender plugin in vite.config.ts.
 */
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { AppProviders, AppContent } from "./App";

export function render(url: string): string {
  return renderToString(
    <AppProviders>
      <StaticRouter location={url}>
        <AppContent />
      </StaticRouter>
    </AppProviders>,
  );
}
