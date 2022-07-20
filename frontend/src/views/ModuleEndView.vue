<template>
  <div class="module-end-view">
    <div class="header">
      <h1>Yay! You did it! 🎉</h1>
      <h3>Finished module: <span>Module name</span></h3>
    </div>
    <div class="content">
      <div class="progress">
        <ModuleItem name="Finding the right examples" moduleType="past" />
        <ModuleItem name="Listening for the correct cues" moduleType="past" />
        <ModuleItem name="Structuring responses" moduleType="current" />
        <ModuleItem name="Bacon ipsum dolor amet" moduleType="next" />
        <ModuleItem
          name="Porchetta capicola ham, brisket jerky"
          moduleType="future"
        />
        <ModuleItem name="Frankfurter pig ham hock" moduleType="future" />
        <ModuleItem
          name="Bacon venison tenderloin salami"
          moduleType="future"
        />
      </div>
      <div class="survey">
        <h3>How helpful did you find this module?</h3>
        <p>
          Something something give feedback so it can help us improve the
          learning material for you
        </p>
        <div class="stars">
          <img src="@/assets/icons/stars/star-outline.svg" />
          <img src="@/assets/icons/stars/star-outline.svg" />
          <img src="@/assets/icons/stars/star-outline.svg" />
          <img src="@/assets/icons/stars/star-outline.svg" />
          <img src="@/assets/icons/stars/star-outline.svg" />
        </div>
        <h4>Any other feedback? (Optional)</h4>
        <textarea />
      </div>
    </div>
    <div class="footer">
      <p>Up Next: <span>Next Module Name</span></p>
      <button>Next lesson -></button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/theme.scss";

.module-end-view {
  padding: 20px 40px;

  overflow-y: scroll;
  width: 100%;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 36px;
    font-weight: 400;

    margin-bottom: 15px;
  }

  h1 + h3 {
    font-size: 16px;
    font-weight: 400;

    color: $c-grey-dark;

    margin: 0;

    > span {
      color: $c-secondary;
    }
  }
}

.content {
  flex: 1;

  display: flex;
  align-items: center;

  .progress {
    width: 50%;

    border-right: solid 1px $c-grey-light;

    display: flex;
    flex-direction: column;

    align-items: center;

    row-gap: 20px;
  }

  .survey {
    width: 50%;

    box-sizing: border-box;
    padding: 30px;

    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
      font-size: 20px;
      font-weight: 400;

      color: $c-black;
    }

    > p {
      font-size: 14px;
      font-weight: 400;

      color: $c-grey-dark;

      width: 380px;

      margin: 0;
    }

    .stars {
      display: flex;

      height: 180px;

      align-items: center;
      column-gap: 5px;

      > img {
        height: 36px;
        width: 36px;

        cursor: pointer;
      }
    }

    > h4 {
      font-size: 16px;
      font-weight: 400;

      color: $c-black;

      margin: 10px;
    }

    > textarea {
      width: 380px;
      height: 50px;
      max-width: 90%;

      border: solid 1px $c-grey-light;
      border-radius: 6px;

      padding: 10px;

      font-size: 14px;
      font-weight: 400;

      color: $c-grey-dark;

      &:focus {
        outline: solid 2px $c-primary;
      }
    }
  }
}

.footer {
  align-self: flex-end;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  margin-bottom: 60px;

  p {
    font-size: 16px;
    font-weight: 400;

    color: $c-grey-dark;

    > span {
      color: $c-secondary;
    }
  }

  button {
    background-color: $c-primary;

    color: $c-background;
  }
}
</style>

<script lang="ts">
import ModuleItem from "@/components/ModuleItem.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ModuleEndView",
  components: { ModuleItem },
});
</script>
