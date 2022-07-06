<template>
  <div class="module-end-view">
    <div class="header">
      <h1>Yay! You did it! 🎉</h1>
      <h3>Finished module: <span>Module name</span></h3>
    </div>
    <div class="content">
      <ModuleItem name="Finding the right examples" moduleType="past" />
      <ModuleItem name="Listening for the correct cues" moduleType="current" />
      <ModuleItem name="Structuring responses" moduleType="next" />
      <ModuleItem name="Bacon ipsum dolor amet" moduleType="future" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/css/theme.scss";

.module-end-view {
  padding: 20px 40px;

  overflow-x: scroll;

  h1 {
    font-size: 36px;
    font-weight: 400;

    margin-bottom: 15px;
  }

  h1 + h3 {
    font-size: 16px;
    font-weight: 400;

    color: $c-grey-dark;

    margin: 0;

    > span {
      color: $c-secondary;
    }
  }
}
</style>

<script lang="ts">
import ModuleItem from "@/components/ModuleItem.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ModuleEndView",
  components: { ModuleItem },
});
</script>
