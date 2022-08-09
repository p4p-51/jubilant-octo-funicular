<template>
  <div class="add-experiences">
    <h2>List down some of your past teamwork experiences</h2>
    <div class="content">
      <div class="create-experiences">
        <button class="box" @click="addNewExperience">
          + Add a new experience
        </button>
        <div
          v-for="e in experiences"
          :key="e.name"
          class="box experience"
          @click="selectExperience($event, e)"
        >
          <p>{{ e.name }}</p>
          <div class="actions">
            <div @click.stop="deleteExperience($event, e)" class="edit-icon">
              <img src="@/assets/icons/delete.svg" />
            </div>
          </div>
        </div>
      </div>
      <div class="checklist">
        <h3>Your experiences</h3>
        <p v-for="label in labels" :key="label">
          <span
            class="tick"
            v-if="this.experienceAttributes.includes(label.label)"
          >
            ✓
          </span>
          <span class="dot" v-else>• </span>{{ label.label }}
        </p>
      </div>
    </div>
  </div>
  <experience-modal
    :experience="selectedExperience"
    v-if="isModalOpen"
    :labels="labels"
    @cancelExp="isModalOpen = false"
    @saveExperience="saveExperience"
  />
</template>

<style lang="scss" scoped>
@import "@/assets/css/theme.scss";

.add-experiences {
  width: 100%;

  > h2 {
    font-size: 20px;
    font-weight: 400;

    margin-bottom: 5px;
    margin-top: 40px;
  }

  .content {
    display: flex;
    justify-content: space-between;
    column-gap: 70px;

    .add-experiences {
      flex: 1;
    }

    .create-experiences {
      flex: 2;
      display: flex;

      flex-direction: column;

      margin-top: 30px;

      row-gap: 20px;

      .box {
        border: solid 1px $c-grey-light;
        border-radius: 0;

        width: 100%;
        max-width: 1000px;

        padding: 20px 35px;

        box-sizing: border-box;

        cursor: pointer;
        transition: $animation;

        &:hover {
          background: rgba($c-primary, 0.1);
          border: solid 1px $c-primary;
          transform: none;
        }
      }

      .experience {
        display: flex;
        justify-content: space-between;
        align-items: center;

        &:hover {
          background: none;
          border: solid 1px $c-primary;
        }

        .actions {
          display: flex;
          align-items: center;

          .edit-icon {
            height: 30px;
            width: 30px;

            border-radius: 50%;
            border: 2px solid rgba(34, 34, 34, 0.2);
            border-style: outset;

            background-color: white;
            background-clip: padding-box;
            transition: $animation;

            display: flex;
            justify-content: center;
            align-items: center;

            margin-left: 20px;

            &:hover {
              transform: scale(1.1);
            }

            > img {
              height: 50%;
            }
          }
        }
      }
    }

    .checklist {
      width: 30%;
      box-sizing: border-box;

      h3 {
        font-size: 20px;
        font-weight: 400;
      }

      p {
        margin-left: 20px;

        .dot {
          color: orange;
        }

        .tick {
          color: green;
        }
      }

      p > span {
        font-weight: bold;
        margin-right: 10px;
      }
    }
  }
}
</style>

<script lang="ts">
import { Experience, Label } from "@/types/Question.interface";
import { defineComponent, PropType } from "vue";
import ExperienceModal from "@/components/ExperienceModal.vue";
import {
  deleteExperience,
  getExperiences,
  getLabels,
  putExperience,
  updateExperience,
} from "@/apis/api";

export default defineComponent({
  name: "AddExperiences",
  components: { ExperienceModal },
  async mounted() {
    this.labels = await getLabels();
    this.experiences = await getExperiences();
  },
  methods: {
    selectExperience(event: Event, e: Experience) {
      this.selectedExperience = e;
      this.isModalOpen = true;
    },
    addNewExperience() {
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
        const data = await updateExperience(oldExp!.experienceId!, {
          ...update,
          labels: oldExp!.labels,
        });
      } else {
        const data = await putExperience(newExperience);
        newExperience.experienceId = data.experienceId;
        this.experiences.push(newExperience);
      }
      this.isModalOpen = false;
    },
    async deleteExperience(event: Event, experience: Experience) {
      await deleteExperience(experience.experienceId!);
      this.experiences = this.experiences.filter((e) => {
        if (e !== experience) {
          return e;
        }
      });
    },
  },
  computed: {
    experienceAttributes() {
      let res: string[] = [];
      this.experiences.forEach((e) => {
        e.labels.forEach((l) => {
          if (!res.includes(l)) {
            res.push(l);
          }
        });
      });
      return res;
    },
  },
  data() {
    return {
      isModalOpen: false,
      selectedExperience: null as Experience | null,
      labels: [] as Label[],
      experiences: [] as Experience[],
    };
  },
  props: {},
});
</script>
