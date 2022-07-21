<template>
  <div class="collapsible-response">
    <div class="header" @click="isOpen = !isOpen">
      <h6>heading</h6>
      <img src="@/assets/icons/chevron-left.svg" :class="{ isOpen: isOpen }" />
    </div>
    <div :class="{ hidden: !isOpen }" class="content">
      <p class="star-title"><b>S</b>ituation</p>
      <p class="star-content">{{ response.response.s }}</p>
      <p class="star-title"><b>T</b>ask</p>
      <p class="star-content">{{ response.response.t }}</p>
      <p class="star-title"><b>A</b>ction</p>
      <p class="star-content">{{ response.response.a }}</p>
      <p class="star-title"><b>R</b>esult</p>
      <p class="star-content">{{ response.response.r }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/theme.scss";
.collapsible-response {
  border: solid 1px $c-grey-light;
  box-sizing: border-box;

  .header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: 20px 25px;

    cursor: pointer;

    h6 {
      font-size: 14px;
      font-weight: 400;

      color: $c-secondary;

      margin: 0;
    }

    img {
      transition: $animation;

      &.isOpen {
        transform: rotate(-90deg);
      }
    }
  }

  .content {
    padding: 0 40px;
    padding-bottom: 30px;

    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 30px;
    row-gap: 20px;
    align-items: center;

    transition: $animation;
    overflow: hidden;

    &.hidden {
      visibility: hidden;
      height: 0;
      padding-top: 0;
      padding-bottom: 0;
    }

    .star-title {
      font-size: 14px;
      font-weight: 400;

      margin: 0;
    }

    .star-content {
      font-size: 12px;

      margin: 0;
    }
  }
}
</style>

<script lang="ts">
import CompletedQuestion from "@/components/CompletedQuestion.vue";
import OtherQuestion from "@/components/OtherQuestion.vue";
import QbSearchBar from "@/components/QbSearchBar.vue";
import QbSideBarQuestion from "@/components/QbSideBarQuestion.vue";
import TitleBlock from "@/components/TitleBlock.vue";
import Question from "@/types/Question.interface";
import { defineComponent, PropType } from "vue";
import { Experience, Response } from "@/types/Question.interface";

export default defineComponent({
  name: "CollapsibleResponse",
  components: {},
  data() {
    return {
      isOpen: false,
    };
  },
  props: {
    response: {
      type: Object as PropType<Response>,
      required: true,
    },
  },
});
</script>
