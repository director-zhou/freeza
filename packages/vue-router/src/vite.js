import { registerRouter } from './resgister';

function loopMenuList(menuList, module) {
  menuList.forEach(item => {
    if (item.children && item.children.length > 0) {
      loopMenuList(item.children, module);
    } else {
      console.log(2);
      item.menuComponent = module[`/src/views${item.menuDir}/index.vue`];
    }
  });
}

export function viteRegisterRouter({ menuList, module }, options) {
  if (1 === 1) {
    module = import.meta.global('/src/views/**/*/index.vue');
  }

  loopMenuList(menuList, module);
  return registerRouter(menuList, options);
}
