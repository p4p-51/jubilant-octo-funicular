<template>
  <div class="lecture-container">
    <div class="content-container">
      <component
        v-for="(component, i) in this.content"
        :key="i"
        :is="component.type"
        v-bind="component.props"
      >
      </component>
    </div>
    <go-button class="go-button" />
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/theme.scss";

.content-container {
  flex: 1;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>

<script lang="ts">
import SectionParagraph from "@/components/SectionParagraph.vue";
import TitleBlock from "@/components/TitleBlock.vue";
import { defineComponent } from "vue";
import GoButton from "@/components/GoButton.vue";
import { DataExtractor, ILectureModuleId } from "@/router/routes";
import SectionExample from "@/components/SectionExample.vue";

export default defineComponent({
  name: "SelfIntroLectureView",
  components: { SectionExample, TitleBlock, SectionParagraph, GoButton },
  mounted() {
    this.moduleId = this.$route.params.moduleId as ILectureModuleId;
    this.content = DataExtractor.getModuleContent(this.moduleId)!;
  },
  data() {
    return {
      moduleId: null as ILectureModuleId | null,
      content: {},
    };
  },
});
</script>
