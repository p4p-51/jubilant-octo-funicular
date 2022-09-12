<template>
  <loading v-model:active="isLoading" />
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
            <span>{{ stats.accuracy.prelim }}</span
            >% to <span>{{ stats.accuracy.end }}</span
            >%
          </p>
          <p>
            You have documented
            <span>{{ stats.numExperiences }}</span> experiences
          </p>
          <p>
            You have added answers to
            <span>{{ stats.numQuestionsAnswered }}</span> interview questions to
            your interview portfolio
          </p>
          <p v-if="stats.hasSelfIntro">
            You have written one hella awesome self introduction
          </p>
        </div>
      </div>
    </div>
    <div class="footer">
      <section-title>Further practice</section-title>
      <p>
        If you'd like to practice further, we suggest you try out our question
        bank! <br />
        Our question bank contains a list of common and popular behaviour
        interview questions. You can search questions by topics such as
        "leadership" or "teamwork" so you can practice exactly the kind of
        questions you want <br />
        <br />

        We also highly recommend the book "Boost your Interview IQ" by Carole
        Martin, you can find it
        <a
          href="https://libgen.is/book/index.php?md5=53E540631EA64D539F4B0D7E962D7148"
          target="_blank"
          >here</a
        >
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

      row-gap: 32px;

      p {
        font-size: 20px;
        color: $c-black;

        // height: 90px;

        margin: 0;

        span {
          font-size: 40px;
          color: $c-primary;
          line-height: 0;
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
import SectionTitle from "@/components/SectionTitle.vue";
import { DataExtractor } from "@/router/routes";
import { defineComponent } from "vue";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import { graduationData } from "@/apis/api";

export default defineComponent({
  name: "GraduationView",
  components: { ModuleItem, SectionTitle, Loading },
  computed: {
    moduleList() {
      return DataExtractor.moduleNames();
    },
  },
  async mounted() {
    const [error, data] = await graduationData();
    if (error) {
      alert("Cannot get graduation data");
      this.isLoading = false;
      return;
    }
    this.stats = data;

    this.isLoading = false;
  },
  methods: {
    goToGrad() {
      this.$router.push("/questions");
    },
  },
  data() {
    return {
      stats: {
        accuracy: {
          prelim: 0,
          end: 0,
        },
        numExperiences: 0,
        numQuestionsAnswered: 0,
        hasSelfIntro: true,
      },
      isLoading: true,
    };
  },
});
</script>

SectionTitle
