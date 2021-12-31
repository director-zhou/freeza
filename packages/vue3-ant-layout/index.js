import Layout from './src/index.vue';
import MicroLayout from './src/micro.vue';
import 'ant-design-vue/dist/antd.less';
import Home from './src/page/home/index.vue';
import NotFound from './src/page/404/index.vue';
import { cacheConfig } from './src/utils/cacheConfig.js';

function startLayout(config) {
  const { router } = config;
  cacheConfig(config);
  if (!window.__POWERED_BY_QIANKUN__) {
    router.addRoute({
      path: '/',
      component: Home
    });
    router.addRoute({
      path: '/404',
      component: NotFound
    });
  }

  return window.__POWERED_BY_QIANKUN__ ? MicroLayout : Layout;
}
export default startLayout;
