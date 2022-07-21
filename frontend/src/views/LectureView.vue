<template>
  <progress-side-bar :modules="modules"></progress-side-bar>
  <div class="lecture-view">
    <TitleBlock
      module="Self introduction"
      title="Building your interview
    profile"
      subtitle="blah blah something something"
    >
      Pig fatback jerky shankle sausage. Porchetta spare ribs turducken, tail
      salami cupim flank pork loin pig meatloaf brisket turkey ham hock swine
      strip steak. Sirloin chicken ground round bacon, kielbasa chuck kevin
      short ribs. Short loin chuck salami pork chop fatback. Pork loin short
      loin pastrami short ribs frankfurter salami strip steak brisket leberkas
      sirloin shoulder boudin pig. Ribeye shoulder spare ribs pig. Filet mignon
      kielbasa pig, frankfurter swine meatball tri-tip. Tri-tip meatball shank
      filet mignon, burgdoggen pork chop chislic pastrami porchetta ball tip
      sirloin shankle pancetta venison spare ribs.
      <br />
      <br />
      Ball tip tri-tip tongue turkey, ham fatback tenderloin pastrami jerky
      sausage brisket beef bresaola pig frankfurter. Pork frankfurter jerky
      shoulder leberkas hamburger. Bresaola ribeye tail kielbasa corned beef
      pastrami shankle cow chuck pancetta flank tenderloin swine. Andouille
      venison porchetta, jowl chislic pork loin filet mignon short ribs rump
      sausage kielbasa ground round alcatra shank.
    </TitleBlock>

    <SectionParagraph title="Building your interview">
      Pig fatback jerky shankle sausage. Porchetta spare ribs turducken, tail
      salami cupim flank pork loin pig meatloaf brisket turkey ham hock swine
      strip steak. Sirloin chicken ground round bacon, kielbasa chuck kevin
      short ribs. Short loin chuck salami pork chop fatback. Pork loin short
      loin pastrami short ribs frankfurter salami strip steak brisket leberkas
      sirloin shoulder boudin pig.
      <br />
      <br />
      Ribeye shoulder spare ribs pig. Filet mignon kielbasa pig, frankfurter
      swine meatball tri-tip. Tri-tip meatball shank filet mignon, burgdoggen
      pork chop chislic pastrami porchetta ball tip sirloin shankle pancetta
      venison spare ribs. Ball tip tri-tip tongue turkey, ham fatback tenderloin
      pastrami jerky sausage brisket beef bresaola pig frankfurter. Pork
      frankfurter jerky shoulder leberkas hamburger. Bresaola ribeye tail
      kielbasa corned beef pastrami shankle cow chuck pancetta flank tenderloin
      swine. Andouille venison porchetta, jowl chislic pork loin filet mignon
      short ribs rump sausage kielbasa ground round alcatra shank.
    </SectionParagraph>

    <SectionExample title="Example" :good="goodExample" :bad="badExample" />

    <quiz-question
      v-for="(question, i) in quizQuestions"
      :question="quizQuestions[0]"
      :questionNumber="i + 1"
      :key="i"
    />
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/theme.scss";

.lecture-view {
  padding: 20px 40px;

  overflow-y: scroll;
}
</style>

<script lang="ts">
import ProgressSideBar from "@/components/ProgressSideBar.vue";
import QuizQuestion from "@/components/QuizQuestion.vue";
import SectionExample from "@/components/SectionExample.vue";
import SectionParagraph from "@/components/SectionParagraph.vue";
import TitleBlock from "@/components/TitleBlock.vue";
import Example from "@/types/Example.interface";

import ModuleStatus from "@/types/ModuleStatus.interface";
import { defineComponent } from "vue";
import QuestionForQuiz from "@/types/QuizQuestion.interface";

export default defineComponent({
  name: "LectureView",
  components: {
    TitleBlock,
    SectionParagraph,
    SectionExample,
    ProgressSideBar,
    QuizQuestion,
  },

  data() {
    return {
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
        },
      ] as QuestionForQuiz[],
      goodExample: {
        text: "Bacon ipsum dolor amet venison cupim pig cow. Corned beef pork belly leberkas turducken, sirloin frankfurter pork loin ham porchetta spare ribs venison shankle. Hamburger turducken capicola spare ribs. Pork loin sausage ground round porchetta pancetta chuck ham pig hamburger boudin leberkas tenderloin jowl shank brisket. Tail brisket shoulder shankle chicken buffalo capicola turkey filet mignon strip steak pig sirloin salami tenderloin turducken",
        explanations: [
          "Pancetta tri-tip buffalo drumstick leberkas",
          "Andouille meatball filet mignon rump doner short loin ",
          "Biltong leberkas doner pancetta brisket buffalo burgdoggen. ",
        ],
      } as Example,
      badExample: {
        text: "Andouille chislic turkey doner, beef ribs ground round porchetta t-bone pancetta drumstick rump kielbasa. Doner cupim flank tenderloin short loin bacon shankle. Prosciutto drumstick leberkas flank, frankfurter corned beef shoulder sausage filet mignon beef ribs rump pastrami. Drumstick brisket turkey t-bone picanha spare ribs short ribs hamburger cupim pork chop burgdoggen shank. Kevin sirloin frankfurter salami ball tip alcatra short ribs, jerky tri-tip pork loin prosciutto meatball. Turducken kevin jerky ball tip burgdoggen tail cupim spare ribs. T-bone doner shank cupim.",
        explanations: [
          "Ground round salami beef short ribs",
          "Tenderloin andouille shank, pork cow alcatra spare ribs salami strip",
          "Andouille meatball filet mignon rump doner short loin ",
        ],
      } as Example,
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
          name: "Another module here",
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
              status: "current",
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
      ] as ModuleStatus[],
    };
  },
});
</script>
