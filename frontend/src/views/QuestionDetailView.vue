<template>
  <loading v-model:active="isLoading.loading" />
  <div class="question-detail-view">
    <title-block title="My question bank" />
    <div class="content-container" v-if="!isLoading.loading">
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
          :initialQuestion="selectedQuestion"
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

    .answer-column {
      width: 70%;
      min-width: 350px;
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
import { Answer, QuestionResponse } from "@/types/Question.interface";
import { onMounted, reactive, ref } from "vue";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

import { useRoute, useRouter } from "vue-router";
import { getQuestionAnswer, getQuestions } from "@/apis/api"; // import router
const router = useRouter();
const route = useRoute();

const goToGrad = () => {
  router.push("/"); // redirect to home
};

const saveResponse = (answer: Answer, isEdit: boolean) => {
  if (!isEdit) {
    selectedQuestion.value!.answers!.push(answer);
    selectedQuestion.value!.answerCount!++;
  } else {
    selectedQuestion.value?.answers?.forEach((ans) => {
      if (ans.experienceId == answer.experienceId) {
        ans.answer = answer.answer;
      }
    });
  }
};

const selectedQuestionId = ref<number>();
const addQuestionKey = ref<number>(0);
const onQuestionClick = async (id: number) => {
  addQuestionKey.value++;
  await setSelectedQuestion(id);
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

const isLoading = reactive({ loading: true });
const questions = reactive<{ questions: QuestionResponse[] }>({
  questions: [],
});

const selectedQuestion = ref<QuestionResponse>();
const setSelectedQuestion = async (questionId: number) => {
  isLoading.loading = true;
  selectedQuestionId.value = questionId;
  //TODO: Fix this issue if the question cannot be found
  const question = questions.questions.find((q) => q.questionId == questionId);
  if (question!["answers"] == undefined) {
    const [error, data] = await getQuestionAnswer(questionId);
    if (error) {
      alert("cannot get saved answers to question");
      question!["answers"] = [];
    }
    question!["answers"] = data;
  }

  selectedQuestion.value = question;
  isLoading.loading = false;
};

onMounted(async () => {
  isLoading.loading = true;

  const [error, data] = await getQuestions();
  questions.questions = data;

  let doesQuestionExist = false;
  selectedQuestionId.value = parseInt(route.params.id as unknown as string);

  questions.questions.forEach((q) => {
    if (q.questionId == selectedQuestionId.value) {
      doesQuestionExist = true;
    }
  });

  console.log("question does exist", doesQuestionExist);
  if (!doesQuestionExist) {
    router.push("/questions");
  }

  await setSelectedQuestion(selectedQuestionId.value);

  isLoading.loading = false;
});
</script>
