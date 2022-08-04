<template>
  <div class="modal">
    <div class="popup">
      <input
        v-if="!experience"
        class="title-input"
        placeholder="Your experience here"
        @change="updateTitle"
      />
      <input
        v-else
        class="title-input"
        :value="experience.title"
        @change="updateTitle"
      />
      <div v-for="label in labels" class="radio-line" :key="label.key">
        <p>{{ label.statement }}</p>
        <div class="radio-group">
          <label>Yes</label>
          <input
            type="radio"
            :name="label.key.toLowerCase()"
            :value="true"
            :checked="defaultValue(label.key, true)"
            @change="updateLabel($event, label.key)"
          />
          <label>No</label>
          <input
            type="radio"
            :name="label.key.toLowerCase()"
            :value="false"
            :checked="defaultValue(label.key, false)"
            @change="updateLabel($event, label.key)"
          />
        </div>
      </div>
      <div class="buttons">
        <button class="cancel" @click="cancelExperience">Cancel</button>
        <button class="save" @click="saveExperience">Save</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ButtonHTMLAttributes, defineComponent, PropType } from "vue";
import { Experience, Label } from "@/types/Question.interface";

export default defineComponent({
  name: "ExperienceModal",
  methods: {
    updateTitle(event: Event) {
      this.experienceTitle = (event.target as HTMLTextAreaElement).value;
    },
    updateLabel(event: Event, label: string) {
      const add = (event.target as ButtonHTMLAttributes).value;
      if (add === "true") {
        this.experienceLabels.push(label);
      } else {
        this.experienceLabels = this.experienceLabels.filter(
          (l) => l.toLowerCase() !== label.toLowerCase(),
        );
      }
    },
    cancelExperience() {
      this.$emit("cancelExp");
    },
    saveExperience() {
      const newExp: Experience = {
        id: this.experience?.id,
        title: this.experienceTitle,
        labels: this.experienceLabels,
      };
      this.$emit("saveExperience", newExp);
    },
    defaultValue(key: string, origin: boolean) {
      if (this.experience) {
        const found = this.experience.labels.find((l) => {
          return l.toLowerCase() === key.toLowerCase();
        });
        if (found !== undefined) {
          return origin;
        } else {
          return !origin;
        }
      } else {
        return !origin;
      }
    },
  },
  props: {
    experience: {
      type: Object as PropType<Experience>,
      required: true,
    },
    labels: {
      type: Array as PropType<Label[]>,
      required: true,
    },
  },
  data() {
    return {
      experienceTitle: "" as string,
      experienceLabels: [] as string[],
    };
  },
  mounted() {
    if (this.experience) {
      this.experienceLabels = [...this.experience.labels];
      this.experienceTitle = this.experience.title;
    }
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/css/theme.scss";

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;

  .popup {
    width: 800px;
    background: white;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    box-sizing: border-box;
    padding: 40px 50px;

    .title-input {
      font-family: $f-poppins;
      font-size: 16px;
      padding: 5px 10px;
      font-weight: 500;

      border: solid 1px $c-grey-light;
      align-self: flex-start;

      width: 60%;
      margin-bottom: 30px;

      &:focus {
        outline: solid 1px $c-primary;
      }
    }

    .radio-line {
      display: flex;
      align-items: center;
      justify-content: space-between;

      margin: 0 35px;

      .radio-group {
        input {
          margin-right: 35px;
        }
      }
    }
  }

  .buttons {
    width: 100%;
    display: flex;
    justify-content: flex-end;

    margin-top: 20px;

    button {
      margin-left: 20px;
    }

    .save {
      color: $c-background;
      background: $c-primary;
    }
  }
}
</style>
