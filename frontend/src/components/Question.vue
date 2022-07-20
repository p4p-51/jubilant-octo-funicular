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

  img {
    margin-left: 10px;
  }

  &.selected {
    img {
      transform: rotate(180deg);
      transform-origin: center;
      transition: 0.5s ease-in-out;
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
