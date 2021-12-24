import { createRouter, createWebHistory } from 'vue-router';

const routes = [];

function loopRoutes(list) {
  list.forEach(item => {
    const { menuPath, menuDir, children } = item;
    if (children && children.length > 0) {
      loopRoutes(children);
    } else {
      if (menuPath && menuDir) {
        routes.push({
          path: menuPath,
          component: () => import(`${_FREEZA_ROUTER_BASE_}/${menuDir}/index.vue`)
        });
      }
      if (!menuPath) {
        console.error(item);
      }
    }
  });
}

export function registerRouter(params) {
  const { menuList, base, module } = params;
  loopRoutes(menuList);
  const router = createRouter({
    history: createWebHistory(base),
    routes
  });
  return router;
}
