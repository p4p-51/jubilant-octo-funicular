<template>
  <div class="quiz-view">
    <title-block v-bind="titleBlock" />
    <div class="content-container">
      <quiz-question
        class="question-block"
        v-for="(question, i) in quizQuestions"
        :question="question"
        :questionNumber="i + 1"
        :key="i"
        @submitQuestion="submitQuestion($event, i)"
      />
    </div>
    <go-button @click="submit" class="go-button" :disabled="isDisabled" />
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/theme.scss";

.quiz-view {
  box-sizing: border-box;
  padding: 20px 50px;

  width: 100%;

  display: flex;
  flex-direction: column;

  overflow-y: scroll;

  .content-container {
    flex: 1;
    width: 100%;

    display: flex;
    flex-direction: column;

    row-gap: 50px;

    .question-block {
      align-self: center;
      width: 900px;
      max-width: 100%;
    }
  }
}

.go-button {
  background-color: $c-primary;
  color: $c-background;
  align-self: flex-end;
  margin-block: 80px;
}
</style>

<script lang="ts">
import AddQuestionResponse from "@/components/AddQuestionResponse.vue";
import CompletedQuestion from "@/components/CompletedQuestion.vue";
import OtherQuestion from "@/components/OtherQuestion.vue";
import QbSearchBar from "@/components/QbSearchBar.vue";
import QbSideBarQuestion from "@/components/QbSideBarQuestion.vue";
import QuizQuestion from "@/components/QuizQuestion.vue";
import TitleBlock from "@/components/TitleBlock.vue";
import Question, { Experience } from "@/types/Question.interface";
import ProgressSideBar from "@/components/ProgressSideBar.vue";
import { defineComponent } from "vue";
import ModuleStatus from "@/types/ModuleStatus.interface";
import QuestionForQuiz from "@/types/QuizQuestion.interface";
import {
  DataExtractor,
  ILectureModuleId,
  RoutesManager,
} from "@/router/routes";
import GoButton from "@/components/GoButton.vue";
import { submitQuiz } from "@/apis/api";

export default defineComponent({
  name: "QuizView",
  components: {
    GoButton,
    TitleBlock,
    QuizQuestion,
  },
  methods: {
    async submit() {
      const [error, data] = await submitQuiz(
        this.moduleId!,
        this.type!,
        this.quizAnswers.length,
        this.quizAnswers.filter((ans) => {
          return ans == 2;
        }).length,
      );
      if (error) {
        alert("Quiz was not submitted, please try it again");
        this.$router.go(0);
      }
    },
    // status 0 = unanswered, 1 = incorrect, 2 = correct
    submitQuestion(status: number, i: number) {
      this.quizAnswers[i] = status;
      this.isDisabled = this.quizAnswers.some((ans) => {
        return ans == 0;
      });
    },
  },
  mounted() {
    this.moduleId = this.$route.params.moduleId as ILectureModuleId;
    this.type = this.$route.params.type as string;

    if (this.type != "prelim" && this.type != "end") {
      this.$router.push("/");
    }

    let words = this.moduleId.split("-");
    words = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    this.titleBlock.module = words.join(" ");

    if (this.type == "prelim") {
      this.titleBlock.title = "Preliminary Quiz";
      this.titleBlock.subtitle = "Let's see what you know";
    } else {
      this.titleBlock.title = "Review Quiz";
      this.titleBlock.subtitle = "Let’s see what you’ve learnt!";
    }

    try {
      this.quizQuestions = DataExtractor.getQuizQuestions(
        this.moduleId,
        this.type,
      );
    } catch {
      console.log("Cannot get questions for module");
      this.$router.push("/");
    }

    this.quizAnswers = Array(this.quizQuestions!.length).fill(0);
  },
  data() {
    return {
      moduleId: null as ILectureModuleId | null,
      type: null as string | null,
      titleBlock: {
        module: "",
        title: "",
        subtitle: "",
      } as { module: string; title: string; subtitle: string },
      quizQuestions: null as QuestionForQuiz[] | null,
      quizAnswers: [] as number[],
      isDisabled: true as boolean,
    };
  },
});
</script>
