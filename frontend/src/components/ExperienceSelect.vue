<template>
  <div class="experience-selection">
    <h5>Your relevant experiences:</h5>
    <div
      class="option"
      v-for="experience in experiences"
      :key="experience.experienceId"
      @click="$emit('onExperienceClick', experience.experienceId)"
    >
      <p>{{ experience.name }}</p>
    </div>
    <p @click="addNewExperience">I want to talk about a different experience</p>
  </div>
  <experience-modal
    v-if="isModalOpen"
    @cancelExp="isModalOpen = false"
    @saveExperience="saveExperience"
    :labels="labels"
  />
</template>

<style lang="scss" scoped>
@import "@/assets/css/theme.scss";

.experience-selection {
  margin-top: 50px;

  display: flex;
  flex-direction: column;
  row-gap: 10px;

  align-self: flex-start;
  width: 95%;
  max-width: 800px;

  h5 {
    font-size: 16px;
    font-weight: 400;

    color: $c-black;

    margin: 0;
  }

  .option {
    border: solid 1px $c-grey-light;

    font-size: 14px;

    padding: 0 20px;

    margin-right: 15px;

    cursor: pointer;
    transition: $animation;

    &:hover {
      border: solid 1px $c-primary;
      margin-right: 0;
      margin-left: 15px;
    }
  }

  > p {
    margin: 0;
    font-size: 12px;

    align-self: flex-end;

    cursor: pointer;
    transition: $animation;

    &:hover {
      color: $c-primary;
      transform: scale(1.02);
    }
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
import { Experience, Answer, Label } from "@/types/Question.interface";
import {
  deleteExperience,
  getExperiences,
  getLabels,
  putExperience,
  updateExperience,
} from "@/apis/api";
import ExperienceModal from "@/components/ExperienceModal.vue";

export default defineComponent({
  name: "ExperienceSelect",
  components: {
    ExperienceModal,
  },
  async mounted() {
    const [labelError, labels] = await getLabels();
    // const [expError, experiences] = await getExperiences();
    if (labelError) {
      alert("Error");
    }
    this.labels = labels;
    // this.experiences = experiences;
  },
  data() {
    return {
      isModalOpen: false,
      selectedExperience: null as Experience | null,
      labels: [] as Label[],
    };
  },
  methods: {
    selectExperience(event: Event, e: Experience) {
      this.selectedExperience = e;
      this.isModalOpen = true;
    },
    addNewExperience() {
      console.log("REEEEEEEEEEE");
      this.selectedExperience = null;
      this.isModalOpen = true;
    },
    async saveExperience(newExperience: Experience) {
      const [error, data] = await putExperience(newExperience);
      if (error) {
        alert("Cannot create new experience");
      } else {
        newExperience.experienceId = data.experienceId;
        // this.experiences.push(newExperience);
        this.$emit("saveExperience", newExperience);
      }
      this.isModalOpen = false;
    },
  },
  computed: {
    experiences() {
      return this.initialExperiences;
    },
  },
  props: {
    initialExperiences: {
      type: Array as PropType<Experience[]>,
      required: true,
    },
  },
});
</script>
