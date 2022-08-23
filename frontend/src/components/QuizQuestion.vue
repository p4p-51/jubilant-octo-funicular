<template>
  <div class="quiz-question" :class="{ disable: show }">
    <h6>Question {{ questionNumber }}</h6>

    <h3>{{question.title}}</h3>

    <div class="options">
      <quiz-option
        v-for="(opt, i) in options"
        :option="opt"
        :optionNumber="i + 1"
        :isSelected="opt.id === selectedOption"
        :key="i"
        :show-is-correct-result="show && opt.id === question.answer"
        :show-is-wrong-result="
          show && opt.id === selectedOption && !(opt.id === question.answer)
        "
        @onOptionClick="selectOption"
      />
    </div>
    <button @click="submitAnswer">Submit</button>
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

  &.disable {
    pointer-events: none;
    button {
      color: $c-grey-light;
      border-color: $c-grey-light;
    }
  }

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
  methods: {
    selectOption(id: string) {
      if (!this.show) {
        this.selectedOption = id;
      }
    },
    getOption(id: string) {
      return this.options.find((o) => o.id == id);
    },
    submitAnswer() {
      this.show = true;
    },
  },
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
      selectedOption: null as string | null,
      options: this.question.options,
      show: false,
    };
  },
});
</script>
