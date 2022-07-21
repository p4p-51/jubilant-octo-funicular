<template>
  <div class="quiz-option" :class="{ isSelected: isSelected }">
    <div class="letter">{{ convertNumberToLetter(optionNumber) }}</div>
    <p>{{ option.text }}</p>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "@vue/runtime-core";
import { QuizOption } from "@/types/QuizQuestion.interface";

export default defineComponent({
  name: "QuizOption",
  props: {
    option: {
      type: Object as PropType<QuizOption>,
      required: true,
    },
    optionNumber: {
      type: Number,
      required: true,
    },
    isSelected: {
      type: Boolean,
    },
  },
  methods: {
    convertNumberToLetter(number: number): string {
      return String.fromCharCode(number + 64);
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/css/theme.scss";

.quiz-option {
  display: flex;
  align-items: flex-start;
  margin-right: 20px;
  margin-left: 0;

  .letter {
    font-size: 20px;
    font-weight: 400;
    margin: 0;
    color: $c-grey-dark;

    box-sizing: border-box;
    border-right: solid 2px $c-grey-light;

    width: 30px;
    height: 30px;

    margin-right: 15px;
    transition: $animation;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  p {
    margin: 0;

    flex: 1;

    font-size: 14px;

    color: $c-grey-dark;
    transition: $animation;
  }

  &:hover {
    transition: $animation;
    cursor: pointer;

    margin-left: 20px;
    margin-right: 0;

    .letter {
      color: $c-primary;
      border-right: solid 2px $c-primary;
    }

    p {
      color: $c-primary;
    }
  }

  &.isSelected {
    .letter {
      background-color: $c-primary;

      color: $c-background;

      border: none;
    }

    p {
      color: $c-primary;
    }

    &:hover {
      pointer-events: none;
    }
  }
}
</style>
