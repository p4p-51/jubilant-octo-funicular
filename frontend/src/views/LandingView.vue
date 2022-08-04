<template>
  <div class="landing-view">
    <header>
      <div class="logo">
        <img src="@/assets/logo.svg" alt="logo" />
      </div>
    </header>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/css/theme.scss";

.landing-view {
  width: 100%;

  padding: 20px 40px;

  overflow-y: scroll;

  display: flex;
  flex-direction: column;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LandingView",
});
</script>
