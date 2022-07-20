<template>
  <div class="question-detail-view">
    <title-block title="My question bank" />
    <div class="content-container">
      <div class="questions-container">
        <div class="search-bar">
          <qb-search-bar />
        </div>
        <div class="list">
          <qb-side-bar-question
            v-for="question in questions"
            :key="question.id"
            :numResponses="question.responses.length"
            :title="question.title"
            :id="question.id"
            :isSelected="question.id === selected.id"
          />
        </div>
      </div>
      <div class="detail-container">
        <h2>{{ selected.title }}</h2>
        <div class="body-content">
          <h5>Your relevant experiences:</h5>
          <div
            class="option"
            v-for="experience in selected.experiences"
            :key="experience"
          >
            <p>{{ experience }}</p>
          </div>
          <p>I want to talk about a different experience</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/theme.scss";

.question-detail-view {
  margin: 20px 50px;
  margin-bottom: 50px;

  width: 100%;

  display: flex;
  flex-direction: column;

  .content-container {
    flex: 1;
    width: 100%;

    display: flex;

    .questions-container {
      width: 350px;
      height: 100%;

      display: flex;
      flex-direction: column;

      .search-bar {
        margin-left: 20px;
        margin-bottom: 20px;

        .qb-search-bar {
          width: 100%;
          min-width: 0;
        }
      }

      .list {
        overflow-y: scroll;

        flex: 1;
        flex-grow: 1;
        flex-basis: 0;

        display: flex;
        flex-direction: column;
        row-gap: 20px;

        padding: 10px 20px;
      }
    }

    .detail-container {
      flex: 1;

      height: 100%;

      margin-left: 80px;

      display: flex;
      flex-direction: column;
      align-items: flex-start;

      h2 {
        font-size: 20px;
        font-weight: 400;
      }

      .body-content {
        margin-top: 50px;

        display: flex;
        flex-direction: column;
        row-gap: 10px;

        align-self: flex-start;
        width: 95%;
        max-width: 800px;

        h5 {
          font-size: 14px;
          font-weight: 400;

          color: $c-black;

          margin: 0;
        }

        .option {
          border: solid 1px $c-grey-light;

          font-size: 14px;

          padding: 0 20px;

          margin-right: 15px;

          cursor: pointer;
          transition: $animation;
          &:hover {
            border: solid 1px $c-primary;
            margin-right: 0;
            margin-left: 15px;
          }
        }

        > p {
          margin: 0;
          font-size: 12px;

          align-self: flex-end;

          cursor: pointer;
          transition: $animation;
          &:hover {
            color: $c-primary;
            transform: scale(1.02);
          }
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
import { defineComponent } from "vue";

export default defineComponent({
  name: "QuestionDetailView",
  components: { TitleBlock, QbSearchBar, QbSideBarQuestion },
  data() {
    return {
      questions: [
        {
          id: "1",
          title:
            "Tell me about a time when you experienced a conflict in a team",
          label: "Conflict",
          responses: [
            {
              situationId: "faiodfjw3238ih",
              response: {
                s: "Bacon ipsum dolor amet tongue porchetta capicola biltong short ribs pork loin meatloaf salami chicken cow pork belly shankle leberkas jowl.",
                t: "Burgdoggen leberkas pastrami salami jerky flank. Fatback brisket ribeye flank doner, chislic frankfurter. ",
                a: "Mignon beef ribs rump pastrami. Drumstick brisket turkey t-bone picanha spare ribs short ribs hamburger cupim pork chop burgdoggen shank. Kevin sirloin frankfurter salami ball tip alcatra short ribs, jerky tri-tip pork loin prosciutto meatball. Turducken kevin jerky ball tip burgdoggen tail cupim spare ribs.",
                r: "Pig fatback jerky shankle sausage. Porchetta spare ribs turducken, tail salami cupim flank pork loin pig meatloaf brisket turkey ham hock swine strip steak. Sirloin chicken ground round bacon, kielbasa chuck kevin short ribs",
              },
            },
          ],
        },
        {
          id: "2",
          title:
            "Tell me about a time when you experienced a conflict in a team",
          label: "Conflict",
          responses: [],
        },
        {
          id: "3",
          title:
            "Tell me about a time when you experienced a conflict in a team",
          label: "Conflict",
          responses: [],
        },
        {
          id: "4",
          title:
            "Tell me about a time when you experienced a conflict in a team",
          label: "Conflict",
          responses: [
            {
              situationId: "faiodfjw3238ih",
              response: {
                s: "Bacon ipsum dolor amet tongue porchetta capicola biltong short ribs pork loin meatloaf salami chicken cow pork belly shankle leberkas jowl.",
                t: "Burgdoggen leberkas pastrami salami jerky flank. Fatback brisket ribeye flank doner, chislic frankfurter. ",
                a: "Mignon beef ribs rump pastrami. Drumstick brisket turkey t-bone picanha spare ribs short ribs hamburger cupim pork chop burgdoggen shank. Kevin sirloin frankfurter salami ball tip alcatra short ribs, jerky tri-tip pork loin prosciutto meatball. Turducken kevin jerky ball tip burgdoggen tail cupim spare ribs.",
                r: "Pig fatback jerky shankle sausage. Porchetta spare ribs turducken, tail salami cupim flank pork loin pig meatloaf brisket turkey ham hock swine strip steak. Sirloin chicken ground round bacon, kielbasa chuck kevin short ribs",
              },
            },
            {
              situationId: "faiodfjw3238ih",
              response: {
                s: "Bacon ipsum dolor amet tongue porchetta capicola biltong short ribs pork loin meatloaf salami chicken cow pork belly shankle leberkas jowl.",
                t: "Burgdoggen leberkas pastrami salami jerky flank. Fatback brisket ribeye flank doner, chislic frankfurter. ",
                a: "Mignon beef ribs rump pastrami. Drumstick brisket turkey t-bone picanha spare ribs short ribs hamburger cupim pork chop burgdoggen shank. Kevin sirloin frankfurter salami ball tip alcatra short ribs, jerky tri-tip pork loin prosciutto meatball. Turducken kevin jerky ball tip burgdoggen tail cupim spare ribs.",
                r: "Pig fatback jerky shankle sausage. Porchetta spare ribs turducken, tail salami cupim flank pork loin pig meatloaf brisket turkey ham hock swine strip steak. Sirloin chicken ground round bacon, kielbasa chuck kevin short ribs",
              },
            },
            {
              situationId: "faiodfjw3238ih",
              response: {
                s: "Bacon ipsum dolor amet tongue porchetta capicola biltong short ribs pork loin meatloaf salami chicken cow pork belly shankle leberkas jowl.",
                t: "Burgdoggen leberkas pastrami salami jerky flank. Fatback brisket ribeye flank doner, chislic frankfurter. ",
                a: "Mignon beef ribs rump pastrami. Drumstick brisket turkey t-bone picanha spare ribs short ribs hamburger cupim pork chop burgdoggen shank. Kevin sirloin frankfurter salami ball tip alcatra short ribs, jerky tri-tip pork loin prosciutto meatball. Turducken kevin jerky ball tip burgdoggen tail cupim spare ribs.",
                r: "Pig fatback jerky shankle sausage. Porchetta spare ribs turducken, tail salami cupim flank pork loin pig meatloaf brisket turkey ham hock swine strip steak. Sirloin chicken ground round bacon, kielbasa chuck kevin short ribs",
              },
            },
          ],
        },
        {
          id: "5",
          title:
            "Tell me about a time when you experienced a conflict in a team",
          label: "Conflict",
          responses: [],
        },
        {
          id: "6",
          title:
            "Tell me about a time when you experienced a conflict in a team",
          label: "Conflict",
          responses: [
            {
              situationId: "faiodfjw3238ih",
              response: {
                s: "Bacon ipsum dolor amet tongue porchetta capicola biltong short ribs pork loin meatloaf salami chicken cow pork belly shankle leberkas jowl.",
                t: "Burgdoggen leberkas pastrami salami jerky flank. Fatback brisket ribeye flank doner, chislic frankfurter. ",
                a: "Mignon beef ribs rump pastrami. Drumstick brisket turkey t-bone picanha spare ribs short ribs hamburger cupim pork chop burgdoggen shank. Kevin sirloin frankfurter salami ball tip alcatra short ribs, jerky tri-tip pork loin prosciutto meatball. Turducken kevin jerky ball tip burgdoggen tail cupim spare ribs.",
                r: "Pig fatback jerky shankle sausage. Porchetta spare ribs turducken, tail salami cupim flank pork loin pig meatloaf brisket turkey ham hock swine strip steak. Sirloin chicken ground round bacon, kielbasa chuck kevin short ribs",
              },
            },
            {
              situationId: "faiodfjw3238ih",
              response: {
                s: "Bacon ipsum dolor amet tongue porchetta capicola biltong short ribs pork loin meatloaf salami chicken cow pork belly shankle leberkas jowl.",
                t: "Burgdoggen leberkas pastrami salami jerky flank. Fatback brisket ribeye flank doner, chislic frankfurter. ",
                a: "Mignon beef ribs rump pastrami. Drumstick brisket turkey t-bone picanha spare ribs short ribs hamburger cupim pork chop burgdoggen shank. Kevin sirloin frankfurter salami ball tip alcatra short ribs, jerky tri-tip pork loin prosciutto meatball. Turducken kevin jerky ball tip burgdoggen tail cupim spare ribs.",
                r: "Pig fatback jerky shankle sausage. Porchetta spare ribs turducken, tail salami cupim flank pork loin pig meatloaf brisket turkey ham hock swine strip steak. Sirloin chicken ground round bacon, kielbasa chuck kevin short ribs",
              },
            },
          ],
        },
        {
          id: "7",
          title:
            "Tell me about a time when you experienced a conflict in a team",
          label: "Conflict",
          responses: [
            {
              situationId: "faiodfjw3238ih",
              response: {
                s: "Bacon ipsum dolor amet tongue porchetta capicola biltong short ribs pork loin meatloaf salami chicken cow pork belly shankle leberkas jowl.",
                t: "Burgdoggen leberkas pastrami salami jerky flank. Fatback brisket ribeye flank doner, chislic frankfurter. ",
                a: "Mignon beef ribs rump pastrami. Drumstick brisket turkey t-bone picanha spare ribs short ribs hamburger cupim pork chop burgdoggen shank. Kevin sirloin frankfurter salami ball tip alcatra short ribs, jerky tri-tip pork loin prosciutto meatball. Turducken kevin jerky ball tip burgdoggen tail cupim spare ribs.",
                r: "Pig fatback jerky shankle sausage. Porchetta spare ribs turducken, tail salami cupim flank pork loin pig meatloaf brisket turkey ham hock swine strip steak. Sirloin chicken ground round bacon, kielbasa chuck kevin short ribs",
              },
            },
          ],
        },
      ] as Question[],
      selected: {
        id: "3",
        title: "Tell me about a time when you experienced a conflict in a team",
        label: "Conflict",
        experiences: ["Experience 1", "Experience 2", "Experience 3"],
        responses: [],
      } as Question,
    };
  },
});
</script>
