import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import svgr from "vite-plugin-svgr";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte(), svgr()],
  build: {
    outDir: "dist",
    assetsDir: "assets",
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
