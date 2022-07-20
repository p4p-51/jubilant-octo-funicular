<template>
  <div class="content-container">
    <div class="header"><h2>Lets get Started!</h2></div>
    <div class="experience-selector">
      <div
        v-for="question in questions"
        :key="question.id"
        :class="question.id === selectedId ? 'selected' : null"
        class="question-item"
        v-on:click="onClickEvent(question.id)"
      >
        <p>{{ question.questionText }}</p>
        <img src="@/assets/icons/arrow.svg" />
      </div>
    </div>
    <div class="box"></div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/theme.scss";

.content-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 8fr;
  grid-template-areas:
    "header header"
    "experience other";

  margin: 20px 50px 50px;
  column-gap: 50px;
}

.header {
  grid-area: header;
  background-color: #68a972;
}

.experience-selector {
  grid-area: experience;
}

.box {
  grid-area: other;
  background-color: #dddddd;
}

.question-item {
  border-bottom: solid 1px $c-grey-light;

  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    margin-left: 10px;
  }

  &.selected {
    img {
      transform: rotate(180deg);
      transform-origin: center;
      transition: 0.5s ease-in-out;
    }
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import Question from "@/types/Question.interface";

export default defineComponent({
  name: "AddAnswer",
  props: {},
  components: {},
  methods: {
    onClickEvent(questionId: string) {
      this.selectedId = questionId;
    },
  },
  data() {
    return {
      selectedId: null,
      questions: [
        {
          id: "question_id_1",
          questionText: "What is bacon",
        },
        {
          id: "question_id_2",
          questionText: "What is the best group project you've ever had",
        },
      ] as Question[],
    };
  },
});
</script>
