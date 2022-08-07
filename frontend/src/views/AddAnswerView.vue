//Deprecated
<template>
  <div class="lecture-container">
    <TitleBlock
      module="Experience"
      title="Adding answers to your interview profile"
      subtitle="blah blac"
    >
      Now you understand how to answer behaviural interview questions using the
      STAR method, it’s time for you to start praticing. First pick out a
      question you want to answer, followed by a relevant experience. If you
      forgot to add an experience, you can still do that as well.
    </TitleBlock>
    <AddAnswer></AddAnswer>
    <button class="go-button">Save and continue -></button>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/css/theme.scss";
</style>

<script lang="ts">
import AddAnswer from "@/components/AddAnswer.vue";
import TitleBlock from "@/components/TitleBlock.vue";
import ModuleStatus from "@/types/ModuleStatus.interface";
import { defineComponent } from "vue";

export default defineComponent({
  name: "AddAnswerView",
  components: { AddAnswer, TitleBlock },
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
