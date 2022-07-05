<template>
  <div :class="container"></div>
</template>
<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "QuizOption",
  props: {
    optionNumber: Number,
    description: String,
  },
});
</script>

<style scoped>
.container {
  display: flex;
}
</style>
