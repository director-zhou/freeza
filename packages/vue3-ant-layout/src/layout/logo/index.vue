<template>
  <div class="freeza_logo">
    <img src="../../assets/logo.jpeg" alt="" />
    <span v-show="!collapsed">管理系统</span>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FreezaLogo',
  props: {
    collapsed: {
      type: Boolean,
      required: true
    }
  },
  setup() {}
});
</script>

<style>
.freeza_logo {
  display: flex;
  align-items: center;
  padding-left: 24px;
  height: 53px;
  line-height: 53px;
  overflow: hidden;
  white-space: nowrap;
  font-size: 24px;
  color: #fff;
}
.freeza_logo img {
  margin-right: 8px;
  width: 26px;
}
</style>
