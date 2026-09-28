import { defineConfig } from "vite";
import { readFileSync } from "node:fs";
import { renderContent, escapeHtml } from "./src/render-content.js";

export default defineConfig({
  base: "/",
  publicDir: "public",
  plugins: [
    {
      name: "ralskies-static-content",
      transformIndexHtml: {
        order: "pre",
        handler(html) {
          const content = JSON.parse(
            readFileSync(
              new URL("./public/data/content.json", import.meta.url),
              "utf8",
            ).replace(/^\uFEFF/, ""),
          );
          let result = renderContent(html, content);
          const siteUrl = process.env.SITE_URL;
          if (siteUrl) {
            const origin = new URL(siteUrl).origin;
            result = result.replace(
              'content="/photos/ralskies-blue-portrait.jpg"',
              `content="${escapeHtml(origin)}/photos/ralskies-blue-portrait.jpg"`,
            );
            result = result.replace(
              "</head>",
              `<link rel="canonical" href="${escapeHtml(origin)}/"><meta property="og:url" content="${escapeHtml(origin)}/"></head>`,
            );
          }
          return result;
        },
      },
    },
  ],
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
