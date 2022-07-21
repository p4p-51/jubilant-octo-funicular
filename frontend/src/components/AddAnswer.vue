<template>
  <div class="content-container">
    <div class="header"><h2>Lets get Started!</h2></div>
    <!--    todo: refactor this-->
    <div class="experience-selector">
      <question-item
        v-for="question in questions"
        :question="question.questionText"
        :key="question.id"
        :class="question.id === selectedId ? 'selected' : null"
        @select="onQuestionEvent(question.id)"
      >
      </question-item>
    </div>
    <exp-selection
      class="box"
      :question="questions.find((o) => o.id === selectedId)"
    >
    </exp-selection>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/theme.scss";

.content-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 8fr;
  grid-template-areas:
    "header header"
    "experience other";

  margin: 20px 50px 50px;
  column-gap: 50px;
}

.header {
  grid-area: header;
}

.experience-selector {
  grid-area: experience;
}

.box {
  grid-area: other;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import QuestionInterface from "@/types/Question.interface";
import QuestionItem from "@/components/Question.vue";
import ExpSelection from "@/components/ExpSelection.vue";

export default defineComponent({
  name: "AddAnswer",
  props: {},
  components: { ExpSelection, QuestionItem },
  methods: {
    onQuestionEvent(questionId: string) {
      this.selectedId = questionId;
    },
  },
  data() {
    return {
      selectedId: "question_id_1" as string,
      questions: [
        {
          id: "question_id_1",
          questionText: "What is bacon",
        },
        {
          id: "question_id_2",
          questionText: "What is the best group project you've ever had",
        },
      ] as QuestionInterface[],
    };
  },
});
</script>
