<template>
  <div class="add-question-response">
    <h2>{{ title }}</h2>
    <!-- <experience-select :experiences="experiences" /> -->
    <!-- <collapsible-responses :responses="responses" /> -->
    <response-inputs :experience="selectedExperience" />
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/theme.scss";

.add-question-response {
  flex: 1;

  height: 100%;

  margin-left: 80px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h2 {
    font-size: 20px;
    font-weight: 400;
  }
}
</style>

<script lang="ts">
import CompletedQuestion from "@/components/CompletedQuestion.vue";
import OtherQuestion from "@/components/OtherQuestion.vue";
import QbSearchBar from "@/components/QbSearchBar.vue";
import QbSideBarQuestion from "@/components/QbSideBarQuestion.vue";
import TitleBlock from "@/components/TitleBlock.vue";
import Question from "@/types/Question.interface";
import { defineComponent, PropType } from "vue";
import { Experience, Response } from "@/types/Question.interface";
import ExperienceSelect from "@/components/ExperienceSelect.vue";
import CollapsibleResponses from "./CollapsibleResponses.vue";
import ResponseInputs from "./ResponseInputs.vue";

export default defineComponent({
  name: "AddQuestionResponse",
  components: {
    // ExperienceSelect,
    // CollapsibleResponses,
    ResponseInputs,
  },
  data() {
    return {
      selectedExperience: {
        id: "1",
        title: "ENGGEN 115 leadership",
        labels: ["Conflict", "Teamwork"],
      },
    };
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    label: {
      type: String,
    },
    experiences: {
      type: Array as PropType<Experience[]>,
      required: true,
    },
    responses: {
      type: Array as PropType<Response[]>,
      required: true,
    },
  },
});
</script>
