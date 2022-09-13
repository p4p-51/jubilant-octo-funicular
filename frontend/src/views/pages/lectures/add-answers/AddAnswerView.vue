//Deprecated
<template>
  <loading v-model:active="isLoading.loading" />
  <div class="lecture-container">
    <TitleBlock
      module="Experience"
      title="Adding answers to your interview profile"
      subtitle="Now that you know how to structure a response, let's write your own!"
    >
      Now you understand how to answer behaviural interview questions using the
      STAR method, it’s time for you to start praticing. First pick out a
      question you want to answer, followed by a relevant experience. If you
      forgot to add an experience, you can still do that as well.
    </TitleBlock>
    <!-- <AddAnswer></AddAnswer> -->
    <div class="content-container">
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
      <div class="answer-column" v-if="!isLoading.loading">
        <add-question-response
          :initialQuestion="selectedQuestion"
          :key="addQuestionKey"
          @saveResponse="saveResponse"
          @deleteResponse="deleteResponse"
          @saveNewExperience="saveNewExperience"
        />
      </div>
    </div>
    <go-button class="go-button" text="Save and continue ->" />
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/theme.scss";

.content-container {
  flex: 1;
  width: 100%;

  display: flex;

  min-height: 350px;

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

    max-height: 100%;
    overflow-y: scroll;

    ::v-deep .response-inputs {
      position: relative;

      button {
        position: absolute;
        top: 0;
        margin-top: -10px;
      }
    }
  }
}
</style>

<script lang="ts" setup>
import AddQuestionResponse from "@/components/AddQuestionResponse.vue";
import GoButton from "@/components/GoButton.vue";
import QbSearchBar from "@/components/QbSearchBar.vue";
import QbSideBarQuestion from "@/components/QbSideBarQuestion.vue";
import TitleBlock from "@/components/TitleBlock.vue";
import { Answer, QuestionResponse } from "@/types/Question.interface";
import { onMounted, reactive, ref } from "vue";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

import { deleteAnswer, getQuestionAnswer, getQuestions } from "@/apis/api"; // import router
import { useRoute, useRouter } from "vue-router";
import Experience from "@/types/Experience.Interface";
const router = useRouter();
const route = useRoute();

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

const saveNewExperience = (newExperience: Experience) => {
  questions.questions.forEach((q) => {
    if (newExperience.labels.includes(q.labelId))
      q.experiences.push(newExperience);
  });
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

  console.log("question does exist", doesQuestionExist);
  if (!doesQuestionExist) {
    selectedQuestionId.value = questions.questions[0].questionId;
  }

  await setSelectedQuestion(selectedQuestionId.value);

  isLoading.loading = false;
});
</script>
