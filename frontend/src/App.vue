<template>
  <div class="app">
    <NavBar />

    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import "./assets/css/styles.scss";
import NavBar from "./components/NavBar.vue";

export default defineComponent({
  name: "App",
  components: {
    NavBar,
  },
});
</script>

<style scoped lang="scss">
.app {
  display: flex;
  flex-direction: row;

  height: 100vh;
  width: 100vw;

  overflow: hidden;
}
</style>
