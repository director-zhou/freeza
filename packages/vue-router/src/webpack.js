import { registerRouter } from './resgister';

function loopMenuList(menuList) {
  menuList.forEach(item => {
    const { menuDir, menuPath, children } = item;
    if (children && children.length > 0) {
      loopMenuList(item.children);
    } else {
      item.menuComponent = () => import(`/src/views${menuPath || menuDir}/index.vue`);
    }
  });
}

export function webpackRegisterRouter(menuList, options) {
  loopMenuList(menuList);
  return registerRouter(menuList, options);
}
