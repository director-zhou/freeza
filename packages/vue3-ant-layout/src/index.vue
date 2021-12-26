<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <FreezaLogo />
      <freeza-menu />
    </a-layout-sider>
    <a-layout class="freeza_container">
      <slot name="header">
        <freeza-header />
      </slot>
      <a-layout-content class="freeza-content">
        <router-view></router-view>
      </a-layout-content>
      <slot name="footer">
        <FreezaFooter />
      </slot>
    </a-layout>
  </a-layout>
</template>

<script>
import { inject, getCurrentInstance } from 'vue';
import { flatMenuFn } from './utils/index.js';
import FreezaMenu from './layout/menu/index.vue';
import FreezaBreadCrumb from './layout/breadcrumb/index.vue';
import FreezaHeader from './layout/header/index.vue';
import FreezaFooter from './layout/footer/index.vue';
import FreezaLogo from './layout/logo/index.vue';
import { Layout } from 'ant-design-vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'FreezaIndex',
  components: {
    [Layout.name]: Layout,
    [Layout.Sider.name]: Layout.Sider,
    [Layout.Content.name]: Layout.Content,
    FreezaMenu,
    FreezaFooter,
    FreezaBreadCrumb,
    FreezaHeader,
    FreezaLogo
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
.freeza_container {
  height: 100vh;
}
.freeza-content {
  flex: 1;
  background: #ffffff;
  overflow-y: auto;
  padding: 15px;
}
</style>
