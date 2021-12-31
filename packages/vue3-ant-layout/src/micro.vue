<template>
  <router-view v-slot="{ Component }">
    <keep-alive :include="[]">
      <component :is="Component"></component>
    </keep-alive>
  </router-view>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'FreezaMicroLayout'
});
</script>
