<template>
  <div class="question-bank-view">
    <title-block title="My question bank" />
    <div class="content-container">
      <div class="search-bar">
        <qb-search-bar />
      </div>
      <div class="questions-container">
        <div class="question-set completed">
          <div class="title-container">
            <h2>Completed questions</h2>
          </div>
          <div class="list">list</div>
        </div>
        <div class="question-set other">
          <div class="title-container">
            <h2>Other questions</h2>
          </div>
          <div class="list">list</div>
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

    display: flex;
    flex-direction: column;

    .search-bar {
      margin-bottom: 20px;
    }

    .questions-container {
      flex: 1;

      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 120px;

      .question-set {
        display: flex;
        flex-direction: column;

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

        .list {
          flex: 1;
          background: lightyellow;
        }
      }
    }
  }
}
</style>

<script lang="ts">
import QbSearchBar from "@/components/QbSearchBar.vue";
import TitleBlock from "@/components/TitleBlock.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "QuestionBankView",
  components: { TitleBlock, QbSearchBar },
});
</script>
