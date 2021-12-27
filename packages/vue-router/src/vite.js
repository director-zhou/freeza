import { registerRouter } from './resgister';

const module = import.meta.global('/src/views/**/*/index.vue');

function loopMenuList(menuList) {
  menuList.forEach(item => {
    const { menuDir, menuPath, children } = item;
    if (children && children.length > 0) {
      loopMenuList(item.children);
    } else {
      item.menuComponent = module[`/src/views${menuPath || menuDir}/index.vue`];
    }
  });
}

export function viteRegisterRouter(menuList, options) {
  loopMenuList(menuList);
  return registerRouter(menuList, options);
}
