<template>
  <div class="study-plan-view">
    <title-block
      title="Study Plan"
      subtitle="We’ve made a study plan tailored just for you based on your preferences! Take a minute to look through the agenda."
    />

    <div class="content-container">
      <module-block
        v-for="(module, index) in modules"
        :key="index"
        :number="index + 1"
        :title="module.title"
        :description="module.description"
        :image="module.image"
      />
    </div>

    <button @click="goToLecture" class="go-button">Let's go</button>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/theme.scss";

.study-plan-view {
  width: 100%;
  height: 100%;

  padding: 20px 40px;

  overflow-y: scroll;

  display: flex;
  flex-direction: column;

  justify-content: space-between;
}

.content-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 150px 120px;

  margin: 50px;
}

.go-button {
  background-color: $c-primary;
  color: $c-background;

  align-self: flex-end;

  margin-bottom: 70px;
}
</style>

<script lang="ts">
import ModuleBlock from "@/components/ModuleBlock.vue";
import TitleBlock from "@/components/TitleBlock.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
  components: { TitleBlock, ModuleBlock },
  methods: {
    goToLecture() {
      this.$router.push("/lecture/intro");
    },
  },
  data() {
    return {
      modules: [
        {
          number: 1,
          title: "Self introduction",
          description:
            "This is the first module. It’s a little bit more complicated than the others, but it’s a good start.",
          image: "@/assets/books.svg",
        },
        {
          number: 2,
          title: "Organising past experiences",
          description:
            "This is the second module. It’s a little bit more complicated than the others, but it’s a good start.",
          image: "@/assets/books.svg",
        },
        // {
        //   number: 3,
        //   title: "Structuring responses",
        //   description:
        //     "This is the third module. It’s a little bit more complicated than the others, but it’s a good start.",
        //   image: "@/assets/books.svg",
        // },
        {
          number: 4,
          title: "Mannerism",
          description:
            "This is the fourth module. It’s a little bit more complicated than the others, but it’s a good start.",
          image: "@/assets/books.svg",
        },
        // {
        //   number: 5,
        //   title: "Allocating situations",
        //   description:
        //     "This is the fifth module. It’s a little bit more complicated than the others, but it’s a good start.",
        //   image: "@/assets/books.svg",
        // },
        {
          number: 6,
          title: "Answering questions",
          description:
            "This is the sixth module. It’s a little bit more complicated than the others, but it’s a good start.",
          image: "@/assets/books.svg",
        },
        // {
        //   number: 7,
        //   title: "Module 7",
        //   description:
        //     "This is the seventh module. It’s a little bit more complicated than the others, but it’s a good start.",
        //   image: "@/assets/books.svg",
        // },
      ],
    };
  },
});
</script>
