<template>
  <loading v-model:active="isLoading.loading" />
  <div class="question-bank-view" v-if="!isLoading.loading">
    <title-block title="My question bank" />
    <div class="content-container">
      <div class="search-bar">
        <qb-search-bar @onChange="(s) => (filter = s.toLowerCase())" />
      </div>
      <div class="questions-container">
        <div class="question-set completed">
          <div class="title-container">
            <h2>Completed questions</h2>
          </div>
          <div class="list">
            <completed-question
              v-for="question in filtered(completedQuestions.questions)"
              :id="question.questionText"
              :key="question.questionId"
              :title="question.questionText"
              :answers="question.answerCount"
              @click="this.$router.push(`/questions/${question.questionId}`)"
            />
          </div>
        </div>
        <div class="question-set other">
          <div class="title-container">
            <h2>Other questions</h2>
          </div>
          <div class="list">
            <other-question
              v-for="question in filtered(otherQuestions.questions)"
              :id="question.questionId"
              :key="question.questionId"
              :title="question.questionText"
              @click="this.$router.push(`/questions/${question.questionId}`)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/theme.scss";

.question-bank-view {
  margin: 20px 50px;
  margin-bottom: 50px;

  width: 100%;

  display: flex;
  flex-direction: column;

  .content-container {
    flex: 1;
    width: 100%;

    display: flex;
    flex-direction: column;

    .search-bar {
      margin-bottom: 20px;
    }

    .questions-container {
      flex: 1;

      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 120px;

      .question-set {
        display: flex;
        flex-direction: column;

        flex: 1;

        .title-container {
          display: flex;
          justify-content: space-between;

          column-gap: 50px;

          h2 {
            font-weight: 400;
            font-size: 20px;

            flex: 1;
          }
        }

        .list {
          overflow-y: scroll;

          flex: 1;
          flex-grow: 1;
          flex-basis: 0;

          display: flex;
          flex-direction: column;
          row-gap: 20px;

          padding: 10px 20px;
        }
      }
    }
  }
}
</style>

<script lang="ts" setup>
import CompletedQuestion from "@/components/CompletedQuestion.vue";
import OtherQuestion from "@/components/OtherQuestion.vue";
import QbSearchBar from "@/components/QbSearchBar.vue";
import TitleBlock from "@/components/TitleBlock.vue";
import Question from "@/types/Question.interface";
import { computed, defineComponent, onMounted, reactive, ref } from "vue";
import { getQuestions } from "@/apis/api";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

interface QuestionResponse extends Question {
  answerCount: number;
}

const isLoading = reactive({ loading: true });

const questions = reactive<{ questions: QuestionResponse[] }>({
  questions: [],
});

const completedQuestions = reactive<{ questions: QuestionResponse[] }>({
  questions: [],
});
const otherQuestions = reactive<{ questions: QuestionResponse[] }>({
  questions: [],
});

const filter = ref<string>("");
const filtered = (questionSet: QuestionResponse[]): QuestionResponse[] => {
  return questionSet.filter((question) => {
    return (
      question.labelId.toLowerCase().includes(filter.value.toLowerCase()) ||
      question.questionText.toLowerCase().includes(filter.value.toLowerCase())
    );
  });
};

onMounted(async () => {
  const [error, data] = await getQuestions();
  if (error) {
    alert("Cannot load questions from backend");
    //Throw or try again?
    return;
  }
  questions.questions = data;

  if (questions.questions.length <= 1) {
    alert("No questions seem to be found? please contact");
    throw "No questions found, the backend must be broken?";
  }

  completedQuestions.questions = questions.questions.filter((question) => {
    return question["answerCount"] >= 1;
  });
  otherQuestions.questions = questions.questions.filter((question) => {
    return question["answerCount"] < 1;
  });

  isLoading.loading = false;
});
</script>
