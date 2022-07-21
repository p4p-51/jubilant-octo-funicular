<template>
  <div class="collapsible-response">resp</div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/theme.scss";
.collapsible-response {
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
  name: "CollapsibleResponse",
  components: {},
  data() {
    return {};
  },
  props: {},
});
</script>
