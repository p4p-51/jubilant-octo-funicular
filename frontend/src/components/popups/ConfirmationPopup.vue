<template>
  <div class="modal">
    <div class="popup">
      <h3>
        {{ text }}
      </h3>
      <div class="buttons" :class="{ reverse: reverseEmphasis }">
        <button class="no">{{ noText }}</button>
        <button class="yes">{{ yesText }}</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ConfirmationPopup",
  methods: {},
  props: {
    text: {
      type: String,
      default: "Are you sure you want to perform this action?",
    },
    reverseEmphasis: {
      type: Boolean,
      default: false,
    },
    yesText: {
      type: String,
      default: "Yes",
    },
    noText: {
      type: String,
      default: "No",
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/css/theme.scss";
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;

  .popup {
    background: white;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    box-sizing: border-box;
    padding: 40px 50px;

    .buttons {
      width: 100%;
      display: flex;
      justify-content: flex-end;

      margin-top: 20px;

      button {
        margin-left: 20px;
      }

      .yes {
        color: $c-background;
        background: $c-primary;
      }

      &.reverse {
        .yes {
          color: $c-primary;
          background: $c-background;
        }

        .no {
          color: $c-background;
          background: $c-primary;
        }
      }
    }
  }
}
</style>
