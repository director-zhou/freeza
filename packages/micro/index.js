import Wrap from './src/wrap.vue';
export function registerMicro({ router, menuList }) {
  function loopRegister(menuList) {
    menuList.forEach(item => {
      const { children, menuPath, menuMicro } = item;
      if (children && children.length > 0) {
        loopRegister(children);
      } else {
        if (menuMicro) {
          router.addRoute({
            path: menuPath,
            component: Wrap
          });
        }
      }
    });
  }
  loopRegister(menuList);
}

// 这里注册一个
