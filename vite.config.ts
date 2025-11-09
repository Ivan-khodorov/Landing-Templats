import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as svgrImport from "vite-plugin-svgr";

// normalize svgr export (default / named)
const svgr =
  (svgrImport as any)?.default ??
  (svgrImport as any)?.svgr ??
  (svgrImport as any);

export default defineConfig({
  base: process.env.VITE_BASE_URL || "/",
  plugins: [
    react(),
    // подключаем SVGR, если это функция (некоторые версии экспортируют объект)
    (typeof svgr === "function")
      ? svgr({ include: "**/*.svg", svgrOptions: { icon: true } })
      : []
  ],
  resolve: {
    alias: {
      "@": "/src",
      "@app": "/src/app",
      "@components": "/src/app/components",
      "@pages": "/src/app/pages"
    }
  },
  server: {
    proxy: {
      "/api": {
        target: process.env.VITE_API_PROXY_TARGET || "http://localhost:8080",
        changeOrigin: true,
        secure: false,
        rewrite: (p) => p.replace(/^\/api/, "")
      }
    }
  }
});
