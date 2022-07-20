<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <router-link to="/plan/done">Study Plan</router-link>
    <br />
    <router-link to="/lecture/intro">lecture intro</router-link>
    <br />
    <router-link to="/plan/create">create pl;lan</router-link>
    <br />
    <router-link to="/diy">diy</router-link>
    <br />
    <router-link to="/questions">qb</router-link>
    <br />
    <router-link to="/questions/1">qb det</router-link>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
  components: {
    HelloWorld,
  },
});
</script>
