<template>
  <div class="create-plan-view">
    <title-block
      title="Your study plan"
      subtitle="Let's make a study plan, just for you!"
    />

    <div class="content-container">
      <h2>I want to learn about...</h2>
      <p>
        You can pick the topics that you want to learn about, and skip the
        sections that you already know!
      </p>

      <div class="multiselect-container">
        <module-select name="Hello" :isSelected="false" />
        <module-select name="Hello" :isSelected="false" />
        <module-select name="Selected" :isSelected="true" />
        <module-select name="Hello" :isSelected="false" />
        <module-select name="Hello" :isSelected="false" />
      </div>
    </div>

    <button class="go-button">Next</button>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/css/theme.scss";

.create-plan-view {
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
  flex-direction: column;
  flex: 1;

  width: 600px;
  max-width: 80%;

  align-self: center;

  > h2 {
    font-size: 24px;
    font-weight: 400;

    color: $c-black;

    margin-bottom: 10px;
  }

  > p {
    font-size: 14px;
    font-weight: 400;

    color: $c-grey-dark;

    margin: 10px 0;
  }

  .multiselect-container {
    flex: 1;

    overflow-y: scroll;

    margin-top: 40px;

    display: flex;
    flex-direction: column;

    row-gap: 15px;

    min-height: 200px;
  }

  margin-bottom: 50px;
}

.go-button {
  background-color: $c-primary;
  color: $c-background;

  align-self: flex-end;

  margin-bottom: 100px;
}
</style>

<script lang="ts">
import ModuleSelect from "@/components/ModuleSelect.vue";
import TitleBlock from "@/components/TitleBlock.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
  components: { TitleBlock, ModuleSelect },
  data() {
    return {
      modules: [
        {
          number: 1,
          title: "Module 1",
          description:
            "This is the first module. It’s a little bit more complicated than the others, but it’s a good start.",
          image: "https://icon-library.com/images/grey-icon/grey-icon-11.jpg",
        },
        {
          number: 2,
          title: "Module 2",
          description:
            "This is the second module. It’s a little bit more complicated than the others, but it’s a good start.",
          image: "https://icon-library.com/images/grey-icon/grey-icon-11.jpg",
        },
        {
          number: 3,
          title: "Module 3",
          description:
            "This is the third module. It’s a little bit more complicated than the others, but it’s a good start.",
          image: "https://icon-library.com/images/grey-icon/grey-icon-11.jpg",
        },
        {
          number: 4,
          title: "Module 4",
          description:
            "This is the fourth module. It’s a little bit more complicated than the others, but it’s a good start.",
          image: "https://icon-library.com/images/grey-icon/grey-icon-11.jpg",
        },
        {
          number: 5,
          title: "Module 5",
          description:
            "This is the fifth module. It’s a little bit more complicated than the others, but it’s a good start.",
          image: "https://icon-library.com/images/grey-icon/grey-icon-11.jpg",
        },
        {
          number: 6,
          title: "Module 6",
          description:
            "This is the sixth module. It’s a little bit more complicated than the others, but it’s a good start.",
          image: "https://icon-library.com/images/grey-icon/grey-icon-11.jpg",
        },
        {
          number: 7,
          title: "Module 7",
          description:
            "This is the seventh module. It’s a little bit more complicated than the others, but it’s a good start.",
          image: "https://icon-library.com/images/grey-icon/grey-icon-11.jpg",
        },
      ],
    };
  },
});
</script>
