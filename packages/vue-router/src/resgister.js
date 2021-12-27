import { createRouter, createWebHistory } from 'vue-router';

const routes = [];

function loopRoutes(list) {
  list.forEach(item => {
    const { menuPath, children, menuComponent } = item;
    if (children && children.length > 0) {
      loopRoutes(children);
    } else {
      routes.push({
        path: menuPath,
        component: menuComponent
      });
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
  return router;
}
