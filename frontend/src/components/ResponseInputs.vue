<template>
  <loading v-model:active="isLoading" />
  <div class="response-inputs">
    <h5>
      Let me tell you about: <span>{{ experience.name }}</span>
    </h5>

    <div class="inputs">
      <p class="title"><b>S</b>ituation</p>
      <textarea v-model="s" />
      <p class="title"><b>T</b>ask</p>
      <textarea v-model="t" />
      <p class="title"><b>A</b>ction</p>
      <textarea v-model="a" />
      <p class="title"><b>R</b>esult</p>
      <textarea v-model="r" />
    </div>
    <button @click="SaveAnswer">{{ saveOrEdit }}</button>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/theme.scss";

.response-inputs {
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  row-gap: 20px;

  align-self: flex-start;
  width: 95%;
  max-width: 800px;

  height: 100%;

  h5 {
    font-size: 14px;
    font-weight: 400;

    color: $c-black;

    margin: 0;

    span {
      color: $c-secondary;
      margin-left: 10px;
    }
  }

  .inputs {
    padding: 5px 40px;
    padding-right: 1px;
    padding-bottom: 30px;

    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto;
    column-gap: 30px;
    row-gap: 20px;
    align-items: center;

    transition: $animation;

    &.hidden {
      visibility: hidden;
      height: 0;
      padding-top: 0;
      padding-bottom: 0;
    }

    .title {
      font-size: 14px;
      font-weight: 400;

      margin: 0;
    }

    textarea {
      font-size: 12px;
      font-family: $f-poppins;

      margin: 0;

      max-width: 100%;

      border: solid 1px $c-grey-light;

      resize: vertical;

      &:focus {
        outline: solid 1px $c-primary;
      }
    }
  }

  > button {
    align-self: flex-end;
  }
}
</style>

<script lang="ts">
import { submitAnswer } from "@/apis/api";
import { Answer, Experience } from "@/types/Question.interface";
import { defineComponent, PropType } from "vue";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

export default defineComponent({
  name: "ResponseInputs",
  components: { Loading },
  computed: {
    saveOrEdit() {
      return this.isEdit ? "Edit" : "Save";
    },
    isEdit() {
      return !!this.currentAnswer;
    },
  },
  methods: {
    async SaveAnswer() {
      this.isLoading = true;
      const answer = {
        experienceId: this.experience.experienceId!,
        answer: {
          s: this.s,
          t: this.t,
          a: this.a,
          r: this.r,
        },
      };
      const [error, data] = await submitAnswer(this.questionId, answer);
      if (error) {
        alert("cannot save answer");
      } else {
        this.$emit(
          "savedAnswer",
          {
            ...answer,
            questionId: this.questionId,
          },
          this.isEdit,
        );
      }
      this.isLoading = false;
    },
  },
  data() {
    return {
      s: "" as string,
      t: "" as string,
      a: "" as string,
      r: "" as string,
      isLoading: false,
    };
  },
  mounted() {
    if (this.currentAnswer) {
      this.s = this.currentAnswer.answer.s;
      this.t = this.currentAnswer.answer.t;
      this.a = this.currentAnswer.answer.a;
      this.r = this.currentAnswer.answer.r;
    }
  },
  props: {
    experience: {
      type: Object as PropType<Experience>,
      required: true,
    },
    questionId: {
      type: Number,
      required: true,
    },
    currentAnswer: {
      type: Object as PropType<Answer>,
      required: false,
    },
  },
});
</script>
