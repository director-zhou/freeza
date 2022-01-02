import { registerRouter } from './resgister';

const module = import.meta.global('/src/views/**/*/index.vue');

function loopMenuList(menuList) {
  menuList.map(item => {
    const { menuDir, menuPath, children } = item;
    if (children && children.length > 0) {
      return {
        ...item,
        children: loopMenuList(item.children)
      };
    } else {
      return {
        ...item,
        menuComponent: module[`/src/views${menuPath || menuDir}/index.vue`]
      };
    }
  });
}

export function viteRegisterRouter(menuList, options) {
  const tranformMenuList = loopMenuList(menuList);
  return registerRouter(tranformMenuList, options);
}
