import { build } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";

(async () => {
  await build({
    root: path.resolve(process.cwd(), "packages/vue3-antd-layout"),
    plugins: [vue()],
    build: {
      watch: true,
      lib: {
        entry: path.resolve(
          process.cwd(),
          "packages/vue3-antd-layout/index.js"
        ),
        name: "Vue3AntdLayout",
        formats: ["es", "umd"],
        fileName: () => {
          return "index.js";
        },
      },
      rollupOptions: {
        external: ["vue"],
      },
    },
  });
})();
