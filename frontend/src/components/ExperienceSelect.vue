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
    const [expError, experiences] = await getExperiences();
    if (labelError || expError) {
      alert("Error");
    }
    this.labels = labels;
    this.experiences = experiences;
  },
  data() {
    return {
      experiences: this.initialExperiences,
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
      if (newExperience.experienceId) {
        const oldExp = this.experiences.find(
          (e) => e.experienceId == newExperience.experienceId,
        );

        let update: { name?: string } = {};
        if (oldExp!.name != newExperience.name) {
          oldExp!.name = newExperience.name;
          update["name"] = newExperience.name;
        }
        oldExp!.labels = newExperience.labels;
        const [error, data] = await updateExperience(oldExp!.experienceId!, {
          ...update,
          labels: oldExp!.labels,
        });
        if (error) {
          alert("Updating experience failed");
        }
      } else {
        const [error, data] = await putExperience(newExperience);
        if (error) {
          alert("Cannot create new experience");
        } else {
          newExperience.experienceId = data.experienceId;
          this.experiences.push(newExperience);
        }
      }
      this.isModalOpen = false;
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
