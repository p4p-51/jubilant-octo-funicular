<template>
  <div class="question-bank-view">
    <title-block title="My question bank" />
    <div class="content-container">
      <div class="search-bar">searc bar</div>
      <div class="questions-container">
        <div class="question-set completed">
          <div class="title-container">
            <h2>Completed questions</h2>
          </div>
        </div>
        <div class="question-set other">
          <div class="title-container">
            <h2>Other questions</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/theme.scss";

.question-bank-view {
  margin: 20px 50px;
  margin-bottom: 50px;

  width: 100%;

  display: flex;
  flex-direction: column;

  .content-container {
    flex: 1;
    width: 100%;
    background: lightblue;

    display: flex;
    flex-direction: column;

    .search-bar {
      background: lightpink;
    }

    .questions-container {
      flex: 1;

      background: lightcoral;

      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 150px;

      .question-set {
        background: lightblue;

        .title-container {
          display: flex;
          justify-content: space-between;

          column-gap: 50px;

          h2 {
            font-weight: 400;
            font-size: 20px;

            flex: 1;
          }
        }
      }
    }
  }
}
</style>

<script lang="ts">
import TitleBlock from "@/components/TitleBlock.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "QuestionBankView",
  components: { TitleBlock },
});
</script>
