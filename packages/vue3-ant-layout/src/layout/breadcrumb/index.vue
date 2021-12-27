<template>
  <a-breadcrumb>
    <a-breadcrumb-item v-for="(breadcrumb, index) in breadcrumbList" :key="index">{{ breadcrumb }}</a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script>
import { defineComponent, inject, watch, ref } from 'vue';
import { useRoute } from 'vue-router';
import { Breadcrumb } from 'ant-design-vue';
export default defineComponent({
  name: 'FreezaBreadCrumb',
  components: {
    [Breadcrumb.name]: Breadcrumb,
    [Breadcrumb.Item.name]: Breadcrumb.Item
  },
  setup() {
    const route = useRoute();
    const config = inject('freezaConfig');
    const { flatMenu } = config;
    const breadcrumbList = ref([]);
    watch(
      () => route.matched,
      value => {
        const matchPath = value.length > 0 && value[0].path;
        if (matchPath === '/') {
          breadcrumbList.value = ['首页'];
        } else {
          breadcrumbList.value = matchPath && flatMenu[matchPath] ? flatMenu[matchPath]._FREEZA_META_.menuFullName : [];
        }
      }
    );
    return {
      breadcrumbList
    };
  }
});
</script>
