<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="logo"></div>
      <freeza-menu />
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0" />
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
          <!-- <a-breadcrumb-item>User</a-breadcrumb-item>
          <a-breadcrumb-item>Bill</a-breadcrumb-item> -->
        </a-breadcrumb>
        <div><router-view></router-view></div>
      </a-layout-content>
      <slot name="footer">
        <a-layout-footer style="text-align: center"> Ant Design ©2018 Created by Ant UED </a-layout-footer>
      </slot>
    </a-layout>
  </a-layout>
</template>

<script>
import { inject } from 'vue';
import FreezaMenu from './menu/index.vue';
import { Layout, Breadcrumb } from 'ant-design-vue';
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
    FreezaMenu
  },
  setup() {
    const collapsed = ref(false);
    const config = inject('freezaConfig');
    return {
      collapsed,
      config: config || {
        title: 'freeza'
      }
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
