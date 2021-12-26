<template>
  <a-layout-header class="freeza_header">
    <FreezaBreadCrumb />
  </a-layout-header>
</template>

<script>
import { defineComponent } from 'vue';
import { Layout } from 'ant-design-vue';
import FreezaBreadCrumb from '../breadcrumb/index.vue';
export default defineComponent({
  name: 'FreezaHeader',
  components: {
    [Layout.Header.name]: Layout.Header,
    FreezaBreadCrumb
  },
  setup() {}
});
</script>

<style>
.freeza_header {
  display: flex;
  align-items: center;
  height: 60px;
  padding: 0 15px;
  background: #ffffff;
  border-bottom: 1px solid #f0f2f5;
}
</style>
