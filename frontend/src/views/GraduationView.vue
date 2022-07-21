<template>
  <div class="graduation-view">
    <div class="header">
      <h1>Yay! You've graduate 🎉</h1>
    </div>
    <div class="content">
      <div class="progress">
        <section-title>What you've learnt</section-title>

        <div class="modules">
          <ModuleItem name="Finding the right examples" moduleType="" />
          <ModuleItem name="Listening for the correct cues" moduleType="" />
          <ModuleItem name="Listening for the correct cues" moduleType="" />
          <ModuleItem name="Listening for the correct cues" moduleType="" />
          <ModuleItem name="Listening for the correct cues" moduleType="" />
          <ModuleItem name="Listening for the correct cues" moduleType="" />
        </div>
      </div>
      <div class="achievements">
        <section-title>Your achievements</section-title>
      </div>
    </div>
    <div class="footer">
      <section-title>Further practice</section-title>
      <p>Up Next: <span>Next Module Name</span></p>
      <button>Next lesson -></button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/theme.scss";

.graduation-view {
  padding: 20px 40px;

  overflow-y: scroll;
  width: 100%;

  display: flex;
  flex-direction: column;

  justify-content: space-between;

  h1 {
    font-size: 36px;
    font-weight: 400;

    margin-bottom: 15px;
  }

  h1 + h3 {
    font-size: 16px;
    font-weight: 400;

    color: $c-grey-dark;

    margin: 0;

    > span {
      color: $c-secondary;
    }
  }
}

.content {
  display: flex;
  width: 100%;

  flex: 1;

  > div {
    width: 45%;
  }

  .progress {
    .modules {
      display: flex;
      flex-direction: column;
      row-gap: 20px;

      > div {
        border: solid 1px $c-primary;
        background: rgba($c-primary, 0.1);
      }
    }
  }
}
</style>

<script lang="ts">
import ModuleItem from "@/components/ModuleItem.vue";
import SectionTitle from "@/components/SectionTitle.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "GraduationView",
  components: { ModuleItem, SectionTitle },
  data() {
    return {
      accuracy: {
        before: 20,
        after: 80,
      },
      numExperience: 8,
      responses: 16,
      hasSelfIntro: true,
    };
  },
});
</script>

SectionTitle
