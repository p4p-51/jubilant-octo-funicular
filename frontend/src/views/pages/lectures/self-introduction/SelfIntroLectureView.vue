<template>
  <div class="lecture-container">
    <title-block
      title="What makes a good self introduction?"
      subtitle="How to introduce yourself in a hurry"
      module="Self introduction"
    >
      The aim of this module is for you to understand how the answer the age old
      question - “Tell me about yourself”. While not explicitly a behavioural
      interview questions, it’ll almost certainly be the first question you’re
      asked during an interview.
      <br />
      First, we must understand what is a elevator pitch elements of a ‘good’
      answer and how it can be structured to impress your interviewer.
      <br />
      By this end of this module, you’ll have understood the structure of how to
      answer, gone through a couple of examples and multiple choice questions,
      and lastly, written your own compelling self introduction.
    </title-block>
    <section-paragraph title="What is an elevator pitch?">
      It's a short, memorable description of what you do, your experiences, and
      … The goal is for the recruiter to understand you and your background
      beyond your CV. Recruiters may also use your answer as a segway for follow
      up questions, diving deepering into your history and what makes you tick.
    </section-paragraph>
    <section-paragraph title="What should I include?">
      It is recommended that your answer includes the following, introduction,
      your past, present, and future, while coviering a range of topics
      including relevant job experiences, hobbies, passion etc. <br /><br />Your
      introduction should include your name, education and the role you’re
      applying for. This is just to make sure that you’re speaking to the right
      person for the right role. <br /><br />“The past” section is for you to
      tell them how you got to were you are now. Here you could mention any
      previous job or internship experiences and/or why you decided to study
      your chosen degree.<br /><br />“The present” should focus on where you are
      now, are you currently studying or working, what are your hobbies and
      interests are outside of study or work, or perhaps a recent
      accomplishment. <br /><br />“The future” is about your goals and
      aspirations. How does the job help you reach that goal? <br /><br />This
      isn’t the only way to build your response, of course, and you can tweak it
      as you see fit. If there’s a particularly potent story about what brought
      you into this field, for example, you might decide to start with that
      “past” story and then get into what you’re doing in the present.<br /><br />Whatever
      order you pick, make sure you ultimately tie it to the job and company.
      You want to be absolutely certain your interviewer is left with the
      impression that it “makes sense that [you’re] sitting here talking to me
      about this role.”<br /><br />Aim for it to be between a minute or two, any
      longer and the recruit will begin to lose interest. <br /><br />You should
      practice your introduction but you don’t want to memeorise it word for
      work. Otherwise it’ll come off robotic and unnatural. Keep memorisation to
      the key points if necessary. <br />
      <br />
      Additional resources.<br />
      <a
        href="https://www.indeed.com/career-advice/interviewing/interview-question-tell-me-about-yourself"
        >https://www.indeed.com/career-advice/interviewing/interview-question-tell-me-about-yourself </a
      ><br />
      <a
        href="https://www.themuse.com/advice/tell-me-about-yourself-interview-question-answer-examples"
        >https://www.themuse.com/advice/tell-me-about-yourself-interview-question-answer-examples</a
      ><br />
      <a
        href="https://www.seek.co.nz/career-advice/article/how-to-answer-so-tell-me-about-yourself"
      >
        https://www.seek.co.nz/career-advice/article/how-to-answer-so-tell-me-about-yourself </a
      ><br />
    </section-paragraph>
    <go-button class="go-button" />
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
import GoButton from "@/components/GoButton.vue";

export default defineComponent({
  name: "SelfIntroLectureView",
  components: { TitleBlock, SectionParagraph, GoButton },
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
