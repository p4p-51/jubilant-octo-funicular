<template>
  <div class="landing-view">
    <header v-if="!firebaseStore.isLoggedIn">
      <div class="logo">
        <img src="@/assets/logo.svg" alt="logo" />
        <p>Funicular</p>
      </div>
      <button @click="this.$router.push('/signin')">Sign in</button>
    </header>
    <div class="main-content landing-content">
      <div class="text-container">
        <h1>Behavioural interviews made easy.</h1>
        <div class="middle-decoration">
          <!-- <div></div> -->
          <p>
            Feeling prepared = Improved confidence = Successful interview = Job
            offer
          </p>
        </div>
        <p>
          Funicular is a digitalised tool for behavioural interview practice. It
          utilises a combination of lectures and interactive content to help you
          feel confident and perform at your best in your next behavioural
          interview!
        </p>
        <div v-if="!firebaseStore.isLoggedIn">
          <button @click="this.$router.push('/register')">Get started</button>
        </div>
        <div class="progress-continue" v-else>
          <button
            v-if="routeStore.moduleId !== 'welcome'"
            @click="this.$router.push(routeStore.path())"
          >
            Continue
          </button>
          <button @click="this.$router.push('/lecture/welcome/content')">
            From the beginning
          </button>
        </div>
      </div>
      <img src="@/assets/illustrations/landing.svg" />
    </div>
    <!-- TODO Bring this back in when we have finalised content for feature set  -->
    <!-- <div class="main-content features-list">
      <div class="feature-small">f</div>
      <div class="feature-small">f</div>
      <div class="feature-small">f</div>
      <div class="feature-small">f</div>
    </div> -->

    <div class="main-content feature-block">
      <div class="text">
        <h3>What is a behaviural interview</h3>
        <p>
          Behavioural interviewing is a commonly used process in modern
          industries for selecting the best candidates to hire for a position. A
          typical example of a behavioural question might start with "Tell me
          about a time when..."
          <br />
          <br />
          Behavioural interviews focuses on your past experiences, providing you
          a platform to express your skills, background and personality. You’re
          also able to utilise this process to further understand the role and
          the company’s values to see if the job’s the right fit for you.
        </p>
      </div>
      <img src="@/assets/illustrations/person-money.svg" />
    </div>
    <div class="main-content feature-block reverse">
      <div class="text">
        <h3>Why and how to prepare for behavioural interviews?</h3>
        <p>
          Studies have shown that by practising and preparing for interviews,
          you’ll become more confident and your interview performanc increases.
          There are several techniques at your disposal to prepare, including
          but not limited to written assignments, mock interviews, or online
          videos.
          <br />
          <br />
          Reading commonly asked questions and organising experiences are highly
          effective ways to better understand your strengths and weaknesses to
          formular responses
        </p>
      </div>
      <img src="@/assets/illustrations/content-people.svg" />
    </div>
    <div class="main-content feature-block">
      <div class="text">
        <h3>What makes a ‘good’ response to behavioural interviews?</h3>
        <p>
          A good behavioural interview response must be specific, concise,
          include action, demonstrate the your role, relevant, and demonstrate
          results. The best way to achieve this is by telling a compelling
          story. Each story should have a beginning, describing what the problem
          was, a middle, describing what you did, and end, describing how the
          situation turned out. A popular framework for this is the Situation,
          Task, Action, Result (STAR) model.
          <br />
        </p>
      </div>
      <img src="@/assets/illustrations/girl-balloons.svg" />
    </div>
    <footer>P4P-51 2022</footer>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/theme.scss";

.landing-view {
  width: 100%;

  overflow-y: scroll;

  display: flex;
  flex-direction: column;

  header {
    padding: 45px 80px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {
      display: flex;
      align-items: flex-end;

      img {
        width: 40px;
        height: 40px;

        margin-right: 15px;

        transition: $animation;
      }

      p {
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 30px;

        margin: 0;
        margin-bottom: 5px;
      }

      cursor: pointer;
      transition: $animation;

      &:hover {
        img {
          transform: scale(1.1) rotate(15deg);
        }
      }
    }

    > button {
      background: $c-primary;
      color: $c-background;

      align-self: flex-start;
    }
  }

  .main-content {
    margin: 100px 200px;
  }

  .landing-content {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 0;

    .text-container {
      display: flex;
      flex-direction: column;
      row-gap: 40px;

      h1 {
        font-weight: 700;
        font-size: 60px;
        line-height: 90px;
        display: flex;
        align-items: center;
        letter-spacing: 0.03em;

        margin: 0;
      }

      .progress-continue {
        display: flex;
        gap: 15px;
      }

      .middle-decoration {
        display: flex;
        align-items: center;
        column-gap: 15px;

        > div {
          height: 2px;
          width: 80px;

          background: $c-black;
        }

        p {
          margin: 0;

          font-style: normal;
          font-weight: 500;
          font-size: 24px;
          line-height: 36px;
        }
      }

      > button {
        background: $c-primary;
        color: $c-background;

        align-self: flex-start;

        padding-left: 25px;
        padding-right: 25px;
      }

      > p {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        letter-spacing: -0.02em;

        margin: 0;

        width: 80%;
      }
    }

    > img {
      width: 800px;
    }
  }

  .features-list {
    background: $c-bg-grey;

    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 240px;
  }

  .feature-block {
    $image-margin: 100px;

    margin-top: 0;
    margin-bottom: 0;
    border-top: solid 1px $c-grey-light;

    padding: 100px 0;

    display: flex;
    align-items: center;

    > img {
      width: 500px;
      margin-left: $image-margin;
    }

    > div {
      display: flex;
      flex-direction: column;
      row-gap: 50px;
    }

    &.reverse {
      flex-direction: row-reverse;

      > img {
        margin-right: $image-margin;
      }
    }
  }

  footer {
    background: $c-bg-grey;
    padding: 30px;

    font-size: 12px;
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import { firebaseStore } from "@/stores/firebase.store";
import router from "@/router";
import { routeStore } from "@/stores/route.store";
import { getUser } from "@/apis/api";

export default defineComponent({
  name: "LandingView",
  data() {
    return {
      firebaseStore,
      routeStore,
    };
  },
  async mounted() {
    if (!firebaseStore.isLoggedIn) {
      return;
    }

    if (routeStore.moduleId == null) {
      const [error, data] = await getUser();

      if (error) {
        alert("This error should not occur, please refresh your page");
        return;
      }
      routeStore.update(data["progress"]);
    }
  },
});
</script>
