<template>
  <div class="collapsible-responses">
    <h5>My responses</h5>
    <div v-for="res in responses" :key="res.id">res</div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/theme.scss";
.collapsible-responses {
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

export default defineComponent({
  name: "CollapsibleResponses",
  components: {},
  data() {
    return {};
  },
  props: {
    responses: {
      type: Array as PropType<Experience[]>,
      required: true,
    },
  },
});
</script>
