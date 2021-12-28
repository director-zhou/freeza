import minimist from 'minimist';
import { configuration } from './const.js';
import { rollup, watch as rollupWatch } from 'rollup';
import styles from 'rollup-plugin-styles';
import vuePlugin from 'rollup-plugin-vue';
import image from '@rollup/plugin-image';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
const args = minimist(process.argv.slice(2));
const { project, watch } = args;

async function startBuild(config) {
  const { input, external, format, file } = config;
  const inputOptions = {
    input,
    plugins: [vuePlugin(), styles(), image(), nodeResolve(), commonjs()],
    external
  };
  const outputOptions = {
    format,
    file,
    inlineDynamicImports: true,
    ...(format === 'cjs' ? { exports: 'auto' } : {})
  };

  if (watch) {
    const watcher = await rollupWatch({ ...inputOptions, output: [outputOptions] });
    watcher.on('event', event => {
      console.log(event);
    });
  } else {
    const bundle = await rollup(inputOptions);
    await bundle.write(outputOptions);
  }
}

if (project) {
} else {
  Object.keys(configuration).forEach(item => {
    const configList = configuration[item];
    configList.forEach(c => {
      startBuild(c);
    });
  });
}
