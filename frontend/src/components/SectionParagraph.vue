<template>
  <div class="section-paragraph">
    <SectionTitle title="Section title here" />

    <p>
      <slot />
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SectionTitle from "./SectionTitle.vue";
export default defineComponent({
  name: "SectionParagraph",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  components: {
    SectionTitle,
  },
});
</script>
