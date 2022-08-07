<template>
  <div class="lecture-container">
    <title-block
      title="What makes a good self introduction?"
      subtitle="How to introduce yourself in a hurry"
      module="Self introduction"
    />
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/theme.scss";
</style>

<script lang="ts">
import TitleBlock from "@/components/TitleBlock.vue";
import ModuleStatus from "@/types/ModuleStatus.interface";
import { defineComponent } from "vue";

export default defineComponent({
  name: "SelfIntroLectureView",
  components: { TitleBlock },
  data() {
    return {
      modules: [
        {
          name: "Self introduction",
          id: "fjisaljio",
          status: "done",
          url: "#",
          children: [
            {
              name: "Some sort of child",
              id: "fafwqa",
              status: "done",
              url: "#",
            },
            {
              name: "Some sort of child",
              id: "fafwqa",
              status: "done",
              url: "#",
            },
          ],
        },
      ] as ModuleStatus[],
    };
  },
});
</script>
