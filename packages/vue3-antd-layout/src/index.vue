<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="logo">{{ config.b }}</div>
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item key="1">
          <span>nav 111111</span>
        </a-menu-item>
        <a-menu-item key="2">
          <span>nav 2111</span>
        </a-menu-item>
        <a-menu-item key="3">
          <span>nav 3</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0" />
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>User</a-breadcrumb-item>
          <a-breadcrumb-item>Bill</a-breadcrumb-item>
        </a-breadcrumb>
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">Bill is a cat.</div>
      </a-layout-content>
      <a-layout-footer style="text-align: center"> Ant Design ©2018 Created by Ant UED </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import { inject } from 'vue';
import { Layout, Menu, Breadcrumb } from 'ant-design-vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'AB',
  components: {
    [Layout.name]: Layout,
    [Layout.Sider.name]: Layout.Sider,
    [Layout.Header.name]: Layout.Header,
    [Layout.Content.name]: Layout.Content,
    [Layout.Footer.name]: Layout.Footer,
    [Breadcrumb.name]: Breadcrumb,
    [Menu.name]: Menu,
    [Menu.Item.name]: Menu.Item
  },
  setup() {
    const collapsed = ref(false);
    const config = inject('config');
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
