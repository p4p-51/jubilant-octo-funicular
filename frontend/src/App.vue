<template>
  <div class="app">
    <NavBar v-if="firebaseStore.isLoggedIn" @signOut="signOut" />
    <router-view v-if="isLoaded" />
  </div>
</template>

<script lang="ts" setup>
import "./assets/css/styles.scss";
import NavBar from "./components/NavBar.vue";

import firebase from "firebase";
import { onBeforeMount, onMounted, ref } from "vue"; // used for conditional rendering
import router, { isRouteUnguarded } from "./router";
import { firebaseStore } from "@/stores/firebase.store";

const isLoaded = ref(false);

onBeforeMount(() => {
  firebase.auth().onAuthStateChanged(async function (user) {
    const currentPath = router.currentRoute.value.path;

    if (user != null) {
      // if they on an unguarded page
      if (isRouteUnguarded(currentPath)) {
        router.push("/");
      }
    } else {
      //not signed in
      //if they on a guarded page
      if (!isRouteUnguarded(currentPath)) {
        router.push("/landing");
      }
    }
    await firebaseStore.update(user);

    isLoaded.value = true;
  });
});

const signOut = () => {
  firebaseStore.signOut();
  router.push("/landing");
};
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
