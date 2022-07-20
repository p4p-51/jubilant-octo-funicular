<template>
  <h2><slot /></h2>
  <div class="underline"></div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/theme.scss";

h2 {
  font-size: 20px;
  font-weight: 400;

  margin-bottom: 5px;
  margin-top: 40px;
}

.underline {
  width: 70px;
  height: 3px;

  background-color: $c-primary;

  margin-bottom: 25px;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "SectionTitle",
});
</script>
