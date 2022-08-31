<template>
  <div class="graduation-view">
    <div class="header">
      <h1>Yay! You've graduate 🎉</h1>
    </div>
    <div class="content">
      <div class="progress">
        <section-title>What you've learnt</section-title>

        <div class="modules">
          <ModuleItem
            v-for="m in moduleList"
            :name="m"
            :key="m"
            moduleType=""
          />
        </div>
      </div>
      <div class="achievements">
        <section-title>Your achievements</section-title>
        <div class="items">
          <p>
            Your quiz accuracy has improved from
            <span>{{ accuracy.before }}</span
            >% to <span>{{ accuracy.after }}</span
            >%
          </p>
          <p>
            You have documented <span>{{ numExperiences }}</span> experiences
          </p>
          <p>
            You have added answers to <span>{{ numResponses }}</span> interview
            questions to your interview portfolio
          </p>
          <p v-if="hasSelfIntro">
            You have written one hella awesome self introduction
          </p>
        </div>
      </div>
    </div>
    <div class="footer">
      <section-title>Further practice</section-title>
      <p>
        Pig fatback jerky shankle sausage. Porchetta spare ribs turducken, tail
        salami cupim flank pork loin pig meatloaf brisket turkey ham hock swine
        strip steak. Sirloin chicken ground round bacon, kielbasa chuck kevin
        short ribs. Short loin chuck salami pork chop fatback. Pork loin short
        loin pastrami short ribs frankfurter salami strip steak brisket leberkas
        sirloin shoulder boudin pig.
      </p>
    </div>
    <button @click="goToGrad" class="next">Go to question bank -></button>
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

  > div {
    width: 45%;
  }

  .progress {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;

    .modules {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      flex: 1;
      row-gap: 20px;

      > div {
        border: solid 1px $c-primary;
        background: rgba($c-primary, 0.1);
        width: 70%;
      }
    }
  }

  .achievements {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;

    .items {
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex: 1;

      margin-top: 30px;

      p {
        font-size: 20px;
        color: $c-black;

        height: 90px;
        line-height: 0;

        margin: 0;

        span {
          font-size: 40px;
          color: $c-primary;
        }
      }
    }
  }
}

.footer {
  p {
    font-size: 16px;
  }
}

.next {
  align-self: flex-end;

  background: $c-primary;
  color: $c-background;
  margin-bottom: 60px;
}
</style>

<script lang="ts">
import ModuleItem from "@/components/ModuleItem.vue";
import ProgressSideBar from "@/components/ProgressSideBar.vue";
import SectionTitle from "@/components/SectionTitle.vue";
import ModuleStatus from "@/types/ModuleStatus.interface";
import { defineComponent } from "vue";
import { DataExtractor } from "@/router/routes";
import { routeStore } from "@/stores/route.store";

export default defineComponent({
  name: "GraduationView",
  components: { ModuleItem, SectionTitle, ProgressSideBar },
  computed: {
    moduleList() {
      return  DataExtractor.moduleNames()
    }
  },
  methods: {
    goToGrad() {
      this.$router.push("/questions");
    },
  },
  data() {
    return {
      accuracy: {
        before: 20,
        after: 80,
      },
      numExperiences: 8,
      numResponses: 16,
      hasSelfIntro: true,
    };
  },
});
</script>

SectionTitle
