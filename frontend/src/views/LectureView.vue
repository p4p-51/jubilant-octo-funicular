<template>
  <progress-side-bar :modules="modules"></progress-side-bar>
  <router-view class="lecture-container" />
  <!-- <div class="lecture-view">
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

    <button @click="goToBuild" class="go-button">Gotcha! -></button>
  </div> -->
</template>

<style lang="scss">
@import "@/assets/css/theme.scss";

.lecture-container {
  width: 100%;
  height: 100%;

  padding: 20px 40px;

  overflow-y: scroll;

  display: flex;
  flex-direction: column;

  justify-content: space-between;
}

.go-button {
  background-color: $c-primary;
  color: $c-background;

  align-self: flex-end;

  margin: 70px 0;
  margin-top: 50px;
}
</style>

<script lang="ts">
import ProgressSideBar from "@/components/ProgressSideBar.vue";
import Example from "@/types/Example.interface";

import ModuleStatus from "@/types/ModuleStatus.interface";
import { defineComponent } from "vue";

export default defineComponent({
  name: "LectureView",
  components: {
    ProgressSideBar,
  },
  methods: {
    goToBuild() {
      this.$router.push("/lecture/build-profile");
    },
  },
  data() {
    return {
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
              status: "current",
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
    };
  },
});
</script>
