<template>
  <div class="app">
    <NavBar />
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/lecture">Lecture</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
import "./assets/css/styles.scss";
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style scoped lang="scss">
.app {
  display: flex;
  flex-direction: row;

  background: lightblue;
  height: 100vh;
  width: 100vw;
}
</style>
