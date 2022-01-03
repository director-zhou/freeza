<template>
  <div :id="id"></div>
</template>

<script>
import { defineComponent, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { loadMicroApp } from 'qiankun';
import { uuid } from './utils/index.js';
export default defineComponent({
  name: 'FreezaMircoWrap',
  props: {
    entry: {
      type: String,
      required: true
    },
    menuList: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const id = `freeza${uuid()}`;
    const router = useRouter();
    function loop(list) {
      return list.map(item => {
        const { children, menuMicroPath } = item;
        if (children && children.length) {
          return {
            ...item,
            children: loop(children)
          };
        } else {
          return {
            ...item,
            menuOwn: menuMicroPath === props.entry
          };
        }
      });
    }

    const menuList = loop(props.menuList);
    onMounted(() => {
      loadMicroApp({
        name: props.entry,
        entry: props.entry,
        container: `#${id}`,
        props: {
          menuList,
          base: router.options.history.base
        }
      });
    });
    return {
      id
    };
  }
});
</script>
