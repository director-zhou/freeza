<template>
  <template v-for="(item, index) in menuList" :key="index">
    <a-sub-menu v-if="item.children && item.children.length > 0">
      <template #title>{{ item.menuName }}</template>
      <FreezaMenuItem :menu-list="item.children" />
    </a-sub-menu>
    <a-menu-item @click="goPageHandle(item)" v-else :key="index"
      ><span>{{ item.menuName }}</span></a-menu-item
    >
  </template>
</template>

<script>
import { useRouter } from 'vue-router';
import { Menu } from 'ant-design-vue';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'FreezaMenuItem',
  components: {
    [Menu.Item.name]: Menu.Item,
    [Menu.SubMenu.name]: Menu.SubMenu
  },
  props: {
    menuList: {
      type: Array,
      required: true
    }
  },
  setup() {
    const router = useRouter();
    const goPageHandle = menu => {
      router.push(menu.menuPath);
    };
    return {
      goPageHandle
    };
  }
});
</script>
