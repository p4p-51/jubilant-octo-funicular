<template>
  <progress-side-bar :modules="modules"></progress-side-bar>
  <div class="diy-time-view">
    <title-block
      title="DIY Time!"
      subtitle="Now that you’ve learnt all about how to give a good self introduction, let’s write your own!"
      module="Self introduction"
    />
    <div class="content-container">
      <div class="input-container">
        <h2>My self introduction</h2>
        <textarea />
      </div>
      <div class="checklist-container">
        <h2>Self checklist</h2>
        <p>Have you done the following?</p>
        <label class="container"
          >One
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>
        <label class="container"
          >Two
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>
        <label class="container"
          >Three
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>
        <label class="container"
          >Four
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>
      </div>
    </div>

    <button class="go-button">Save and continue -></button>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/theme.scss";

.diy-time-view {
  width: 100%;
  height: 100%;

  padding: 20px 40px;

  overflow-y: scroll;

  display: flex;
  flex-direction: column;

  justify-content: space-between;
}

.content-container {
  display: flex;

  align-items: stretch;
  margin: 20px 50px;
  margin-bottom: 50px;

  flex: 1;

  column-gap: 50px;
  justify-content: space-between;

  > div {
    > h2 {
      font-size: 20px;
      font-weight: 400;
    }

    > p {
      font-size: 12px;
      color: $c-grey-dark;

      margin-top: -10px;
      margin-bottom: 25px;
    }
  }

  .input-container {
    flex: 1;

    display: flex;
    flex-direction: column;

    textarea {
      flex: 1;

      background: $c-bg-grey;

      border: none;
      box-sizing: border-box;

      overflow: none;

      &:focus {
        outline: solid 2px $c-primary;
      }
    }
  }

  .checklist-container {
    width: 400px;

    /* The container */
    .container {
      display: block;
      position: relative;
      padding-left: 35px;
      margin-bottom: 12px;
      cursor: pointer;
      font-size: 14px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }

    /* Hide the browser's default checkbox */
    .container input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }

    /* Create a custom checkbox */
    .checkmark {
      position: absolute;
      top: 0;
      left: 0;
      height: 20px;
      width: 20px;
      border: solid 1px $c-grey-light;
    }

    /* On mouse-over, add a grey background color */
    .container:hover input ~ .checkmark {
      background-color: rgba($c-primary, 0.3);
    }

    /* When the checkbox is checked, add a blue background */
    .container input:checked ~ .checkmark {
      background-color: $c-primary;
    }

    /* Create the checkmark/indicator (hidden when not checked) */
    .checkmark:after {
      content: "";
      position: absolute;
      display: none;
    }

    /* Show the checkmark when checked */
    .container input:checked ~ .checkmark:after {
      display: block;
    }

    /* Style the checkmark/indicator */
    .container .checkmark:after {
      left: 6px;
      top: 3px;
      width: 4px;
      height: 8px;
      border: solid white;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }
}

.go-button {
  background-color: $c-primary;
  color: $c-background;

  align-self: flex-end;

  margin-bottom: 70px;
}
</style>

<script lang="ts">
import ProgressSideBar from "@/components/ProgressSideBar.vue";
import TitleBlock from "@/components/TitleBlock.vue";
import ModuleStatus from "@/types/ModuleStatus.interface";
import { defineComponent } from "vue";

export default defineComponent({
  name: "DIYTimeView",
  components: { TitleBlock, ProgressSideBar },
  data() {
    return {
      modules: [
        {
          name: "Self introduction",
          id: "fjisaljio",
          status: "done",
          url: "#",
          children: [
            {
              name: "Some sort of child",
              id: "fafwqa",
              status: "done",
              url: "#",
            },
            {
              name: "Some sort of child",
              id: "fafwqa",
              status: "done",
              url: "#",
            },
          ],
        },
      ] as ModuleStatus[],
    };
  },
});
</script>
