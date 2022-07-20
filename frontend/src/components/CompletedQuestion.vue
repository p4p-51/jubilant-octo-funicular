<template>
  <div class="completed-question">
    <div class="title-container">
      <h5>{{ title }}</h5>
      <p>
        {{ responses.length }} answer{{ responses.length === 1 ? "" : "s" }}
      </p>
    </div>
    <p>
      {{ Object.values(responses[0].response).join(" ") }}
    </p>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/theme.scss";

.completed-question {
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
  }

  .title-container {
    display: flex;
    align-items: flex-start;

    column-gap: 20px;

    h5 {
      font-size: 14px;
      font-weight: 400;

      flex: 1;

      margin: 0;
    }

    p {
      font-size: 12px;
      font-weight: 400;

      margin: 0;

      color: $c-secondary;
    }
  }

  > p {
    font-size: 12px;

    color: $c-grey-dark;

    margin: 0;

    margin-top: 5px;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  > a {
    text-decoration: none;

    font-size: 12px;

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
import { defineComponent, PropType } from "vue";
export default defineComponent({
  name: "ModuleBlock",
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    responses: {
      type: Array as PropType<Response[]>,
      required: true,
    },
  },
  components: {},
});
</script>
