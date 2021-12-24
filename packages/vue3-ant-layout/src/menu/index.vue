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
    console.log(1);
    const freezaConfig = inject('freezaConfig');
    return {
      menuList: freezaConfig.menuList
    };
  }
});
</script>
