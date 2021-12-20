<template>
  <div>
    <button
      className="prettier-class"
      aaaaaaaaa="1"
      bbbbbbbbbb="1"
      iiiiiiiiii="1"
      lllllllllll="1"
      onClick="{this.handleClick}"
    >
      Click HereClick HereClick HereClick HereClick HereClick HereClick HereClick HereClick HereClick HereClick
      HereClick HereClick HereClick HereClick HereClick Here
    </button>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'AK',
  setup() {
    const hello = a => {
      console.log(a);
    };
    return {
      hello
    };
  }
});
</script>
