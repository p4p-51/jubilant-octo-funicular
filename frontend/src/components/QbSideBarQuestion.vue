<template>
  <div class="qb-sidebar-question" :class="{ isSelected: isSelected }">
    <p>{{ title }}</p>
    <div class="number" :class="{ highlight: numResponses > 0 }">
      <p>{{ numResponses }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/theme.scss";

.qb-sidebar-question {
  display: flex;
  align-items: center;

  box-sizing: border-box;
  border: solid 1px $c-grey-light;

  border-radius: 10px;

  padding: 20px 25px;
  transition: $animation;
  cursor: pointer;
  &:hover {
    transform: scale(1.02);
  }

  &.isSelected {
    border: solid 1px $c-primary;

    background: rgba($c-primary, 0.1);
    transform: scale(1.02);
  }

  .number {
    width: 20px;
    height: 20px;
    border-radius: 100%;

    background: $c-grey-light;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-left: 10px;

    &.highlight {
      background: rgba($c-primary, 0.8);
    }

    p {
      margin: 0;
      font-size: 10px;
      font-weight: 600;

      color: $c-background;
    }
  }

  > p {
    flex: 1;
    margin: 0;
    font-size: 12px;
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
    isSelected: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  components: {},
});
</script>
