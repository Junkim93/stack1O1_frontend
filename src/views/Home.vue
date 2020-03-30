<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',

  components: {
    HelloWorld,
  },

  methods: {
    test() {
      return 1 + 2;
    },
  },
};
</script>
