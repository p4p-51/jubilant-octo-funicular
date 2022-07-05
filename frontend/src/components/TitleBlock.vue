<template>
  <div class="title-block">
    <h2>{{ module }} ></h2>
    <h1>{{ title }}</h1>
    <h3>{{ subtitle }}</h3>

    <p><slot /></p>
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

  h1 {
    font-size: 36px;
    font-weight: 400;

    color: $c-black;

    margin: 0;
  }

  h3 {
    font-size: 16px;
    font-weight: 400;

    color: $c-grey-dark;

    margin: 0;
  }

  p {
    margin-top: 40px;
    font-size: 14px;

    margin-left: $m-p-indent;
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
  },
});
</script>
