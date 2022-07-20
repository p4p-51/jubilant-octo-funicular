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
          <div class="list">
            <completed-question
              v-for="question in completedQuestions"
              :key="question.id"
              :title="question.title"
              :responses="question.responses"
            />
          </div>
        </div>
        <div class="question-set other">
          <div class="title-container">
            <h2>Other questions</h2>
          </div>
          <div class="list">
            <other-question
              v-for="question in otherQuestions"
              :key="question.id"
              :title="question.title"
            />
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
import CompletedQuestion from "@/components/CompletedQuestion.vue";
import OtherQuestion from "@/components/OtherQuestion.vue";
import QbSearchBar from "@/components/QbSearchBar.vue";
import TitleBlock from "@/components/TitleBlock.vue";
import Question from "@/types/Question.interface";
import { defineComponent } from "vue";

export default defineComponent({
  name: "QuestionBankView",
  components: { TitleBlock, QbSearchBar, CompletedQuestion, OtherQuestion },
  data() {
    return {
      completedQuestions: [
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
          id: "3",
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
          ],
        },
        {
          id: "5",
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
      otherQuestions: [
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
          id: "3",
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
          ],
        },
        {
          id: "5",
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
    };
  },
});
</script>
