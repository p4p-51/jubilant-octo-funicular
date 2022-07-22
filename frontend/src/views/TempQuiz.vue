<template>
  <progress-side-bar :modules="modules"></progress-side-bar>
  <div class="quiz-view">
    <title-block
      module="Self introduction"
      title="Preliminary quiz"
      subtitle="Tell us what you know, so we an present to you the right content!"
    />
    <div class="content-container">
      <quiz-question
        class="question-block"
        v-for="(question, i) in quizQuestions"
        :question="quizQuestions[0]"
        :questionNumber="i + 1"
        :key="i"
      />
    </div>
    <button class="go-button" @click="this.$router.push('/lecture/')">
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

export default defineComponent({
  name: "TempQuiz",
  components: {
    TitleBlock,
    QuizQuestion,
    ProgressSideBar,
  },
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
          status: "done",
          url: "#",
          children: [
            {
              name: "Prelimiary Quiz",
              id: "fafwqa",
              status: "current",
              url: "/lecture/quiz",
            },
            {
              name: "Lecture",
              id: "fafwqa",
              status: "future",
              url: "/lecture",
            },
            {
              name: "Build your own profile",
              id: "fafwqa",
              status: "future",
              url: "/lecture/build-profile",
            },
            {
              name: "Review quiz",
              id: "fafwqa",
              status: "future",
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
      quizQuestions: [
        {
          title: "What is the best way to learn Vue?",
          options: [
            {
              id: "1",
              text: "Pig fatback jerky shankle sausage. Porchetta spare ribs turducken, tail salami cupim flank pork loin pig meatloaf brisket turkey ham hock swine strip steak. Sirloin chicken ground round bacon, kielbasa chuck kevin short ribs. Short loin chuck salami pork chop fatback. Pork loin short loin pastrami short ribs frankfurter salami strip steak brisket leberkas sirloin shoulder boudin pig. Ribeye shoulder spare ribs pig. Filet mignon kielbasa pig, frankfurter swine meatball tri-tip. Tri-tip meatball shank filet mignon, burgdoggen pork chop chislic pastrami porchetta ball tip sirloin shankle pancetta venison spare ribs.",
              isCorrect: true,
              explanation:
                "This is correct because  Bresaola ribeye tail kielbasa corned beef pastrami ",
            },
            {
              id: "2",
              text: "Ball tip tri-tip tongue turkey, ham fatback tenderloin pastrami jerky sausage brisket beef bresaola pig frankfurter. Pork frankfurter jerky shoulder leberkas hamburger. Bresaola ribeye tail kielbasa corned beef pastrami shankle cow chuck pancetta flank tenderloin swine. Andouille venison porchetta, jowl chislic pork loin filet mignon short ribs rump sausage kielbasa ground round alcatra shank.",
              isCorrect: false,
              explanation:
                "This is incorrect because  Bresaola ribeye tail kielbasa corned beef pastrami ",
            },
            {
              id: "3",
              text: "Andouille chislic turkey doner, beef ribs ground round porchetta t-bone pancetta drumstick rump kielbasa. Doner cupim flank tenderloin short loin bacon shankle. Prosciutto drumstick leberkas flank, frankfurter corned beef shoulder sausage filet mignon beef ribs rump pastrami. Drumstick brisket turkey t-bone picanha spare ribs short ribs hamburger cupim pork chop burgdoggen shank. Kevin sirloin frankfurter salami ball tip alcatra short ribs, jerky tri-tip pork loin prosciutto meatball. Turducken kevin jerky ball tip burgdoggen tail cupim spare ribs. T-bone doner shank cupim.",
              isCorrect: false,
              explanation:
                "This is incorrect because  Bresaola ribeye tail kielbasa corned beef pastrami ",
            },
            {
              id: "4",
              text: "Bacon ipsum dolor amet venison cupim pig cow. Corned beef pork belly leberkas turducken, sirloin frankfurter pork loin ham porchetta spare ribs venison shankle. Hamburger turducken capicola spare ribs. Pork loin sausage ground round porchetta pancetta chuck ham pig hamburger boudin leberkas tenderloin jowl shank brisket. Tail brisket shoulder shankle chicken buffalo capicola turkey filet mignon strip steak pig sirloin salami tenderloin turducken",
              isCorrect: false,
              explanation:
                "This is incorrect because  Bresaola ribeye tail kielbasa corned beef pastrami ",
            },
          ],
          answer: "1",
        },
        {
          title: "What is the best way to learn Vue?",
          options: [
            {
              id: "1",
              text: "Pig fatback jerky shankle sausage. Porchetta spare ribs turducken, tail salami cupim flank pork loin pig meatloaf brisket turkey ham hock swine strip steak. Sirloin chicken ground round bacon, kielbasa chuck kevin short ribs. Short loin chuck salami pork chop fatback. Pork loin short loin pastrami short ribs frankfurter salami strip steak brisket leberkas sirloin shoulder boudin pig. Ribeye shoulder spare ribs pig. Filet mignon kielbasa pig, frankfurter swine meatball tri-tip. Tri-tip meatball shank filet mignon, burgdoggen pork chop chislic pastrami porchetta ball tip sirloin shankle pancetta venison spare ribs.",
              isCorrect: true,
              explanation:
                "This is correct because  Bresaola ribeye tail kielbasa corned beef pastrami ",
            },
            {
              id: "2",
              text: "Ball tip tri-tip tongue turkey, ham fatback tenderloin pastrami jerky sausage brisket beef bresaola pig frankfurter. Pork frankfurter jerky shoulder leberkas hamburger. Bresaola ribeye tail kielbasa corned beef pastrami shankle cow chuck pancetta flank tenderloin swine. Andouille venison porchetta, jowl chislic pork loin filet mignon short ribs rump sausage kielbasa ground round alcatra shank.",
              isCorrect: false,
              explanation:
                "This is incorrect because  Bresaola ribeye tail kielbasa corned beef pastrami ",
            },
            {
              id: "3",
              text: "Andouille chislic turkey doner, beef ribs ground round porchetta t-bone pancetta drumstick rump kielbasa. Doner cupim flank tenderloin short loin bacon shankle. Prosciutto drumstick leberkas flank, frankfurter corned beef shoulder sausage filet mignon beef ribs rump pastrami. Drumstick brisket turkey t-bone picanha spare ribs short ribs hamburger cupim pork chop burgdoggen shank. Kevin sirloin frankfurter salami ball tip alcatra short ribs, jerky tri-tip pork loin prosciutto meatball. Turducken kevin jerky ball tip burgdoggen tail cupim spare ribs. T-bone doner shank cupim.",
              isCorrect: false,
              explanation:
                "This is incorrect because  Bresaola ribeye tail kielbasa corned beef pastrami ",
            },
            {
              id: "4",
              text: "Bacon ipsum dolor amet venison cupim pig cow. Corned beef pork belly leberkas turducken, sirloin frankfurter pork loin ham porchetta spare ribs venison shankle. Hamburger turducken capicola spare ribs. Pork loin sausage ground round porchetta pancetta chuck ham pig hamburger boudin leberkas tenderloin jowl shank brisket. Tail brisket shoulder shankle chicken buffalo capicola turkey filet mignon strip steak pig sirloin salami tenderloin turducken",
              isCorrect: false,
              explanation:
                "This is incorrect because  Bresaola ribeye tail kielbasa corned beef pastrami ",
            },
          ],
          answer: "3",
        },
        {
          title: "What is the best way to learn Vue?",
          options: [
            {
              id: "1",
              text: "Pig fatback jerky shankle sausage. Porchetta spare ribs turducken, tail salami cupim flank pork loin pig meatloaf brisket turkey ham hock swine strip steak. Sirloin chicken ground round bacon, kielbasa chuck kevin short ribs. Short loin chuck salami pork chop fatback. Pork loin short loin pastrami short ribs frankfurter salami strip steak brisket leberkas sirloin shoulder boudin pig. Ribeye shoulder spare ribs pig. Filet mignon kielbasa pig, frankfurter swine meatball tri-tip. Tri-tip meatball shank filet mignon, burgdoggen pork chop chislic pastrami porchetta ball tip sirloin shankle pancetta venison spare ribs.",
              isCorrect: true,
              explanation:
                "This is correct because  Bresaola ribeye tail kielbasa corned beef pastrami ",
            },
            {
              id: "2",
              text: "Ball tip tri-tip tongue turkey, ham fatback tenderloin pastrami jerky sausage brisket beef bresaola pig frankfurter. Pork frankfurter jerky shoulder leberkas hamburger. Bresaola ribeye tail kielbasa corned beef pastrami shankle cow chuck pancetta flank tenderloin swine. Andouille venison porchetta, jowl chislic pork loin filet mignon short ribs rump sausage kielbasa ground round alcatra shank.",
              isCorrect: false,
              explanation:
                "This is incorrect because  Bresaola ribeye tail kielbasa corned beef pastrami ",
            },
            {
              id: "3",
              text: "Andouille chislic turkey doner, beef ribs ground round porchetta t-bone pancetta drumstick rump kielbasa. Doner cupim flank tenderloin short loin bacon shankle. Prosciutto drumstick leberkas flank, frankfurter corned beef shoulder sausage filet mignon beef ribs rump pastrami. Drumstick brisket turkey t-bone picanha spare ribs short ribs hamburger cupim pork chop burgdoggen shank. Kevin sirloin frankfurter salami ball tip alcatra short ribs, jerky tri-tip pork loin prosciutto meatball. Turducken kevin jerky ball tip burgdoggen tail cupim spare ribs. T-bone doner shank cupim.",
              isCorrect: false,
              explanation:
                "This is incorrect because  Bresaola ribeye tail kielbasa corned beef pastrami ",
            },
            {
              id: "4",
              text: "Bacon ipsum dolor amet venison cupim pig cow. Corned beef pork belly leberkas turducken, sirloin frankfurter pork loin ham porchetta spare ribs venison shankle. Hamburger turducken capicola spare ribs. Pork loin sausage ground round porchetta pancetta chuck ham pig hamburger boudin leberkas tenderloin jowl shank brisket. Tail brisket shoulder shankle chicken buffalo capicola turkey filet mignon strip steak pig sirloin salami tenderloin turducken",
              isCorrect: false,
              explanation:
                "This is incorrect because  Bresaola ribeye tail kielbasa corned beef pastrami ",
            },
          ],
          answer: "4",
        },
      ] as QuestionForQuiz[],
    };
  },
});
</script>
