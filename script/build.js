import { build } from 'vite';
import minimist from 'minimist';
import { configuration } from './const.js';
import vue from '@vitejs/plugin-vue';

const args = minimist(process.argv.slice(2));
const { watch, project } = args;

async function startBuild(config) {
  const { entry, formats, external, outputDir } = config;
  await build({
    plugins: [vue()],
    build: {
      watch,
      lib: {
        entry,
        formats,
        fileName: module => {
          return `index.${module}.js`;
        }
      },
      rollupOptions: {
        output: {
          dir: outputDir
        },
        external
      }
    }
  });
}

if (project) {
  const config = configuration[project];
  if (config) {
    startBuild(config);
  } else {
    console.log('请输入正确的项目名');
  }
}
