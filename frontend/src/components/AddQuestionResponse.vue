<template></template>

<style lang="scss" scoped></style>

<script lang="ts">
import CompletedQuestion from "@/components/CompletedQuestion.vue";
import OtherQuestion from "@/components/OtherQuestion.vue";
import QbSearchBar from "@/components/QbSearchBar.vue";
import QbSideBarQuestion from "@/components/QbSideBarQuestion.vue";
import TitleBlock from "@/components/TitleBlock.vue";
import Question from "@/types/Question.interface";
import { defineComponent } from "vue";

export default defineComponent({
  name: "AddQuestionResponse",
  components: { TitleBlock, QbSearchBar, QbSideBarQuestion },
  data() {
    return {};
  },
});
</script>
