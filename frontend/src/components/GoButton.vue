<template>
  <loading v-model:active="isLoading.loading" />
  <button :disabled="disabled" class="go-button" @click="submit">
    {{ text }}
  </button>
</template>

<style lang="scss" scoped>
@import "@/assets/css/theme.scss";

button:disabled {
  pointer-events: none;
  color: $c-grey-light;
  border-color: $c-grey-light;
  background-color: $c-background;
}
</style>

<script lang="ts" setup>
import { RoutesManager } from "@/router/routes";
import { defineProps, defineEmits, reactive } from "vue";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import { useRoute, useRouter } from "vue-router";

const props = defineProps({
  text: {
    type: String,
    default: "All done!! ->",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["click"]);

const isLoading = reactive({ loading: false });

const router = useRouter();
const route = useRoute();

const submit = async () => {
  emit("click");
  isLoading.loading = true;

  const nextRoute = await RoutesManager.nextLocation(route.fullPath);
  await router.push(nextRoute);

  isLoading.loading = false;
};
</script>
