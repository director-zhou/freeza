import Layout from './src/index.vue';
import 'ant-design-vue/dist/antd.less';
import Home from './src/page/home/index.vue';
import NotFound from './src/page/404/index.vue';
import { cacheConfig } from './src/utils/cacheConfig.js';

function startLayout(config) {
  const { router, homeComponent } = config;
  cacheConfig(config);
  router.addRoute({
    path: '/',
    component: homeComponent || Home
  });
  router.addRoute({
    path: '/404',
    component: NotFound
  });
  return Layout;
}
export default startLayout;
