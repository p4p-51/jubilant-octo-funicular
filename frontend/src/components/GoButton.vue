<template>
  <loading v-model:active="isLoading.loading" />
  <button class="go-button" @click="submit">
    {{ text }}
  </button>
</template>

<script lang="ts" setup>
import { RoutesManager } from "@/router/routes";
import { defineProps, reactive } from "vue";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import { useRoute, useRouter } from "vue-router";

const props = defineProps({
  text: {
    type: String,
    default: "All done!! ->",
  },
});

const isLoading = reactive({ loading: false });

const router = useRouter();
const route = useRoute();

const submit = async () => {
  isLoading.loading = true;

  const nextRoute = await RoutesManager.nextLocation(route.fullPath);
  await router.push(nextRoute);

  isLoading.loading = false;
};
</script>
