import path from 'path';
const cwd = process.cwd();

const projectList = [
  {
    pkg: 'vue3-ant-layout',
    external: ['vue', /^ant-design-vue/, 'vue-router'],
    formats: ['es', 'cjs'],
    entryFileName: 'index.js'
  },
  {
    pkg: 'vue-router',
    external: ['vue-router'],
    formats: ['es', 'cjs'],
    entryFileName: 'index.js'
  }
];

export const configuration = {};

projectList.forEach(p => {
  const { pkg, entryFileName } = p;
  configuration[p.pkg] = {
    ...p,
    entry: path.resolve(cwd, 'packages', pkg, entryFileName),
    outputDir: path.resolve(cwd, 'packages', pkg, 'dist')
  };
});
