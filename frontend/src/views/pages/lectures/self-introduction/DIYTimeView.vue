<template>
  <progress-side-bar :modules="modules"></progress-side-bar>

  <div class="diy-time-view">
    <title-block
      title="Introduction to Behavioural interviews"
      subtitle="We’ve made a study plan tailored just for you based on your preferences! Take a minute to look through the agenda."
      module="Self introduction"
    />
    <div class="content-container"></div>

    <button class="go-button">Gotcha! -></button>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/theme.scss";

.diy-time-view {
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

    margin-bottom: 70px;
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
import { defineComponent } from "vue";

export default defineComponent({
  name: "DIYTimeView",
  components: { TitleBlock, ProgressSideBar },
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
      ],
    };
  },
});
</script>
