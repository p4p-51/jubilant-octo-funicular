<template>
  <div class="lecture-container">
    <title-block
      title="How to structure a good response?"
      subtitle="How to introduce yourself in a hurry"
      module="Self introduction"
    >
      A good behavioural interview response must be specific, concise, include
      action, demonstrate the your role, relevant, and demonstrate results. The
      STAR (Situation, task, action, and result) model is an easy and initiative
      strategy for structuring stories in response to interview questions.
    </title-block>
    <section-paragraph title="STAR Technique">
      S - The goal here is to set the stage and give context to the situation.
      The example you should be specific and concise. Enough details should be
      provided so the recruiter can paint a picture of the situation.
      <br /><br />T - Here you should focus on highlighting your
      responsibilities or roles in the situation. What were the goals and
      objectives you set out to do? <br /><br />A - Describe and explains the
      actions you took to handle the situation and overcome the tasks at hand.
      This is your opportunity to showcase specific step you took, dig deep to
      make sure you provide enough information about exactly what you did. Be
      careful that you don’t describe what the team or group did when talking
      about a project, but what you actually did. Use the word “I,” not “we”
      when describing actions.<br /><br />The part is crucial for the overall
      success of you response, try identify and discuss a few impactful actions
      you took throughout the situation<br /><br />R - Discuss the outcomes of
      the actions you took and how you made a difference. Did you complete your
      tasks and achieve your goals, if not, what did you learn in the process
      and what will you do differently? Take credit for your actions and try to
      quantify the result with numbers if possible. <br /><br />
    </section-paragraph>
    <section-paragraph title="Common questions and examples">
      <ul>
        <li>Tell me about a time when…</li>
        <li>What do you do when…</li>
        <li>Have you ever…</li>
        <li>Give me an example of…</li>
        <li>Describe a situation…</li>
      </ul>
    </section-paragraph>
    <button class="go-button">Gotcha! -></button>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/theme.scss";
</style>

<script lang="ts">
import SectionParagraph from "@/components/SectionParagraph.vue";
import TitleBlock from "@/components/TitleBlock.vue";
import ModuleStatus from "@/types/ModuleStatus.interface";
import { defineComponent } from "vue";

export default defineComponent({
  name: "StructuringResponsesLectureView",
  components: { TitleBlock, SectionParagraph },
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
