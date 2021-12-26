import { registerRouter } from './resgister';

function loopMenuList(menuList) {
  menuList.forEach(item => {
    if (item.children && item.children.length > 0) {
      loopMenuList(item.children);
    } else {
      item.menuComponent = () => import(`/src/views${item.menuDir}/index.vue`);
    }
  });
}

export function webpackRegisterRouter({ menuList, module }, options) {
  if (module) {
    loopMenuList(menuList);
  }
  return registerRouter(menuList, options);
}
