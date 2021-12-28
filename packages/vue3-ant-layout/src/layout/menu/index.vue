<template>
  <a-menu
    class="freeza_menu"
    v-model:selectedKeys="selectedKeys"
    v-model:openKeys="openKeys"
    theme="dark"
    mode="inline"
  >
    <FreezaMenuItem :menu-list="menuList" :goPageHandle="goPageHandle" />
  </a-menu>
</template>

<script>
import { defineComponent, inject, ref, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { Menu } from 'ant-design-vue';
import FreezaMenuItem from './item.vue';
export default defineComponent({
  name: 'FreezaMenu',
  components: {
    [Menu.name]: Menu,
    FreezaMenuItem
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const selectedKeys = ref([]);
    const openKeys = ref([]);
    const config = inject('freezaConfig');
    const { flatMenu } = config;
    watch(
      () => route.matched,
      value => {
        const matchPath = value.length > 0 && value[0].path;
        if (matchPath === '/') {
          selectedKeys.value = [];
          openKeys.value = [];
        } else {
          selectedKeys.value = matchPath && flatMenu[matchPath] ? [flatMenu[matchPath].menuPath] : [];
          openKeys.value = matchPath && flatMenu[matchPath] ? flatMenu[matchPath]._FREEZA_META_.subMenuFullKey : [];
        }
      }
    );
    const goPageHandle = menu => {
      router.push(menu.menuPath);
    };
    return {
      goPageHandle,
      selectedKeys,
      openKeys,
      menuList: config.menuList
    };
  }
});
</script>

<style>
.freeza_menu {
  height: calc(100vh - 53px);
  overflow-y: scroll;
}
</style>
