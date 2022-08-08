<template>
  <div class="app">
    <NavBar v-if="isLoggedIn" @signOut="signOut" />

    <router-view />
  </div>
</template>

<script lang="ts" setup>
import "./assets/css/styles.scss";
import NavBar from "./components/NavBar.vue";

import firebase from "firebase";
import { ref } from "vue"; // used for conditional rendering
import { useRouter } from "vue-router";
const router = useRouter();
const isLoggedIn = ref(true);
// runs after firebase is initialized
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    isLoggedIn.value = true; // if we have a user
    // router.push("/");
  } else {
    isLoggedIn.value = false; // if we do not
    router.push("/signin");
  }
});
const signOut = () => {
  firebase.auth().signOut();
  router.push("/");
};

// export default defineComponent({
//   name: "App",
//   components: {
//     NavBar,
//   },
// });
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

<style lang="scss"></style>
