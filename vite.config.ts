import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
// import prefixer from "postcss-prefix-selector";
// import autoprefixer from "autoprefixer";
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
    preview: {
      port,
    },

    build: {
      target: "esnext",
      minify: false,
      outDir: "dist",
    },
    plugins: [
      react(),
      tailwindcss(),

      federation({
        name: APP_NAME,
        filename: "remoteEntry.js",
        exposes: {
          "./showcase": "./src/page/showcase",
          // "./ZustandExample": "./src/page/zustand-example",
          "./home": "./src/page/home",
          "./not-found": "./src/page/not-found",
          "./styles.css": "./src/index.css", //
        },
        shared: {
          react: {
            singleton: true,
            requiredVersion: packageJson.dependencies.react,
          },
          "react-dom": {
            singleton: true,
            requiredVersion: packageJson.dependencies["react-dom"],
          },
          "react-router": {
            singleton: true,
            requiredVersion: packageJson.dependencies["react-router"],
          },
        },
      }),
    ],
    // css: {
    //   postcss: {
    //     plugins: [
    //       prefixer({
    //         prefix: "#mfe-remote-1",
    //       }),
    //       autoprefixer({}),
    //     ],
    //   },
    // },
  };
});
