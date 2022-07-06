<template>
  <div class="module-end-view">
    <div class="header">
      <h1>Yay! You did it! 🎉</h1>
      <h3>Finished module: <span>Module name</span></h3>
    </div>
    <div class="content">
      <div class="progress">
        <ModuleItem name="Finding the right examples" moduleType="past" />
        <ModuleItem name="Listening for the correct cues" moduleType="past" />
        <ModuleItem name="Structuring responses" moduleType="current" />
        <ModuleItem name="Bacon ipsum dolor amet" moduleType="next" />
        <ModuleItem
          name="Porchetta capicola ham, brisket jerky"
          moduleType="future"
        />
        <ModuleItem name="Frankfurter pig ham hock" moduleType="future" />
        <ModuleItem
          name="Bacon venison tenderloin salami"
          moduleType="future"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/css/theme.scss";

.module-end-view {
  padding: 20px 40px;

  overflow-y: scroll;
  width: 100%;

  display: flex;
  flex-direction: column;

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

.content {
  flex: 1;

  display: flex;
  align-items: center;

  .progress {
    width: 50%;

    border-right: solid 1px $c-grey-light;

    display: flex;
    flex-direction: column;

    align-items: center;

    row-gap: 20px;
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
