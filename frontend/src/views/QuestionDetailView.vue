<template>
  <div class="question-detail-view">
    <title-block title="My question bank" />
    <div class="content-container">
      <div class="questions-container">
        <div class="search-bar">
          <qb-search-bar @onChange="(s) => (this.filter = s.toLowerCase())" />
        </div>
        <div class="list">
          <qb-side-bar-question
            v-for="question in filterQuestions()"
            :key="question.id"
            :numResponses="question.responses.length"
            :title="question.title"
            :id="question.id"
            :isSelected="question.id === selectedQuestionId"
            @onQuestionClick="onQuestionClick"
          />
        </div>
      </div>
      <div class="answer-column">
        <add-question-response
          v-bind="getSelectedQuestion(selectedQuestionId)"
          :key="addQuestionKey"
        />
        <!-- <button @click="goToGrad" class="go-button">
          Save and continue ->
        </button> -->
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
  }
}

.go-button {
  background-color: $c-primary;
  color: $c-background;
  margin-left: 500px;
}
</style>

<script lang="ts">
import AddQuestionResponse from "@/components/AddQuestionResponse.vue";
import CompletedQuestion from "@/components/CompletedQuestion.vue";
import OtherQuestion from "@/components/OtherQuestion.vue";
import QbSearchBar from "@/components/QbSearchBar.vue";
import QbSideBarQuestion from "@/components/QbSideBarQuestion.vue";
import TitleBlock from "@/components/TitleBlock.vue";
import Question, { Experience } from "@/types/Question.interface";
import { defineComponent } from "vue";

export default defineComponent({
  name: "QuestionDetailView",
  components: {
    TitleBlock,
    QbSearchBar,
    QbSideBarQuestion,
    AddQuestionResponse,
  },
  methods: {
    goToGrad() {
      this.$router.push("/about");
    },
    getSelectedQuestion(id: string) {
      return this.questions.find((q) => q.id == id);
    },
    onQuestionClick(id: string) {
      this.addQuestionKey++;
      this.selectedQuestionId = id;
    },
    filterQuestions() {
      if (this.filter === "") {
        return this.questions;
      } else {
        return this.questions.filter((q) => {
          return (
            q.label.toLowerCase().includes(this.filter) ||
            q.title.includes(this.filter)
          );
        });
      }
    },
  },
  data() {
    return {
      addQuestionKey: 0,
      filter: "" as string,
      questions: [
        {
          id: "1",
          title:
            "Tell me about a time when you experienced a conflict in a team",
          label: "Conflict",
          experiences: [
            {
              id: "1",
              title: "ENGGEN 115 leadership",
              labels: ["Conflict", "Teamwork"],
            },
            {
              id: "2",
              title: "Software camp for engineers",
              labels: ["Conflict", "Teamwork"],
            },
            {
              id: "3",
              title: "Summer internship 2022",
              labels: ["Conflict", "Teamwork"],
            },
          ],
          responses: [
            {
              experience: {
                id: "3",
                title: "Summer internship 2022",
                labels: ["Conflict", "Teamwork"],
              },
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
            "Tell me about a time when you experienced a conflict in a team SPECIAL",
          label: "Special",
          experiences: [
            {
              id: "1",
              title: "2ENGGEN 115 leadership",
              labels: ["Conflict", "Teamwork"],
            },
            {
              id: "2",
              title: "2Software camp for engineers",
              labels: ["Conflict", "Teamwork"],
            },
            {
              id: "3",
              title: "2Summer internship 2022",
              labels: ["Conflict", "Teamwork"],
            },
          ],
          responses: [],
        },
        {
          id: "3",
          title:
            "Tell me about a time when you experienced a conflict in a team",
          label: "Conflict",
          experiences: [
            {
              id: "1",
              title: "ENGGEN 115 leadership",
              labels: ["Conflict", "Teamwork"],
            },
            {
              id: "2",
              title: "Software camp for engineers",
              labels: ["Conflict", "Teamwork"],
            },
            {
              id: "3",
              title: "Summer internship 2022",
              labels: ["Conflict", "Teamwork"],
            },
          ],
          responses: [
            {
              experience: {
                id: "1",
                title: "ENGGEN 115 leadership",
                labels: ["Conflict", "Teamwork"],
              },
              response: {
                s: "Bacon ipsum dolor amet tongue porchetta capicola biltong short ribs pork loin meatloaf salami chicken cow pork belly shankle leberkas jowl.",
                t: "Burgdoggen leberkas pastrami salami jerky flank. Fatback brisket ribeye flank doner, chislic frankfurter. ",
                a: "Mignon beef ribs rump pastrami. Drumstick brisket turkey t-bone picanha spare ribs short ribs hamburger cupim pork chop burgdoggen shank. Kevin sirloin frankfurter salami ball tip alcatra short ribs, jerky tri-tip pork loin prosciutto meatball. Turducken kevin jerky ball tip burgdoggen tail cupim spare ribs.",
                r: "Pig fatback jerky shankle sausage. Porchetta spare ribs turducken, tail salami cupim flank pork loin pig meatloaf brisket turkey ham hock swine strip steak. Sirloin chicken ground round bacon, kielbasa chuck kevin short ribs",
              },
            },
            {
              experience: {
                id: "3",
                title: "Summer internship 2022",
                labels: ["Conflict", "Teamwork"],
              },
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
          experiences: [
            {
              id: "1",
              title: "ENGGEN 115 leadership",
              labels: ["Conflict", "Teamwork"],
            },
            {
              id: "2",
              title: "Software camp for engineers",
              labels: ["Conflict", "Teamwork"],
            },
            {
              id: "3",
              title: "Summer internship 2022",
              labels: ["Conflict", "Teamwork"],
            },
          ],
          responses: [],
        },
        {
          id: "6",
          title:
            "Tell me about a time when you experienced a conflict in a team",
          label: "Conflict",
          experiences: [
            {
              id: "1",
              title: "ENGGEN 115 leadership",
              labels: ["Conflict", "Teamwork"],
            },
            {
              id: "2",
              title: "Software camp for engineers",
              labels: ["Conflict", "Teamwork"],
            },
            {
              id: "3",
              title: "Summer internship 2022",
              labels: ["Conflict", "Teamwork"],
            },
          ],
          responses: [],
        },
        {
          id: "7",
          title:
            "Tell me about a time when you experienced a conflict in a team",
          label: "Conflict",
          experiences: [
            {
              id: "1",
              title: "ENGGEN 115 leadership",
              labels: ["Conflict", "Teamwork"],
            },
            {
              id: "2",
              title: "Software camp for engineers",
              labels: ["Conflict", "Teamwork"],
            },
            {
              id: "3",
              title: "Summer internship 2022",
              labels: ["Conflict", "Teamwork"],
            },
          ],
          responses: [],
        },
        {
          id: "8",
          title:
            "Tell me about a time when you experienced a conflict in a team",
          label: "Conflict",
          experiences: [
            {
              id: "1",
              title: "ENGGEN 115 leadership",
              labels: ["Conflict", "Teamwork"],
            },
            {
              id: "2",
              title: "Software camp for engineers",
              labels: ["Conflict", "Teamwork"],
            },
            {
              id: "3",
              title: "Summer internship 2022",
              labels: ["Conflict", "Teamwork"],
            },
          ],
          responses: [],
        },
      ] as Question[],
      selectedQuestionId: "1" as string,
    };
  },
});
</script>
