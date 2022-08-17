<template>
  <div class="collapsible-response">
    <div class="header" @click="isOpen = !isOpen">
      <h6>{{ response.experience.name }}</h6>
      <img src="@/assets/icons/chevron-left.svg" :class="{ isOpen: isOpen }" />
    </div>
    <div :class="{ hidden: !isOpen }" class="content">
      <p class="star-title"><b>S</b>ituation</p>
      <p class="star-content">{{ response.answer.s }}</p>
      <p class="star-title"><b>T</b>ask</p>
      <p class="star-content">{{ response.answer.t }}</p>
      <p class="star-title"><b>A</b>ction</p>
      <p class="star-content">{{ response.answer.a }}</p>
      <p class="star-title"><b>R</b>esult</p>
      <p class="star-content">{{ response.answer.r }}</p>
      <div class="buttons-container">
        <button @click="this.$emit('edit')">
          <img class="edit" src="@/assets/icons/edit.svg" />
        </button>
        <button @click="promptConfirmation()">
          <img class="delete" src="@/assets/icons/delete.svg" />
        </button>
      </div>
    </div>
  </div>
  <confirmation-popup
    v-if="isConfirming"
    @yes="confirmDelete()"
    @no="cancelDelete()"
  />
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

    .buttons-container {
      grid-column: span 2;

      display: flex;
      justify-content: end;
      align-items: center;

      column-gap: 15px;

      button {
        border-radius: 100%;

        border: solid 2px $c-grey-light;

        padding: 0;

        height: 32px;
        width: 32px;

        display: flex;
        justify-content: center;
        align-items: center;

        img {
          height: 16px;
          width: 16px;
        }

        .edit {
          height: 14px;
          width: 14px;
        }
      }
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
import { Experience, Answer } from "@/types/Question.interface";
import ConfirmationPopup from "./popups/ConfirmationPopup.vue";

export default defineComponent({
  name: "CollapsibleResponse",
  components: {
    ConfirmationPopup,
  },
  data() {
    return {
      isOpen: false,
      isConfirming: false,
    };
  },
  methods: {
    promptConfirmation() {
      this.isConfirming = true;
    },
    confirmDelete() {
      this.isOpen = false;
      this.$emit("delete", this.response);
      this.isConfirming = false;
    },
    cancelDelete() {
      this.isConfirming = false;
    },
  },
  props: {
    response: {
      type: Object as PropType<Answer>,
      required: true,
    },
  },
});
</script>
