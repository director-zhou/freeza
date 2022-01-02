<template>
  <router-view v-slot="{ Component }">
    <keep-alive :include="keepAliveList">
      <component :is="Component"></component>
    </keep-alive>
  </router-view>
</template>

<script>
import { defineComponent } from 'vue';
import { getKeepAliveList } from './utils/index';
import { freezaConfig } from './utils/cacheConfig.js';
export default defineComponent({
  name: 'FreezaMicroLayout',
  setup() {
    const { menuList = [] } = freezaConfig;
    const keepAliveList = getKeepAliveList(menuList);
    return {
      keepAliveList
    };
  }
});
</script>
