<template>
  <div class="module-select">
    <p>{{ name }}</p>
    <button :class="{ isSelected: isSelected }">
      <img src="@/assets/icons/check.svg" />
    </button>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/css/theme.scss";

.module-select {
  height: 40px;

  display: flex;
  border: solid 0.5px $c-grey-light;

  justify-content: space-between;
  align-items: center;

  box-sizing: border-box;
  padding: 0 15px;

  border-radius: 6px;

  margin-right: 25px;

  cursor: pointer;
  transition: $animation;

  &:hover {
    border: solid 0.5px $c-primary;
  }

  p {
    font-size: 14px;

    color: $c-black;
  }

  button {
    border-radius: 100%;

    border: solid 1px $c-grey-dark;

    height: 20px;
    width: 20px;

    margin: 0;
    padding: 0;

    cursor: pointer;

    &.isSelected {
      background-color: $c-primary;
      border: solid 1px $c-primary;
    }
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
