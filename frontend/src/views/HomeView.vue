<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <router-link to="/diy">diy</router-link>
    <br />
    <router-link :to="routeStore.path()">Continue</router-link>
    <br />
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

export default defineComponent({
  name: "HomeView",
  components: {
    HelloWorld,
  },
  async mounted() {
    if (routeStore.moduleId == null) {
      const [error, data] = await getUser();
      if (error) {
        alert("error LMAO");
      }
      routeStore.update(data["progress"]);
    }
  },
  data() {
    return {
      routeStore
    }
  }
});
</script>
