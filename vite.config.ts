/// <reference types="vitest/config" />

import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    server: {
      port: Number(env.PORT),
    },
    resolve: {
      alias: {
        "@": "/src",
      },
    },
    define: {
      "import.meta.env.BASE_URL": JSON.stringify(env.BASE_URL),
    },
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./src/test/setup.ts",
      css: false,
      deps: {
        inline: ["@vitest/browser"],
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern", // or "modern"
        },
      },
    },
    deps: {
      optimizer: {
        web: {
          include: ["element-plus"],
        },
      },
    },
  };
});
