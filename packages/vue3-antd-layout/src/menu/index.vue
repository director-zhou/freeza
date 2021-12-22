<template>
  <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
    <FreezaMenuItem :menu-list="menuList" />
  </a-menu>
</template>

<script>
import { defineComponent, inject } from 'vue';
import { Menu } from 'ant-design-vue';
import FreezaMenuItem from './item.vue';
export default defineComponent({
  name: 'FreezaMenu',
  components: {
    [Menu.name]: Menu,
    FreezaMenuItem
  },
  setup() {
    const freezaConfig = inject('freezaConfig');
    console.log(freezaConfig.menuList);
    return {
      menuList: freezaConfig.menuList
    };
  }
});
</script>
