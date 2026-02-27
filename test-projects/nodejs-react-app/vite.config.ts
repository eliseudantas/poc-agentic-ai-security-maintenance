import { defineConfig, loadEnv } from "vite";
import eslint from "vite-plugin-eslint";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "node:path";
import svgr from "vite-plugin-svgr";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [
      react(),
      ...(mode !== "production" ? [eslint()] : []),
      svgr(),
    ],
    build: {
      outDir: "build",
    },
    server: {
      port: parseInt(env.PORT ?? "5173"),
    },
    preview: {
      port: parseInt(env.PORT ?? "5173"),
    },
    resolve: {
      alias: [{ find: "@", replacement: resolve(process.cwd(), "./src") }],
    },
    test: {
      environment: "jsdom",
      globals: true,
      setupFiles: "./src/setupTests.js",
      coverage: {
        reporter: ["text", "lcov"],
        provider: "v8",
        exclude: [
          "node_modules",
          "build",
          "**/*.test.js",
          "**/*.test.jsx",
          "**/*.spec.js",
          "**/*.spec.jsx",
        ],
      },
      exclude: ["node_modules", "build"],
    },
    define: {
      "process.env.REACT_APP_SKYNET_PLATFORM_URL": JSON.stringify(
        env.REACT_APP_SKYNET_PLATFORM_URL
      ),
      "process.env.REACT_APP_DEFAULT_LANG": JSON.stringify(
        env.REACT_APP_DEFAULT_LANG
      ),
      "process.env.REACT_APP_DEBUG_ERRORS": JSON.stringify(
        env.REACT_APP_DEBUG_ERRORS
      ),
      "process.env.BUILD_TARGET": JSON.stringify(env.BUILD_TARGET),
      "process.env.REACT_APP_XTEA_KEY": JSON.stringify(env.REACT_APP_XTEA_KEY),
    },
  };
});
