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
        <module-select
          v-for="(module, index) in modules"
          :name="module.name"
          :key="index"
          :isSelected="module.isSelected"
          @select="onModuleSelected(module.name)"
        />
      </div>
    </div>

    <button @click="goToPlan" class="go-button">Next</button>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/theme.scss";

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

  margin-bottom: 70px;
}
</style>

<script lang="ts">
import ModuleSelect from "@/components/ModuleSelect.vue";
import TitleBlock from "@/components/TitleBlock.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
  components: { TitleBlock, ModuleSelect },
  methods: {
    goToPlan() {
      this.$router.push("/plan/done");
    },
    onModuleSelected(module: string) {
      this.$data.modules.map((m) => {
        if (m.name === module) {
          m.isSelected = !m.isSelected;
        }
      });
    },
  },
  data() {
    return {
      modules: [
        {
          name: "Module 1",
          isSelected: false,
        },
        {
          name: "Module 2",
          isSelected: false,
        },
        {
          name: "Module 3",
          isSelected: false,
        },
        {
          name: "Module 4",
          isSelected: false,
        },
        {
          name: "Module 5",
          isSelected: false,
        },
        {
          name: "Module 6",
          isSelected: false,
        },
      ],
    };
  },
});
</script>
