<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/lecture">Lecture</router-link>
  </nav>

  <QuizOption />

  <router-view />
  <button>click</button>
</template>

<script>
import "./assets/css/styles.scss";

export default {
  name: "App",
  components: {},
};
</script>

<style lang="scss"></style>
