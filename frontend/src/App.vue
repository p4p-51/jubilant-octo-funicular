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
import { useRouter } from "vue-router";
import { firebaseStore } from "@/stores/firebase.store";

const router = useRouter();
const isLoaded = ref(false)

onBeforeMount(() => {
  firebase.auth().onAuthStateChanged(async function(user) {
    await firebaseStore.update(user)
    if (!firebaseStore.isLoggedIn) {
      await router.push("/register");
    }
    isLoaded.value = true;
  });
});

const signOut = () => {
  firebaseStore.signOut();
  router.push("/");
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
