<template>
  <div class="lecture-view">
    <TitleBlock
      module="Organising past experiences"
      title="Building your interview
    profile"
      subtitle="Tell me about a time when..."
    >
      Now you’ve learnt how to introduce yourself, lets go into adding and categorizing previous experiences.
      Experiences can range from your previous team at work or university group projects.
      <br>
      <br>
      We'll use the experiences later down the line to prompt you when answering different interview questions. Be sure to
      add labels to your questions, as this will help you organise them later.
    </TitleBlock>
    <add-experiences />
    <go-button class="go-button">Save and continue</go-button>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/theme.scss";

.lecture-view {
  padding: 20px 40px;

  overflow-y: scroll;

  display: flex;
  flex-direction: column;
}

.next {
  align-self: flex-end;

  background: $c-primary;
  color: $c-background;

  margin-top: 60px;
}
</style>

<script lang="ts">
import TitleBlock from "@/components/TitleBlock.vue";
import AddExperiences from "@/components/AddExperiences.vue";
import GoButton from "@/components/GoButton.vue";
import ModuleStatus from "@/types/ModuleStatus.interface";
import { defineComponent } from "vue";

export default defineComponent({
  name: "BuildProfileView",
  components: {
    TitleBlock,
    AddExperiences,
    GoButton,
  },
  methods: {
    goToQuestions() {
      this.$router.push("/lecture/quiz");
    },
  },
});
</script>
