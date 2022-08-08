<template>
  <div class="question-detail-view">
    <title-block title="My question bank" />
    <div class="content-container" v-if="isLoaded.loaded">
      <div class="questions-container">
        <div class="search-bar">
          <qb-search-bar @onChange="(s) => (filter = s.toLowerCase())" />
        </div>
        <div class="list">
          <qb-side-bar-question
            v-for="question in filterQuestions()"
            :key="question.questionId"
            :numResponses="question.answerCount"
            :title="question.questionText"
            :id="question.questionId"
            :isSelected="question.questionId === selectedQuestionId"
            @onQuestionClick="onQuestionClick"
          />
        </div>
      </div>
      <div class="answer-column">
        <add-question-response
          v-if="isLoaded.loaded"
          :question="selectedQuestion"
          :key="addQuestionKey"
          @saveResponse="saveResponse"
        />
        <!-- <button @click="goToGrad" class="go-button">
          Save and continue ->
        </button> -->
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/theme.scss";

.question-detail-view {
  margin: 20px 50px;
  margin-bottom: 50px;

  width: 100%;

  display: flex;
  flex-direction: column;

  .content-container {
    flex: 1;
    width: 100%;

    display: flex;

    .questions-container {
      width: 350px;
      height: 100%;

      display: flex;
      flex-direction: column;

      .search-bar {
        margin-left: 20px;
        margin-bottom: 20px;

        .qb-search-bar {
          width: 100%;
          min-width: 0;
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

.go-button {
  background-color: $c-primary;
  color: $c-background;
  margin-left: 500px;
}
</style>

<script lang="ts" setup>

import QbSideBarQuestion from "@/components/QbSideBarQuestion.vue";
import AddQuestionResponse from "@/components/AddQuestionResponse.vue";
import TitleBlock from "@/components/TitleBlock.vue";
import QbSearchBar from "@/components/QbSearchBar.vue";
import Question, { Answer, Experience, QuestionResponse } from "@/types/Question.interface";
import { computed, defineComponent, onMounted, reactive, ref, watch } from "vue";

import { useRoute, useRouter } from "vue-router";
import { getQuestionAnswer, getQuestions } from "@/apis/api"; // import router
const router = useRouter();
const route = useRoute();


const goToGrad = async () => {
  await router.push("/"); // redirect to home
};

const saveResponse = (questionId: number) => {
  alert("here?")
  alert(questionId)
  questions.questions.forEach((question) => {
    if (question.questionId == questionId) {
      alert("here")
      question.answerCount++
    }
  })
}

const selectedQuestionId = ref<number>(route.params.id as unknown as number);
const addQuestionKey = ref<number>(0);
const onQuestionClick = async (id: number) => {
  addQuestionKey.value++;
  await getSelectedQuestion(id);
};

const filter = ref<string>("");
const filterQuestions = () => {
  if (filter.value === "") {
    return questions.questions;
  } else {
    return questions.questions.filter((q) => {
      return (
        q.labelId.toLowerCase().includes(filter.value) ||
        q.questionText.toLowerCase().includes(filter.value)
      );
    });
  }
};

const isLoaded = reactive({ loaded: false });
const questions = reactive<{ questions: QuestionResponse[] }>({
  questions: [],
});

const selectedQuestion = ref<QuestionResponse>();
const getSelectedQuestion = async (questionId: number) => {
  selectedQuestionId.value = questionId;
  const answers: Answer[] = await getQuestionAnswer(questionId);
  const question = questions.questions.find((q) => q.questionId == questionId);

  selectedQuestion.value = { ...question!, answers: answers };
};


onMounted(async () => {
  questions.questions = await getQuestions();
  await getSelectedQuestion(route.params.id as unknown as number);

  isLoaded.loaded = true;
});

</script>
