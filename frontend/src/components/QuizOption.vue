<template>
  <div
    class="quiz-option"
    :class="{
      isSelected: isSelected,
      showIsCorrect: showIsCorrectResult,
      showIsWrong: showIsWrongResult,
    }"
    @click="$emit('onOptionClick', option.id)"
  >
    <div class="letter">{{ convertNumberToLetter(optionNumber) }}</div>
    <p>{{ option.text }}</p>
    <div v-if="showIsCorrectResult || showIsWrongResult" class="explanation">
      {{ option.explanation }}
    </div>
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
    showIsCorrectResult: {
      type: Boolean,
    },
    showIsWrongResult: {
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
  position: relative;

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
    pointer-events: none;

    .letter {
      background-color: $c-primary;

      color: $c-background;

      border: none;
    }

    p {
      color: $c-primary;
    }
  }

  &.showIsCorrect {
    .letter {
      background-color: #00b412;

      color: $c-background;

      border: none;
    }

    p {
      color: #00b412;
    }

    &:hover {
      pointer-events: none;
    }
  }

  &.showIsWrong {
    .letter {
      background-color: red;

      color: $c-background;

      border: none;
    }

    p {
      color: red;
    }

    &:hover {
      pointer-events: none;
    }
  }
}

.explanation {
  position: absolute;
  z-index: 5;

  top: 50%;
  transform: translate(0, -50%);

  right: -330px;

  font-size: 12px;

  padding: 10px 20px;

  background: white;

  width: 250px;

  border: solid 1px $c-grey-light;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: -30px;
    width: 30px;
    height: 1.5px;
    background: $c-grey-light;
    transform: translate(0, -50%);
  }
}
</style>
