<template>
  <div class="add-question-response">
    <h2>{{ title }}</h2>
    <collapsible-responses
      v-if="editMode === false && responses.length > 0"
      :responses="responses"
      @newResponse="createNewResponse"
    />
    <experience-select
      v-else-if="selectedExperienceId === null"
      :experiences="experiences"
      @onExperienceClick="(id) => (this.selectedExperienceId = id)"
    />

    <response-inputs
      v-else
      :experience="getSelectedQuestion(selectedExperienceId)"
      @savedAnswer="savedAnswer"
    />
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
    ExperienceSelect,
    CollapsibleResponses,
    ResponseInputs,
  },
  methods: {
    getSelectedQuestion(id: string) {
      return this.experiences.find((q) => q.id == id);
    },
    createNewResponse() {
      this.editMode = true;
    },
    savedAnswer() {
      this.editMode = false;
      this.selectedExperienceId = null;
    },
  },
  data() {
    return {
      selectedExperienceId: null as string | null,
      editMode: false as boolean,
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
