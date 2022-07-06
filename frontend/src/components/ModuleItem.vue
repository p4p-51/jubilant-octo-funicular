<template>
  <div
    class="module-item"
    :class="{
      past: moduleType === 'past',
      current: moduleType === 'current',
      next: moduleType === 'next',
      future: moduleType === 'future',
    }"
  >
    <p>hello</p>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/css/theme.scss";

.module-item {
  display: flex;
  flex-direction: row;
  align-items: center;

  box-sizing: border-box;
  padding: 0 20px;

  height: 40px;
  width: 500px;
  border-radius: 6px;

  p {
    font-size: 14px;
    margin: 0;
  }

  &.past {
    border: solid 1px $c-grey-light;
    background: $c-bg-grey;

    p {
      color: $c-grey-dark;
      text-decoration: line-through;
    }
  }

  &.current {
    border: solid 1px $c-primary;
    background: rgba($c-primary, 0.2);

    p {
      color: $c-primary;
      text-decoration: line-through;
    }
  }

  &.next {
    border: solid 1px $c-grey-light;

    p {
      color: $c-black;
    }
  }
}
</style>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "ModuleItem",
  props: {
    name: {
      type: String,
      required: true,
    },
    moduleType: {
      type: String as PropType<"past" | "current" | "next" | "future">,
      required: true,
    },
  },
});
</script>
