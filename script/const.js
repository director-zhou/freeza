import path from 'path';
const cwd = process.cwd();

const projectList = {
  'vue3-ant-layout': {
    external: ['vue', /^ant-design-vue/, 'vue-router'],
    formats: ['es', 'cjs'],
    entryFileName: 'index.js'
  },
  'vue-router': {
    external: ['vue-router', 'import.meta.global'],
    formats: ['es', 'cjs'],
    bundleList: {
      index: {
        entryFileName: 'index.js'
      },
      vite: {
        entryFileName: 'src/vite.js'
      },
      webpack: {
        entryFileName: 'src/webpack.js'
      }
    }
  }
};

export const configuration = {};

Object.keys(projectList).forEach(item => {
  const { formats, entryFileName, bundleList, external } = projectList[item];
  let tranfrom = [];
  if (bundleList) {
    Object.keys(bundleList).forEach(b => {
      const { entryFileName } = bundleList[b];
      const tranfromItem = formats.map(f => {
        return {
          external,
          input: path.resolve(cwd, 'packages', item, entryFileName),
          file: path.resolve(cwd, 'packages', item, 'dist', `${b}.${f}.js`),
          format: f
        };
      });
      tranfrom = tranfrom.concat(tranfromItem);
    });
  } else {
    tranfrom = formats.map(f => {
      return {
        ...projectList[item],
        input: path.resolve(cwd, 'packages', item, entryFileName),
        file: path.resolve(cwd, 'packages', item, 'dist', `index.${f}.js`),
        format: f
      };
    });
  }

  configuration[item] = tranfrom;
});
// console.log(configuration);
