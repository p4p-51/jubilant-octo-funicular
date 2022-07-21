<template>
  <progress-side-bar :modules="modules"></progress-side-bar>
  <div class="lecture-view">
    <TitleBlock
      module="Organising past experiences"
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
    <add-experiences />
    <button @click="goToQuestions" class="next">Save and continue</button>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/theme.scss";

.lecture-view {
  padding: 20px 40px;

  overflow-y: scroll;

  display: flex;
  flex-direction: column;
}

.next {
  align-self: flex-end;

  background: $c-primary;
  color: $c-background;

  margin-top: 60px;
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
import AddExperiences from "@/components/AddExperiences.vue";

export default defineComponent({
  name: "BuildProfileView",
  components: {
    TitleBlock,
    AddExperiences,

    ProgressSideBar,
  },
  methods: {
    goToQuestions() {
      this.$router.push("/questions/1");
    },
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
          ],
        },
      ] as ModuleStatus[],
    };
  },
});
</script>
