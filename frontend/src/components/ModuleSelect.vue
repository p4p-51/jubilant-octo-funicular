<template>
  <div class="module-select">
    <p>{{ name }}</p>
    <button>hello</button>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/css/theme.scss";

.module-select {
  height: 40px;

  display: flex;

  border: solid 1px $c-grey-light;

  justify-content: space-between;
  align-items: center;

  box-sizing: border-box;
  padding: 0 15px;

  border-radius: 6px;

  margin-right: 25px;

  p {
    font-size: 14px;

    color: $c-black;
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ModuleSelect",
  props: {
    name: {
      type: String,
      required: true,
    },
    isSelected: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  components: {},
});
</script>
