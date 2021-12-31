import wrap from './src/wrap.vue';
import modifyPath from './src/qinkun-path.js';
function registerMicro({ router, menuList }) {
  function loopRegister(menuList) {
    menuList.forEach(item => {
      const { children, menuPath, menuMicroPath } = item;
      if (children && children.length > 0) {
        loopRegister(children);
      } else {
        if (menuMicroPath) {
          router.addRoute({
            path: menuPath,
            component: wrap,
            meta: {
              _FREEZA_ROUTER_: {
                menuMicroPath
              }
            },
            props: {
              entry: menuMicroPath
            }
          });
        }
      }
    });
  }
  loopRegister(menuList);
}
export { wrap, modifyPath, registerMicro };
