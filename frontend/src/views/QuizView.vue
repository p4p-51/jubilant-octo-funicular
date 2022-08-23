<template>
  <progress-side-bar :modules="modules"></progress-side-bar>
  <div class="quiz-view">
    <title-block v-bind="titleBlock" />
    <div class="content-container">
      <quiz-question
        class="question-block"
        v-for="(question, i) in quizQuestions"
        :question="quizQuestions[0]"
        :questionNumber="i + 1"
        :key="i"
      />
    </div>
    <button class="go-button" @click="this.$router.push('/lecture/end')">
      All done! ->
    </button>
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
import { DataExtractor, IModuleId } from "@/router/routes";


export default defineComponent({
  name: "QuizView",
  components: {
    TitleBlock,
    QuizQuestion,
    ProgressSideBar,
  },
  mounted() {
    this.moduleId = this.$route.params.moduleId as IModuleId;
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
      this.quizQuestions = DataExtractor.getQuizQuestions(this.moduleId, this.type);
    } catch {
      console.log("Cannot get questions for module");
      this.$router.push("/");
    }
  },
  data() {
    return {
      moduleId: null as IModuleId | null,
      type: null as string | null,
      titleBlock: {
        module: "",
        title: "",
        subtitle: "",
      } as { module: string, title: string, subtitle: string },
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
            {
              name: "Some sort of child",
              id: "fafwqa",
              status: "done",
              url: "#",
            },
          ] as ModuleStatus[],
        },
        {
          name: "Organising Past Experiences",
          id: "fsafsafsa",
          status: "current",
          url: "/lecture/prem-quiz",
          children: [
            {
              name: "Prelimiary Quiz",
              id: "fafwqa",
              status: "done",
              url: "/lecture/prem-quiz",
            },
            {
              name: "Lecture",
              id: "fafwqa",
              status: "done",
              url: "/lecture",
            },
            {
              name: "Build your own profile",
              id: "fafwqa",
              status: "done",
              url: "/lecture/build-profile",
            },
            {
              name: "Review quiz",
              id: "fafwqa",
              status: "current",
              url: "/lecture/quiz",
            },
          ] as ModuleStatus[],
        },
        {
          name: "Another module here",
          id: "fjisaljio",
          status: "future",
          url: "#",
          children: [
            {
              name: "Some sort of child",
              id: "fafwqa",
              status: "future",
              url: "#",
            },
            {
              name: "Some sort of child",
              id: "fafwqa",
              status: "future",
              url: "#",
            },
            {
              name: "Some sort of child",
              id: "fafwqa",
              status: "future",
              url: "#",
            },
            {
              name: "Some sort of child",
              id: "fafwqa",
              status: "future",
              url: "#",
            },
            {
              name: "Some sort of child",
              id: "fafwqa",
              status: "future",
              url: "#",
            },
          ] as ModuleStatus[],
        },
        {
          name: "Yet another module",
          id: "fjisaljio",
          status: "future",
          url: "#",
          children: [
            {
              name: "Some sort of child",
              id: "fafwqa",
              status: "future",
              url: "#",
            },
            {
              name: "Some sort of child",
              id: "fafwqa",
              status: "future",
              url: "#",
            },
            {
              name: "Some sort of child",
              id: "fafwqa",
              status: "future",
              url: "#",
            },
            {
              name: "Some sort of child",
              id: "fafwqa",
              status: "future",
              url: "#",
            },
            {
              name: "Some sort of child",
              id: "fafwqa",
              status: "future",
              url: "#",
            },
          ] as ModuleStatus[],
        },
        {
          name: "Graduation",
          id: "dsadasfwqa",
          status: "future",
          url: "#",
        },
      ] as ModuleStatus[],
      quizQuestions: null as QuestionForQuiz | null,
    };
  },
});
</script>
