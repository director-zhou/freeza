<template>
  <!-- <div></div> -->
  <a-layout style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed">
      <FreezaLogo :collapsed="collapsed" />
      <freeza-menu />
    </a-layout-sider>
    <a-layout class="freeza_container">
      <slot name="header"><freeza-header v-model:collapsed="collapsed" /></slot>
      <FreezaTabs />
      <a-layout-content class="freeza-content">
        <router-view v-slot="{ Component }">
          <keep-alive :include="keepAliveList">
            <component :is="Component" :key="$route.meta._FREEZA_ROUTER_?.menuMicroPath || ''"></component>
          </keep-alive>
        </router-view>
      </a-layout-content>
      <slot name="footer">
        <FreezaFooter />
      </slot>
    </a-layout>
  </a-layout>
</template>

<script>
import { getCurrentInstance } from 'vue';
import { transformMenuList } from './utils/index';
import { freezaConfig } from './utils/cacheConfig.js';
import { flatMenuFn } from './utils/index.js';
import FreezaMenu from './layout/menu/index.vue';
import FreezaHeader from './layout/header/index.vue';
import FreezaFooter from './layout/footer/index.vue';
import FreezaLogo from './layout/logo/index.vue';
import FreezaTabs from './layout/tab/index.vue';
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
    FreezaHeader,
    FreezaLogo,
    FreezaTabs
  },

  setup() {
    const { menuList = [] } = freezaConfig;
    const app = getCurrentInstance();
    const collapsed = ref(false);
    transformMenuList(menuList);
    const { flatMenu, keepAliveList } = flatMenuFn(menuList);
    keepAliveList.push('FreezaMircoWrap');
    app.appContext.provides.freezaConfig = {
      flatMenu,
      menuList: freezaConfig.menuList
    };

    return {
      collapsed,
      keepAliveList
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
