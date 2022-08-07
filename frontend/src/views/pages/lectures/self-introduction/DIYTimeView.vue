<template>
  <div class="lecture-container">
    <title-block
      title="DIY Time!"
      subtitle="Now that you’ve learnt all about how to give a good self introduction, let’s write your own!"
      module="Self introduction"
    />
    <intro-diy />
    <button class="go-button">Save and continue -></button>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/theme.scss";

.diy-time-view {
  width: 100%;
  height: 100%;

  padding: 20px 40px;

  overflow-y: scroll;

  display: flex;
  flex-direction: column;

  justify-content: space-between;
}

.go-button {
  background-color: $c-primary;
  color: $c-background;

  align-self: flex-end;

  margin-bottom: 70px;
}
</style>

<script lang="ts">
import IntroDiy from "@/components/IntroDiy.vue";
import TitleBlock from "@/components/TitleBlock.vue";
import ModuleStatus from "@/types/ModuleStatus.interface";
import { defineComponent } from "vue";

export default defineComponent({
  name: "DIYTimeView",
  components: { TitleBlock, IntroDiy },
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
