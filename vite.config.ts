import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

import tailwindcss from "@tailwindcss/vite";
import { federation } from "@module-federation/vite";

import packageJson from "./package.json";

const APP_NAME = "mfe-remote-1";
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
    plugins: [
      react(),
      tailwindcss(),

      federation({
        name: APP_NAME,
        filename: "remoteEntry.js",
        exposes: {
          "./Showcase": "./src/page/showcase",
        },
        shared: {
          react: {
            singleton: true,
            version: packageJson.dependencies.react,
          },
          "react-dom": {
            singleton: true,
            version: packageJson.dependencies["react-dom"],
          },
        },
      }),
    ],
  };
});
