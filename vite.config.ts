import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";
import autoprefixer from "autoprefixer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: { outDir: "build" },
  base: "/",
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  css: {
    postcss: {
      plugins: [autoprefixer({})],
    },
  },
});
