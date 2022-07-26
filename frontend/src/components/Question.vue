<template>
  <div class="question-item" @click="$emit('select')">
    <p>{{ question }}</p>
    <img src="@/assets/icons/arrow.svg" />
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/theme.scss";

.question-item {
  border-bottom: solid 1px $c-grey-light;

  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;
  padding-left: 5px;

  img {
    margin-left: 10px;
    transition: transform 0.2s ease;
  }

  &:hover {
    border-bottom-color: $c-primary;

    img {
      transform: scale(1.5) rotate(180deg);
      transition: $animation;
      transform-origin: center;
      fill: $c-primary;
    }
  }

  &.selected {
    border-bottom-color: $c-primary;
    background-color: $c-primary;
    img {
      transform: rotate(180deg) scale(1.5);
      transform-origin: center;
      transition: $animation;
    }
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "QuestionItem",
  props: {
    question: {
      type: String,
      required: true,
    },
  },
});
</script>
