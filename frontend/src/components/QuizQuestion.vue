<template>
  <div class="quiz-question">
    <h6>Question {{ questionNumber }}</h6>

    <h3>What is the best way to learn Vue?</h3>

    <div class="options">
      <quiz-option
        v-for="(opt, i) in question.options"
        :option="opt"
        :optionNumber="i + 1"
        :isSelected="opt.id === selectedOption"
        :key="i"
        :showIsWrongResult="true"
      />
    </div>

    <button>Submit</button>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/theme.scss";

.quiz-question {
  display: flex;
  flex-direction: column;

  border: solid 1px $c-grey-light;
  box-sizing: border-box;

  padding: 35px 100px;

  max-width: 1000px;

  > h6 {
    font-size: 12px;
    font-weight: 500;
    margin: 0;

    color: $c-secondary;
  }

  > h3 {
    font-size: 20px;
    font-weight: 400;
    margin: 0;
  }

  .options {
    margin-top: 30px;

    display: flex;
    flex-direction: column;
    row-gap: 15px;
  }

  > button {
    align-self: flex-end;
    margin-top: 20px;
  }
}
</style>

<script lang="ts">
import QuizQuestion from "@/types/QuizQuestion.interface";
import { defineComponent, PropType } from "vue";
import QuizOption from "./QuizOption.vue";
export default defineComponent({
  name: "QuizQuestion",
  props: {
    question: {
      type: Object as PropType<QuizQuestion>,
      required: true,
    },
    questionNumber: {
      type: Number,
      required: true,
    },
  },
  components: { QuizOption },
  data() {
    return {
      selectedOption: "2",
    };
  },
});
</script>
