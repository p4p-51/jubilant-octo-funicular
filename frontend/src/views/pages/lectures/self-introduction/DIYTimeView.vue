<template>
  <loading v-model:active="isLoading.loading" />
  <div class="lecture-container">
    <title-block
      title="DIY Time!"
      subtitle="Now that you’ve learnt all about how to give a good self introduction, let’s write your own!"
      module="Self introduction"
    />
    <intro-diy ref="introDiy" />
    <go-button class="go-button" @click="submitIntro" :text="'Save and continue ->'"></go-button>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/theme.scss";

.diy-time-view {
  width: 100%;
  height: 100%;

  padding: 20px 40px;

  overflow-y: scroll;

  display: flex;
  flex-direction: column;

  justify-content: space-between;
}

.go-button {
  background-color: $c-primary;
  color: $c-background;

  align-self: flex-end;

  margin-bottom: 70px;
}
</style>

<script lang="ts" setup>
import IntroDiy from "@/components/IntroDiy.vue";
import TitleBlock from "@/components/TitleBlock.vue";
import ModuleStatus from "@/types/ModuleStatus.interface";
import { defineComponent, onMounted, ref, watch, reactive } from "vue";
import { submitSelfIntro } from "@/apis/api";
import { SelfIntro } from "@/types/User.interface";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import GoButton from "@/components/GoButton.vue";

const introDiy = ref<SelfIntro>();
const isLoading = reactive({ loading: false });

const submitIntro = async () => {
  isLoading.loading = true;
  const [error, data] = await submitSelfIntro({ ...introDiy.value! });
  if (error) {
    alert("intro update failed");
  }
  isLoading.loading = false;
};
</script>
