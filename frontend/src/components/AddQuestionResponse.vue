<template>
  <loading v-model:active="isLoading" />
  <div class="add-question-response">
    <h2>{{ question.questionText }}</h2>
    <collapsible-responses
      v-if="editMode === false && question.answerCount > 0"
      :answers="getAnswers()"
      @newResponse="createNewResponse"
      @edit="editResponse"
      @delete="deleteResponse"
    />
    <experience-select
      v-else-if="selectedExperienceId === null"
      :initialExperiences="emptyExperiences"
      @onExperienceClick="onExperienceClick"
      @saveExperience="saveExperience"
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
    font-size: 16px;
    font-weight: 400;
  }
}
</style>

<script lang="ts">
import { putExperience } from "@/apis/api";
import ExperienceSelect from "@/components/ExperienceSelect.vue";
import {
  Answer,
  Experience,
  QuestionResponse,
} from "@/types/Question.interface";
import { defineComponent, PropType } from "vue";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import CollapsibleResponses from "./CollapsibleResponses.vue";
import ResponseInputs from "./ResponseInputs.vue";

export default defineComponent({
  name: "AddQuestionResponse",
  components: {
    ExperienceSelect,
    CollapsibleResponses,
    ResponseInputs,
    Loading,
  },
  computed: {
    emptyExperiences(): Experience[] {
      console.log("anythingv");
      return this.question.experiences.filter((experience) => {
        let found = false;
        this.question.answers?.forEach((answer) => {
          if (answer.experienceId == experience.experienceId) {
            found = true;
          }
        });
        return !found;
      });
    },
  },
  methods: {
    async saveExperience(newExperience: Experience) {
      this.isLoading = true;
      const [error, data] = await putExperience(newExperience);
      if (error) {
        alert("Cannot create new experience");
      } else {
        newExperience.experienceId = data.experienceId;
        this.question.experiences.push(newExperience);
      }
      this.isLoading = false;
    },
    deleteResponse(response: Answer) {
      this.$emit("deleteResponse", response);
    },
    onExperienceClick(id: number) {
      console.log("this should be id", id);
      return (this.selectedExperienceId = id);
    },
    editResponse(res: Answer) {
      this.editMode = true;
      this.selectedExperienceId = res.experience!.experienceId!;
    },
    getSelectedQuestion(id: number) {
      console.log("getSelected question id", id);
      console.log("getSelected question exp", this.question.experiences);
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
      question: this.initialQuestion,
      isLoading: false,
    };
  },
  props: {
    initialQuestion: {
      type: Object as PropType<QuestionResponse>,
      required: true,
    },
  },
});
</script>
