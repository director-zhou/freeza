<template>
  <a-menu-item v-for="(item, index) in menuList" :key="index">
    <a-sub-menu v-if="item.children && item.children.length > 0" :menu-list="item.menuList"></a-sub-menu>
    <span v-else>{{ item.menuName }}</span>
  </a-menu-item>
</template>

<script>
import { Menu } from 'ant-design-vue';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'FreezaMenuItem',
  components: {
    [Menu.Item.name]: Menu.Item
  },
  props: {
    menuList: {
      type: Array,
      required: true
    }
  },
  setup() {}
});
</script>
