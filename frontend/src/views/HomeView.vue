<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <br />
    <router-link :to="routeStore.path()">Continue</router-link>
    <br />
    <router-link to="/lecture/welcome/content">Start Over</router-link>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { defineComponent } from "vue";
import { getUser } from "@/apis/api";
import { IModuleStage } from "@/types/User.interface";
import { ILectureModuleId, RoutesManager } from "@/router/routes";
import { routeStore } from "@/stores/route.store";
import { firebaseStore } from "@/stores/firebase.store";
import router from "@/router";

export default defineComponent({
  name: "HomeView",
  components: {
    HelloWorld,
  },
  async mounted() {
    if (!firebaseStore.isLoggedIn) {
      router.push("/landing");
      return;
    }

    if (routeStore.moduleId == null) {
      const [error, data] = await getUser();

      if (error) {
        alert("This error should not occur, please refresh your page");
        return;
      }
      routeStore.update(data["progress"]);
    }
  },
  data() {
    return {
      routeStore,
    };
  },
});
</script>
