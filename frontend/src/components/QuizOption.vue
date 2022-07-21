<template>
  <div class="quiz-option">option</div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "@vue/runtime-core";
import { QuizOption } from "@/types/QuizQuestion.interface";

export default defineComponent({
  name: "QuizOption",
  props: {
    option: {
      type: Object as PropType<QuizOption>,
      required: true,
    },
  },
});
</script>

<style scoped>
.container {
  display: flex;
}
</style>
