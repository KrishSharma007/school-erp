import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  const isProduction = mode === "production";
  
  return {
    plugins: [react(), tailwindcss()],
    server: {
      port: 5173,
      host: true,
    },
    build: {
      outDir: "dist",
      sourcemap: !isProduction,
      minify: isProduction ? "terser" : false,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ["react", "react-dom"],
            router: ["react-router-dom"],
            icons: ["lucide-react"],
          },
        },
      },
      terserOptions: isProduction ? {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      } : undefined,
    },
    define: {
      __DEV__: !isProduction,
    },
    // Add base path configuration for better routing support
    base: "/",
  };
});
