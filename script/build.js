import { build } from 'vite';
import path from 'path';
import minimist from 'minimist';
import vue from '@vitejs/plugin-vue';

const args = minimist(process.argv.slice(2));

console.log(args);

// async function startBuild() {
//   await build({
//     plugins: [vue()],
//     build: {
//       watch: true,
//       lib: {
//         entry: path.resolve(process.cwd(), 'packages/vue3-antd-layout/index.js'),
//         formats: ['es', 'cjs'],
//         fileName: module => {
//           return `index.${module}.js`;
//         }
//       },
//       rollupOptions: {
//         external: ['vue', /^ant-design-vue/]
//       }
//     }
//   });
// }

// startBuild();
