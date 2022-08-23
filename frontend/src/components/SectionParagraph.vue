<template>
  <div class="section-paragraph">
    <SectionTitle> {{ title }}</SectionTitle>
    <p v-if="this.body != null" v-html="this.body" />
    <p v-else>
      <slot />
    </p>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/theme.scss";

p {
  font-size: 14px;

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
    body: {
      type: String,
      default: null,
    },
  },
  components: {
    SectionTitle,
  },
});
</script>
