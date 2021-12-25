<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="logo"></div>
      <freeza-menu />
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0" />
      <a-layout-content>
        <FreezaBreadCrumb style="margin: 16px 16px" />
        <div style="padding: 10px; margin: 0px 16px; background: #ffffff; height: 100%">
          <router-view></router-view>
        </div>
      </a-layout-content>
      <slot name="footer">
        <a-layout-footer style="text-align: center"> Ant Design ©2018 Created by Ant UED </a-layout-footer>
      </slot>
    </a-layout>
  </a-layout>
</template>

<script>
import { inject, getCurrentInstance } from 'vue';
import { flatMenuFn } from './utils/index.js';
import FreezaMenu from './layout/menu/index.vue';
import FreezaBreadCrumb from './layout/breadcrumb/index.vue';
import { Layout, Breadcrumb } from 'ant-design-vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'FreezaIndex',
  components: {
    [Layout.name]: Layout,
    [Layout.Sider.name]: Layout.Sider,
    [Layout.Header.name]: Layout.Header,
    [Layout.Content.name]: Layout.Content,
    [Layout.Footer.name]: Layout.Footer,
    [Breadcrumb.name]: Breadcrumb,
    FreezaMenu,
    FreezaBreadCrumb
  },
  setup() {
    const app = getCurrentInstance();
    const collapsed = ref(false);
    const config = inject('freezaConfig') || {};
    const flatMenu = flatMenuFn(config.menuList || []);
    app.appContext.provides.freezaConfig.flatMenu = flatMenu;
    return {
      collapsed,
      config
    };
  }
});
</script>

<style>
.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}
</style>
