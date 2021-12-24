import path from 'path';
const cwd = process.cwd();

function buildPath(project) {
  return path.resolve(cwd, 'packages', `${project}`, 'index.js');
}

const projectList = ['vue3-ant-layout'];
