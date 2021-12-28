<template>
  <a-layout-header class="freeza_header">
    <div class="freeza_collapsed" @click="toggleCollapsedHandle">
      <menu-fold-outlined v-if="!collapsed" />
      <menu-unfold-outlined v-else />
    </div>
    <FreezaBreadCrumb />
  </a-layout-header>
</template>

<script>
import { defineComponent } from 'vue';
import { Layout } from 'ant-design-vue';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue';
import FreezaBreadCrumb from '../breadcrumb/index.vue';
export default defineComponent({
  name: 'FreezaHeader',
  components: {
    [Layout.Header.name]: Layout.Header,
    FreezaBreadCrumb,
    MenuFoldOutlined,
    MenuUnfoldOutlined
  },
  props: {
    collapsed: {
      type: Boolean,
      required: true
    }
  },
  setup(props, { emit }) {
    const toggleCollapsedHandle = () => {
      emit('update:collapsed', !props.collapsed);
    };
    return {
      toggleCollapsedHandle
    };
  }
});
</script>

<style>
.freeza_header {
  display: flex;
  align-items: center;
  padding: 0 15px;
  background: #ffffff;
  height: 53px;
  line-height: 53px;
  border-bottom: 1px solid #ddd;
}
.freeza_collapsed {
  width: 35px;
  display: flex;
  align-content: center;
  font-size: 18px;
}
</style>
