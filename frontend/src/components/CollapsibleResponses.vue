<template>
  <div class="collapsible-responses">
    <h5>My responses</h5>

    <collapsible-response
      v-for="(res, key) in answers"
      :key="key"
      :response="res"
      @edit="this.$emit('edit', res)"
      @delete="this.$emit('delete', res)"
    ></collapsible-response>
    <button class="add-response" @click="$emit('newResponse')">
      + Add a new response
    </button>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/theme.scss";

.collapsible-responses {
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  row-gap: 20px;

  align-self: flex-start;
  width: 95%;
  max-width: 800px;

  h5 {
    font-size: 14px;
    font-weight: 400;

    color: $c-black;

    margin: 0;
  }

  .add-response {
    height: 60px;
    border-radius: 0;
    border: solid 1px $c-grey-light;

    &:hover {
      border: solid 1px $c-primary;
      transform: none;
    }
  }
}
</style>

<script lang="ts">
import { Answer } from "@/types/Question.interface";
import { defineComponent, PropType } from "vue";
import CollapsibleResponse from "./CollapsibleResponse.vue";

export default defineComponent({
  name: "CollapsibleResponses",
  components: { CollapsibleResponse },
  data() {
    return {};
  },
  props: {
    answers: {
      type: Array as PropType<Answer[]>,
      required: true,
    },
  },
});
</script>
