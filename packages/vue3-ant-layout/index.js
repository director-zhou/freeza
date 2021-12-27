import Layout from './src/index.vue';
import 'ant-design-vue/dist/antd.less';
import Home from './src/page/home/index.vue';
import NotFound from './src/page/404/index.vue';

let freezaConfig = null;
function startLayout({ router, menuList }) {
  router.addRoute({
    path: '/',
    component: Home
  });
  router.addRoute({
    path: '/404',
    component: NotFound
  });
  freezaConfig = {
    menuList
  };
  return Layout;
}
export default startLayout;

export { freezaConfig };
