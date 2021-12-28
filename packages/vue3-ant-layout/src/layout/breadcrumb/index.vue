<template>
  <a-breadcrumb>
    <a-breadcrumb-item @click="goHomeHandle"><home-outlined /></a-breadcrumb-item>
    <a-breadcrumb-item v-for="(breadcrumb, index) in breadcrumbList" :key="index">{{ breadcrumb }}</a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script>
import { defineComponent, inject, watch, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { Breadcrumb } from 'ant-design-vue';
import { HomeOutlined } from '@ant-design/icons-vue';
export default defineComponent({
  name: 'FreezaBreadCrumb',
  components: {
    [Breadcrumb.name]: Breadcrumb,
    [Breadcrumb.Item.name]: Breadcrumb.Item,
    HomeOutlined
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const config = inject('freezaConfig');
    const { flatMenu } = config;
    const breadcrumbList = ref([]);
    const goHomeHandle = () => {
      router.push({
        path: '/'
      });
    };
    watch(
      () => route.matched,
      value => {
        const matchPath = value.length > 0 && value[0].path;
        if (matchPath === '/') {
          breadcrumbList.value = [];
        } else {
          breadcrumbList.value = matchPath && flatMenu[matchPath] ? flatMenu[matchPath]._FREEZA_META_.menuFullName : [];
        }
      }
    );
    return {
      breadcrumbList,
      goHomeHandle
    };
  }
});
</script>
