import {fileURLToPath, URL} from "node:url";
import {resolve} from "path";
import {defineConfig} from "vite";
import {libInjectCss} from "vite-plugin-lib-inject-css";
import {viteStaticCopy} from "vite-plugin-static-copy";

const replaceFontPath = (mode: string): {[key: string]: string} =>
  mode !== "production"
    ? {"@peter-p-prat/design-system/dist/fonts": "/fonts"}
    : {___: "___"};

export default defineConfig(({mode}) => ({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.tsx"),
      name: "design-system",
      fileName: "index",
    },
    rollupOptions: {
      external: ["react"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
  plugins: [
    libInjectCss(),
    viteStaticCopy({
      targets: [
        {
          src: ["src/Foundations/theme/*"],
          dest: "assets",
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      "@app": fileURLToPath(new URL("./src", import.meta.url)),
      ...replaceFontPath(mode),
    },
  },
}));
