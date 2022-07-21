<template>
  <div class="exp-container">
    <h3>{{ question.questionText }}</h3>
    <div v-if="selectedExp === null" class="exp-selector">
      <h5>Your relevant Experiences</h5>
      <div
        v-for="exp in experiences"
        v-bind:key="exp.id"
        class="exp-element"
        @click="onExpClick(exp)"
      >
        <p>{{ exp.name }}</p>
      </div>
    </div>
    <div v-else class="answer-input">
      <p>Tell me about {{ selectedExp.name }}!</p>
      <div class="s star">
        <p>Situation:</p>
        <textarea name="s-input" />
      </div>
      <div class="t star">
        <p>Task:</p>
        <textarea rows="2" />
      </div>
      <div class="a star">
        <p>Action:</p>
        <textarea />
      </div>
      <div class="r star">
        <p>Result:</p>
        <textarea />
      </div>
      <div class="input-nav">
        <button>Back</button>
        <button>Next</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Experience from "@/types/Experience.Interface";
import { defineComponent } from "vue";
// import QuestionInterface from "@/types/Question.interface";

export default defineComponent({
  name: "ExpSelection",
  props: {
    question: {
      // type: Object,
      // require: true,
      //todo: validate this
      // validator(question: QuestionInterface) {
      //   return
      // }
    },
  },
  methods: {
    onExpClick(exp: Experience) {
      this.selectedExp = exp;
    },
  },
  data() {
    return {
      selectedExp: null as unknown as Experience,
      experiences: [
        {
          id: "exp_id_1",
          name: "enggen115",
          labels: ["leadership", "conflict"],
        },
        {
          id: "exp_id_2",
          name: "enggen204",
          labels: ["leadership", "conflict"],
        },
        {
          id: "exp_id_3",
          name: "enggen303",
          labels: ["leadership", "conflict"],
        },
        {
          id: "exp_id_4",
          name: "enggen403",
          labels: ["leadership", "conflict"],
        },
      ] as Experience[],
    };
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/css/theme.scss";

.exp-container {
  padding: 0 20px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;

  .answer-input {
    display: flex;
    flex-direction: column;
    gap: 12px;

    flex: 1;

    .input-nav {
      display: flex;
      justify-content: space-between;
      margin-top: auto;
    }
  }
}

h3 {
  margin-bottom: 15px;
  margin-top: 10px;
}

.exp-selector {
  display: flex;
  flex-direction: column;
  row-gap: 15px;

  min-height: 500px;
  overflow: hidden;
}

.exp-element {
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 40px;
  padding-left: 15px;

  border: solid 0.5px $c-grey-light;
  border-radius: 6px;

  cursor: pointer;
  transition: $animation;

  p {
    font-size: 14px;

    color: $c-black;
  }

  &:hover {
    border: solid 0.5px $c-primary;
  }
}

.star {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  p {
    width: 100px;
    margin: 0 0 0 0;
  }

  textarea {
    flex: 1;
    height: 30px;
  }
}
</style>
