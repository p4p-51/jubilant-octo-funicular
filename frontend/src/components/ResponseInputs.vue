<template>
  <div class="response-inputs">
    <h5>
      Let me tell you about: <span>{{ experience.title }}</span>
    </h5>

    <div class="inputs">
      <p class="title"><b>S</b>ituation</p>
      <textarea />
      <p class="title"><b>T</b>ask</p>
      <textarea />
      <p class="title"><b>A</b>ction</p>
      <textarea />
      <p class="title"><b>R</b>esult</p>
      <textarea />
    </div>
    <button @click="SaveAnswer">Save</button>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/theme.scss";

.response-inputs {
  margin-top: 50px;

  display: flex;
  flex-direction: column;
  row-gap: 20px;

  align-self: flex-start;
  width: 95%;
  max-width: 800px;

  h5 {
    font-size: 16px;
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
    column-gap: 30px;
    row-gap: 20px;
    align-items: center;

    transition: $animation;
    overflow: hidden;

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

      height: 60px;

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
import CompletedQuestion from "@/components/CompletedQuestion.vue";
import OtherQuestion from "@/components/OtherQuestion.vue";
import QbSearchBar from "@/components/QbSearchBar.vue";
import QbSideBarQuestion from "@/components/QbSideBarQuestion.vue";
import TitleBlock from "@/components/TitleBlock.vue";
import Question from "@/types/Question.interface";
import { defineComponent, PropType } from "vue";
import { Experience, Response } from "@/types/Question.interface";
import CollapsibleResponse from "./CollapsibleResponse.vue";

export default defineComponent({
  name: "ResponseInputs",
  components: {},
  methods: {
    SaveAnswer() {
      this.$emit("savedAnswer");
    },
  },
  data() {
    return {};
  },
  props: {
    experience: {
      type: Object as PropType<Experience>,
      required: true,
    },
  },
});
</script>
