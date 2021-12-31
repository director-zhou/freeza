<template>
  <div :id="id"></div>
</template>

<script>
import { defineComponent, onMounted } from 'vue';
import { loadMicroApp } from 'qiankun';
import { uuid } from './utils/index.js';
export default defineComponent({
  name: 'FreezaMircoWrap',
  props: {
    entry: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const id = `freeza${uuid()}`;
    onMounted(() => {
      loadMicroApp({
        name: props.entry,
        entry: props.entry,
        container: `#${id}`
      });
    });
    return {
      id
    };
  }
});
</script>
