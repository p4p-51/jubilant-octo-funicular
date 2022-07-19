<template>
  <div class="module-block">
    <div class="number">{{ number }}</div>
    <div class="description">
      <h5>{{ title }}</h5>
      <p>
        {{ description }}
      </p>
    </div>
    <img :src="image" />
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/css/theme.scss";
</style>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ModuleBlock",
  props: {
    number: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  components: {},
});
</script>
