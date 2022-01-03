import { defineConfig } from "vite";
import viteTestPlugin from "vite-plugin-test";
import path from "path";

import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import autoprefixer from "autoprefixer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    viteTestPlugin({
      watch: true,
      dir: "./tests",
      loaders: {
        ".test.ts": "ts",
        ".test.tsx": "tsx",
      },
    }),
  ],
  build: {
    outDir: "build",
  },
  css: {
    postcss: {
      plugins: [autoprefixer()],
    },
  },
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "./src"),
      "@shared": path.resolve(__dirname, "../shared"),
    },
  },
});
