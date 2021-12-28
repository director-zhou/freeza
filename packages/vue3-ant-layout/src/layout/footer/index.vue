<template>
  <a-layout-footer class="freeza_footer"> Freeza-Vue3-Ant-Layout ©2021 Created by Director-zhou </a-layout-footer>
</template>

<script>
import { defineComponent } from 'vue';
import { Layout } from 'ant-design-vue';
export default defineComponent({
  name: 'FreezaFooter',
  components: {
    [Layout.Footer.name]: Layout.Footer
  },
  setup() {}
});
</script>

<style>
.freeza_footer {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
