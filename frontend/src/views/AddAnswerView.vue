<template>
  <progress-side-bar :modules="modules"></progress-side-bar>
  <div class="add-answer-view">
    <TitleBlock
      module="Experience"
      title="Adding answers to your interview profile"
      subtitle="blah blac"
    />
    <AddAnswer></AddAnswer>
    <button class="go-button">Save and continue -></button>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/css/theme.scss";

.add-answer-view {
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

  margin-bottom: 70px;
}
</style>

<script lang="ts">
import TitleBlock from "@/components/TitleBlock.vue";
import ProgressSideBar from "@/components/ProgressSideBar.vue";
import ModuleStatus from "@/types/ModuleStatus.interface";
import { defineComponent } from "vue";
import AddAnswer from "@/components/AddAnswer.vue";

export default defineComponent({
  name: "AddAnswerView",
  components: { AddAnswer, ProgressSideBar, TitleBlock },
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
