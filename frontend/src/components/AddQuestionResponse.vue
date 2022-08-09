<template>
  <div class="add-question-response">
    <h2>{{ question.questionText }}</h2>
    <collapsible-responses
      v-if="editMode === false && question.answerCount > 0"
      :answers="getAnswers()"
      @newResponse="createNewResponse"
    />
    <experience-select
      v-else-if="selectedExperienceId === null"
      :experiences="question.experiences"
      @onExperienceClick="(id) => (this.selectedExperienceId = id)"
    />
    <response-inputs
      v-else
      :experience="getSelectedQuestion(selectedExperienceId)"
      :questionId="question.questionId"
      :current-answer="currentAnswer(selectedExperienceId)"
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
import { Answer, QuestionResponse } from "@/types/Question.interface";
import { defineComponent, PropType } from "vue";
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
    getSelectedQuestion(id: number) {
      return this.question.experiences.find((q) => q.experienceId == id);
    },
    getAnswers(): Answer[] {
      return this.question.answers!.map((answer) => {
        const matchingExperience = this.question.experiences.find((exp) => {
          return exp.experienceId == answer.experienceId;
        });
        return { ...answer, experience: matchingExperience };
      });
    },
    currentAnswer(experienceId: number) {
      return this.question.answers?.find((answer) => {
        return answer.experienceId == experienceId;
      });
    },
    createNewResponse() {
      this.editMode = true;
    },
    savedAnswer(answer: Answer, isEdit: boolean) {
      this.editMode = false;
      this.selectedExperienceId = null;
      this.$emit("saveResponse", answer, isEdit);
    },
  },
  data() {
    return {
      selectedExperienceId: null as number | null,
      editMode: false as boolean,
    };
  },
  props: {
    question: {
      type: Object as PropType<QuestionResponse>,
      required: true,
    },
  },
});
</script>
