import { createRouter, createWebHistory } from 'vue-router';

const routes = [];

function loopRoutes(list) {
  list.forEach(item => {
    const { menuPath, children, menuComponent } = item;
    if (children && children.length > 0) {
      loopRoutes(children);
    } else {
      if (menuPath) {
        if (menuComponent) {
          routes.push({
            path: menuPath,
            component: menuComponent
          });
        }
      }
      if (!menuPath) {
        console.error(item);
      }
    }
  });
}

export function registerRouter(params) {
  const { menuList, base } = params;
  loopRoutes(menuList);
  const router = createRouter({
    history: createWebHistory(base),
    routes
  });
  return router;
}
