import { registerRouter } from './resgister';

function loopMenuList(menuList) {
  return menuList.map(item => {
    const { menuDir, menuPath, children } = item;
    if (children && children.length > 0) {
      return {
        ...item,
        children: loopMenuList(item.children)
      };
    } else {
      return {
        ...item,
        menuComponent: () => import(`/src/views${menuPath || menuDir}/index.vue`)
      };
    }
  });
}

export function webpackRegisterRouter(menuList, options) {
  const tranformMenuList = loopMenuList(menuList);
  return registerRouter(tranformMenuList, options);
}
