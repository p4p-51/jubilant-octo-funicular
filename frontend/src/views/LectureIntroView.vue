<template>
  <progress-side-bar :modules="modules" />
  <div class="intro-view">
    <title-block
      title="Introduction to Behavioural interviews"
      subtitle="We’ve made a study plan tailored just for you based on your preferences! Take a minute to look through the agenda."
    />

    <div class="content-container">
      <h2>Difference between different types of inteviews</h2>
      <div class="comparison-blocks">
        <div class="single-block">
          <img src="@/assets/illustrations/business-chat.svg" />
          <h5>Tail fatback shank porchetta prosciutto</h5>
          <p>
            Ham hock cow meatball beef, pork belly burgdoggen jowl brisket
            kielbasa salami pork chop boudin.
          </p>
          <ul>
            <li>Tongue meatloaf bacon boudin ham hock venison</li>
            <li>
              Kevin porchetta ribeye doner shankle burgdoggen fatback meatloaf
              venison tail pork belly.
            </li>
            <li>
              Jowl rump andouille short loin kevin, buffalo ham corned beef
              prosciutto chicken ground round chuck
            </li>
          </ul>
        </div>
        <div class="single-block">
          <img src="@/assets/illustrations/woman-sitting.svg" />
          <h5>Tail fatback shank porchetta prosciutto</h5>
          <p>
            Ham hock cow meatball beef, pork belly burgdoggen jowl brisket
            kielbasa salami pork chop boudin.
          </p>
          <ul>
            <li>Tongue meatloaf bacon boudin ham hock venison</li>
            <li>
              Kevin porchetta ribeye doner shankle burgdoggen fatback meatloaf
              venison tail pork belly.
            </li>
            <li>
              Jowl rump andouille short loin kevin, buffalo ham corned beef
              prosciutto chicken ground round chuck
            </li>
          </ul>
        </div>
        <div class="single-block">
          <img src="@/assets/illustrations/people-font.svg" />
          <h5>Tail fatback shank porchetta prosciutto</h5>
          <p>
            Ham hock cow meatball beef, pork belly burgdoggen jowl brisket
            kielbasa salami pork chop boudin.
          </p>
          <ul>
            <li>Tongue meatloaf bacon boudin ham hock venison</li>
            <li>
              Kevin porchetta ribeye doner shankle burgdoggen fatback meatloaf
              venison tail pork belly.
            </li>
            <li>
              Jowl rump andouille short loin kevin, buffalo ham corned beef
              prosciutto chicken ground round chuck
            </li>
          </ul>
        </div>
      </div>
    </div>

    <button @click="goToLect" class="go-button">Gotcha! -></button>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/theme.scss";

.intro-view {
  width: 100%;
  height: 100%;

  padding: 20px 40px;

  overflow-y: scroll;

  display: flex;
  flex-direction: column;

  justify-content: space-between;
}

.content-container {
  display: flex;

  flex-direction: column;
  align-items: center;
  margin: 20px 50px;
  margin-bottom: 50px;

  h2 {
    font-size: 20px;
    font-weight: 400;

    margin-bottom: 100px;
  }

  .comparison-blocks {
    display: flex;

    gap: 150px;
    justify-content: space-evenly;
    width: 100%;

    .single-block {
      max-width: 500px;

      display: flex;
      flex-direction: column;
      align-items: flex-start;

      img {
        height: 150px;
        align-self: center;
      }

      h5 {
        font-size: 16px;
        font-weight: 500;

        color: $c-black;
        margin-bottom: 10px;
        margin-top: 50px;
      }

      p,
      ul {
        font-size: 14px;
        font-weight: 400;

        color: $c-grey-dark;

        li {
          margin-bottom: 10px;
        }
      }
    }
  }
}

.go-button {
  background-color: $c-primary;
  color: $c-background;

  align-self: flex-end;

  margin-bottom: 70px;
}
</style>

<script lang="ts">
import ProgressSideBar from "@/components/ProgressSideBar.vue";
import TitleBlock from "@/components/TitleBlock.vue";
import ModuleStatus from "@/types/ModuleStatus.interface";
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
  components: { TitleBlock, ProgressSideBar },
  methods: {
    goToLect() {
      this.$router.push("/lecture/prem-quiz");
    },
  },
  data() {
    return {
      modules: [
        {
          name: "Introduction",
          id: "fjisaljio",
          status: "current",
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
          name: "Organising Past Experiences",
          id: "fsafsafsa",
          status: "future",
          url: "/lecture/prem-quiz",
          children: [
            {
              name: "Prelimiary Quiz",
              id: "fafwqa",
              status: "future",
              url: "/lecture/prem-quiz",
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
    };
  },
});
</script>
