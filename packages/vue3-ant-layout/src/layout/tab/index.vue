<template>
  <a-tabs
    class="freeza_tabs"
    v-model:activeKey="activeKey"
    type="editable-card"
    @change="changeHandle"
    @edit="editHandle"
    hideAdd
  >
    <template v-if="panes.length > 0">
      <a-tab-pane key="/"> </a-tab-pane>
      <a-tab-pane v-for="pane in panes" :key="pane.menuPath" :tab="pane.menuName"></a-tab-pane>
    </template>
  </a-tabs>
</template>
<script>
import { defineComponent, ref, watch, inject } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { Tabs } from 'ant-design-vue';
export default defineComponent({
  name: 'FreezaTabs',
  components: {
    [Tabs.name]: Tabs,
    [Tabs.TabPane.name]: Tabs
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const panes = ref([]);
    const activeKey = ref('');
    const config = inject('freezaConfig');
    const { flatMenu } = config;
    const editHandle = (targetKey, action) => {
      if (action === 'remove') {
        const findIndex = panes.value.findIndex(p => {
          return targetKey === p.menuPath;
        });
        panes.value.splice(findIndex, 1);
        if (panes.value.length > 0) {
          const { jumpPath } = panes.value[0];
          router.push({
            path: jumpPath
          });
        } else {
          router.push('/');
        }
      }
    };

    const changeHandle = activeKey => {
      if (activeKey === '/') {
        return;
      }
      const findIndex = panes.value.findIndex(p => {
        return activeKey === p.menuPath;
      });
      const { jumpPath } = panes.value[findIndex];
      router.push({
        path: jumpPath
      });
    };
    watch(
      () => route.matched,
      value => {
        const matchPath = value.length > 0 && value[0].path;
        if (matchPath !== '/' && matchPath !== '/404') {
          console.log(222);
          const findIndex = panes.value.findIndex(p => {
            return matchPath === p.menuPath;
          });
          const { menuName, menuPath } = flatMenu[matchPath];
          if (findIndex < 0) {
            panes.value = panes.value.concat({
              menuName,
              menuPath: matchPath,
              jumpPath: route.path
            });
          }

          activeKey.value = menuPath;
        } else {
          activeKey.value = '/';
        }
      }
    );
    return {
      panes,
      activeKey,
      editHandle,
      changeHandle
    };
  }
});
</script>

<style>
.freeza_tabs .ant-tabs-nav {
  margin: 0 !important;
}
.freeza_tabs .ant-tabs-tab:first-child {
  display: none;
}
</style>
