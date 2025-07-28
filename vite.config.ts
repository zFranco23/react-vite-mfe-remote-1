import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  const port = Number(env.VITE_PORT) || 3001;
  return {
    base: env.VITE_BASE_URL,
    server: {
      port,
    },
    build: {
      minify: false,
      target: "esnext",
      emptyOutDir: true,
      outDir: "dist",
    },
    plugins: [react(), tailwindcss()],
  };
});
