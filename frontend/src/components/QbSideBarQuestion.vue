<template>
  <div class="qb-sidebar-question">
    <div class="number">
      <p>{{ numResponses }}</p>
    </div>
    <p>{{ title }}</p>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/theme.scss";

.qb-sidebar-question {
  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  border: solid 1px $c-grey-light;

  border-radius: 10px;

  padding: 20px 25px;

  transition: $animation;
  cursor: pointer;
  &:hover {
    transform: scale(1.02);
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ModuleBlock",
  props: {
    numResponses: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
  components: {},
});
</script>
