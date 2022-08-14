<template>
  <div class="qb-search-bar">
    <input
      placeholder="Conflicts"
      @keydown="$emit('onChange', $event.target.value)"
    /><img src="@/assets/icons/magnify.svg" />
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/theme.scss";

.qb-search-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 60%;
  min-width: 500px;

  height: 40px;

  border-bottom: solid 1px $c-grey-light;
  box-sizing: border-box;

  column-gap: 25px;

  &:focus-within {
    border-bottom: solid 2px $c-primary;
  }

  > input {
    flex: 1;

    background: none;

    border: none;

    font-size: 14px;

    font-family: $f-poppins;

    &:focus {
      outline: none;
    }
  }

  > img {
    height: 24px;
    width: 24px;
  }
}
</style>

<script lang="ts" setup></script>
