<template>
  <a-menu class="freeza_menu" v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
    <FreezaMenuItem :menu-list="menuList" :goPageHandle="goPageHandle" />
  </a-menu>
</template>

<script>
import { defineComponent, inject, ref } from 'vue';
import { useRouter } from 'vue-router';
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
    const selectedKeys = ref([]);
    const freezaConfig = inject('freezaConfig');
    const goPageHandle = menu => {
      router.push(menu.menuPath);
    };
    return {
      goPageHandle,
      selectedKeys,
      menuList: freezaConfig.menuList
    };
  }
});
</script>

<style>
.freeza_menu {
  height: calc(100vh - 112px);
  overflow-y: scroll;
}
</style>
