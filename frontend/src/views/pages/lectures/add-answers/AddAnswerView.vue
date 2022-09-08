//Deprecated
<template>
  <loading v-model:active="isLoading.loading" />
  <div class="lecture-container">
    <TitleBlock
      module="Experience"
      title="Adding answers to your interview profile"
      subtitle="blah blac"
    >
      Now you understand how to answer behaviural interview questions using the
      STAR method, it’s time for you to start praticing. First pick out a
      question you want to answer, followed by a relevant experience. If you
      forgot to add an experience, you can still do that as well.
    </TitleBlock>
    <!-- <AddAnswer></AddAnswer> -->
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
        <!-- <add-question-response
          :initialQuestion="selectedQuestion"
          :key="addQuestionKey"
          @saveResponse="saveResponse"
          @deleteResponse="deleteResponse"
        /> -->
        <!-- <button @click="goToGrad" class="go-button">
          Save and continue ->
        </button> -->
      </div>
    </div>
    <button class="go-button">Save and continue -></button>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/theme.scss";
</style>

<!-- <script lang="ts">
import AddQuestionResponse from "@/components/AddQuestionResponse.vue";
import TitleBlock from "@/components/TitleBlock.vue";
import ModuleStatus from "@/types/ModuleStatus.interface";
import { defineComponent } from "vue";

export default defineComponent({
  name: "AddAnswerView",
  components: { AddQuestionResponse, TitleBlock },
  data() {
    return {
      modules: [
        {
          name: "Self introduction",
          id: "fjisaljio",
          status: "done",
          url: "#",
          children: [
            {
              name: "Some sort of child",
              id: "fafwqa",
              status: "done",
              url: "#",
            },
            {
              name: "Some sort of child",
              id: "fafwqa",
              status: "done",
              url: "#",
            },
          ],
        },
      ] as ModuleStatus[],
    };
  },
});
</script> -->
<script lang="ts" setup>
import QbSearchBar from "@/components/QbSearchBar.vue";
import QbSideBarQuestion from "@/components/QbSideBarQuestion.vue";
import TitleBlock from "@/components/TitleBlock.vue";
import { Answer, QuestionResponse } from "@/types/Question.interface";
import { onMounted, reactive, ref } from "vue";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

import { deleteAnswer, getQuestionAnswer, getQuestions } from "@/apis/api"; // import router
import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const route = useRoute();

const goToGrad = () => {
  router.push("/"); // redirect to home
};

const deleteResponse = async (answer: Answer) => {
  isLoading.loading = true;
  const [error, data] = await deleteAnswer(
    answer.questionId!,
    answer.experienceId,
  );
  selectedQuestion.value!.answers = selectedQuestion.value?.answers?.filter(
    (ans) => {
      return !(
        ans.experienceId == answer.experienceId &&
        ans.questionId == answer.questionId
      );
    },
  );
  selectedQuestion.value!.answerCount--;
  isLoading.loading = false;
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
  if (questionId === 0) {
    isLoading.loading = false;
    return;
  }
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
  // selectedQuestionId.value = parseInt(route.params.id as unknown as string);
  selectedQuestionId.value = 0;

  questions.questions.forEach((q) => {
    if (q.questionId == selectedQuestionId.value) {
      doesQuestionExist = true;
    }
  });

  // console.log("question does exist", doesQuestionExist);
  // if (!doesQuestionExist) {
  //   router.push("/questions");
  // }

  await setSelectedQuestion(selectedQuestionId.value);

  isLoading.loading = false;
});
</script>
