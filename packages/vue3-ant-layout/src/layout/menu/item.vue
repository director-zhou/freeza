<template>
  <template v-for="(item, index) in menuList" :key="index">
    <a-sub-menu v-if="item.children && item.children.length > 0" :key="item._FREEZA_SUBMENU_KEY_UUID_">
      <template #title>{{ item.menuName }}</template>
      <FreezaMenuItem :menu-list="item.children" :goPageHandle="goPageHandle" />
    </a-sub-menu>
    <a-menu-item @click="goPageHandle(item)" v-else :key="item.menuPath"
      ><span>{{ item.menuName }}</span></a-menu-item
    >
  </template>
</template>

<script>
import { Menu } from 'ant-design-vue';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'FreezaMenuItem',
  components: {
    [Menu.Item.name]: Menu.Item,
    [Menu.SubMenu.name]: Menu.SubMenu
  },
  props: {
    goPageHandle: {
      type: Function,
      required: true
    },
    menuList: {
      type: Array,
      required: true
    }
  },
  setup() {}
});
</script>
