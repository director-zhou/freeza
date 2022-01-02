import { createRouter, createWebHistory } from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
const routes = [];

function loopRoutes(list) {
  list.forEach(item => {
    const { menuPath, children, menuComponent, menuMicroPath, RouteRecordRaw = {}, menuOwn } = item;
    if (children && children.length > 0) {
      loopRoutes(children);
    } else {
      if ((!window.__POWERED_BY_QIANKUN__ && !menuMicroPath) || (window.__POWERED_BY_QIANKUN__ && menuOwn)) {
        routes.push({
          ...RouteRecordRaw,
          path: menuPath,
          component: menuComponent
        });
      }
    }
  });
  return routes;
}

export function registerRouter(menuList, options = {}) {
  let { base } = options;
  loopRoutes(menuList);
  const router = createRouter({
    history: createWebHistory(base),
    routes
  });
  router.beforeEach(to => {
    if ((!window.__POWERED_BY_QIANKUN__ && !to.meta?._FREEZA_ROUTER_?.menuMicroPath) || window.__POWERED_BY_QIANKUN__) {
      NProgress.start();
    }
  });
  router.afterEach(to => {
    if ((!window.__POWERED_BY_QIANKUN__ && !to.meta?._FREEZA_ROUTER_?.menuMicroPath) || window.__POWERED_BY_QIANKUN__) {
      NProgress.done();
    }
  });
  return router;
}
