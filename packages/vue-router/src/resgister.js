import { createRouter, createWebHistory } from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
const routes = [];

function loopRoutes(list) {
  list.forEach(item => {
    const { menuPath, children, menuComponent, menuMicroPath, RouteRecordRaw = {} } = item;
    if (children && children.length > 0) {
      loopRoutes(children);
    } else {
      if (!menuMicroPath) {
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
  router.beforeEach(() => {
    NProgress.start();
  });
  router.afterEach(() => {
    NProgress.done();
  });
  return router;
}
