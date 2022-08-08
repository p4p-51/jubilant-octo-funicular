<template>
  <div class="other-question">
    <h5>{{ title }}</h5>
    <a href="#">Write a resposne</a>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/theme.scss";

.other-question {
  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  border: solid 1px $c-grey-light;

  border-radius: 10px;

  padding: 20px 25px;

  z-index: 2;

  transition: $animation;
  cursor: pointer;
  &:hover {
    transform: scale(1.02);

    a {
      font-weight: 500;
      font-size: 14px;
    }
  }

  h5 {
    font-size: 14px;
    font-weight: 400;

    flex: 1;

    margin: 0;
  }

  > a {
    text-decoration: none;

    font-size: 14px;

    color: $c-primary;

    align-self: flex-end;

    transition: $animation;

    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ModuleBlock",
  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  components: {},
});
</script>
