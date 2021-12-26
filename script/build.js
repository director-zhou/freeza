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
      cssCodeSplit: true,
      watch,
      lib: {
        entry,
        formats: watch ? ['es'] : formats,
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
  console.log(config);
  if (config) {
    startBuild(config);
  } else {
    console.log('请输入正确的项目名');
  }
} else {
  const projectNameList = Object.keys(configuration);
  for (let i = 0; i < projectNameList.length; i++) {
    startBuild(configuration[projectNameList[i]]);
  }
}
