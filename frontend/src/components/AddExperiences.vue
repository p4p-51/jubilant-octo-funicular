<template>
  <div class="add-experiences">
    <h2>List down some of your past teamwork experiences</h2>
    <div class="content">
      <div class="create-experiences"></div>
      <div class="checklist">checklikst</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/theme.scss";

.add-experiences {
  width: 100%;
  background: lightblue;

  > h2 {
    font-size: 20px;
    font-weight: 400;

    margin-bottom: 5px;
    margin-top: 40px;
  }

  .content {
    display: flex;
    justify-content: space-between;
  }
}
</style>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "AddExperiences",
  components: {},
  data() {
    return {};
  },
  props: {},
});
</script>
