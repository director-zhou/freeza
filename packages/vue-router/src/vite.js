import { registerRouter } from './resgister';

const module = import.meta.global('/src/views/**/*/index.vue');

function loopMenuList(menuList) {
  menuList.forEach(item => {
    if (item.children && item.children.length > 0) {
      loopMenuList(item.children);
    } else {
      item.menuComponent = module[`/src/views${item.menuDir}/index.vue`];
    }
  });
}

export function viteRegisterRouter(menuList, options) {
  loopMenuList(menuList, module);
  return registerRouter(menuList, options);
}
