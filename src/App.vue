<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from "@/pages/HomePage.vue";
export default {
  name: "App",
  components: {
    Home,
  },
};
</script>

<style>
#app {
  min-width: 1400px;
}
* {
  margin: 0 auto;
}
</style>
