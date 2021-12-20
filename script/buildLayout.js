import { build } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';

async function startBuild() {
  await build({
    root: path.resolve(process.cwd(), 'packages/vue3-antd-layout'),
    plugins: [vue()],
    build: {
      // watch: true,
      lib: {
        entry: path.resolve(process.cwd(), 'packages/vue3-antd-layout/index.js'),
        name: 'Vue3AntdLayout',
        formats: ['es', 'cjs', 'umd'],
        fileName: module => {
          return `index.${module}.js`;
        }
      },
      rollupOptions: {
        external: ['vue']
      }
    }
  });
}

startBuild();
