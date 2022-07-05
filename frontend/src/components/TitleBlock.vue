<template>
  <div class="title-block">
    <h2>{{ module }} ></h2>
    <h1>{{ title }}</h1>
    <h3>{{ subtitle }}</h3>

    <p>{{ description }}</p>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/css/theme.scss";
.title-block {
  h2 {
    font-size: 16px;
    font-weight: 400;

    color: $c-secondary;
  }
}
</style>

<script lang="ts">
import { defineComponent, PropType } from "vue";
export default defineComponent({
  name: "TitleBlock",
  components: {},
  props: {
    module: {
      type: String as PropType<string>,
    },
    title: {
      type: String as PropType<string>,
      required: true,
    },
    subtitle: {
      type: String as PropType<string>,
    },
    description: {
      type: String as PropType<string>,
    },
  },
});
</script>
