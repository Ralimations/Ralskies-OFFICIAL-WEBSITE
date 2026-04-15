import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/",
  publicDir: "public",
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        contentStudio: resolve(__dirname, "content-studio.html")
      }
    }
  }
});
