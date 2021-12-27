import minimist from 'minimist';
import { configuration } from './const.js';
import { rollup, watch as rollupWatch } from 'rollup';
import styles from 'rollup-plugin-styles';
import vuePlugin from 'rollup-plugin-vue';
const args = minimist(process.argv.slice(2));
const { project, watch } = args;

async function startBuild(config) {
  const { input, external, format, file } = config;
  const outputOptions = {
    format,
    file,
    ...(format === 'cjs' ? { exports: 'auto' } : {})
  };
  const inputOptions = {
    input,
    plugins: [vuePlugin(), styles()],
    external
  };
  if (watch) {
    const watcher = rollupWatch({ ...inputOptions, output: [outputOptions] });
    watcher.on('event', event => {});
  } else {
    const bundle = await rollup(inputOptions);
    await bundle.write(outputOptions);
  }
}

if (project) {
} else {
  Object.keys(configuration).forEach(item => {
    const configList = configuration[item];
    configList.forEach(item => {
      startBuild(item);
    });
  });
}
