<template>
  <div class="lecture-container">
    <title-block
      title="DIY Time!"
      subtitle="Now that you’ve learnt all about how to give a good self introduction, let’s write your own!"
      module="Self introduction"
    />
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/theme.scss";

.self-intro-lecture-view {
  width: 100%;
  height: 100%;

  padding: 20px 40px;

  overflow-y: scroll;

  display: flex;
  flex-direction: column;

  justify-content: space-between;
}
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
