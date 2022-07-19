<template>
  <div class="study-plan-view">
    <title-block
      title="Study Plan"
      subtitle="We’ve made a study plan tailored just for you based on your preferences! Take a minute to look through the agenda."
    />

    <div class="content-container">hello</div>

    <button class="go-button">Let's go</button>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/css/theme.scss";

.study-plan-view {
  width: 100%;
  height: 100%;

  padding: 20px 40px;

  overflow-y: scroll;

  background: lavender;

  display: flex;
  flex-direction: column;

  justify-content: space-between;
}

.go-button {
  background-color: $c-primary;
  color: $c-background;

  align-self: flex-end;

  margin-bottom: 100px;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import TitleBlock from "@/components/TitleBlock.vue";

export default defineComponent({
  name: "HomeView",
  components: { TitleBlock },
});
</script>
