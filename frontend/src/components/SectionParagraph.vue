<template>
  <div class="section-paragraph">
    <SectionTitle title="Section title here" />

    <p>
      <slot />
    </p>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/css/theme.scss";

p {
  font-size: 14px;

  margin-top: 20px;
  margin-left: $m-p-indent;
}
</style>

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
