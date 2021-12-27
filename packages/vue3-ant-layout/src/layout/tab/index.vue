<template>
  <a-tabs class="freeza_tabs" v-model:activeKey="activeKey" type="editable-card" @edit="onEdit" hideAdd>
    <a-tab-pane v-for="pane in panes" :key="pane.menuPath" :tab="pane.menuName"></a-tab-pane>
  </a-tabs>
</template>
<script>
import { defineComponent, ref, watch, inject } from 'vue';
import { useRoute } from 'vue-router';
import { Tabs } from 'ant-design-vue';
export default defineComponent({
  name: 'FreezaTabs',
  components: {
    [Tabs.name]: Tabs,
    [Tabs.TabPane.name]: Tabs
  },
  setup() {
    const route = useRoute();
    const panes = ref([]);
    const activeKey = ref('');
    const config = inject('freezaConfig');
    const { flatMenu } = config;
    const onEdit = () => {};
    watch(
      () => route.matched,
      value => {
        const matchPath = value.length > 0 && value[0].path;
        const { menuName, menuPath } = flatMenu[matchPath];
        if (matchPath !== '/') {
          panes.value = panes.value.concat({
            menuName,
            path: matchPath,
            menuPath
          });
          activeKey.value = menuPath;
        }
      }
    );
    return {
      panes,
      activeKey,
      onEdit
    };
  }
});
</script>

<style>
.freeza_tabs .ant-tabs-nav {
  margin: 0;
}
</style>
