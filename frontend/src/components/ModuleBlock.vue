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
@import "@/assets/css/theme.scss";

.module-block {
  display: flex;

  .number {
    font-size: 36px;
    font-weight: bold;

    color: $c-primary;
  }

  .description {
    margin: 0 25px;

    h5 {
      font-size: 16px;
      font-weight: 400;

      color: $c-black;

      margin: 0;
    }

    p {
      font-size: 14px;
      font-weight: 400;

      color: $c-grey-dark;
    }
  }

  img {
    width: 110px;
    height: 110px;
  }
}
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
