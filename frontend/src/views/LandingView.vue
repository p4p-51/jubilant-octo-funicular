<template>
  <div class="landing-view">
    <header>
      <div class="logo">
        <img src="@/assets/logo.svg" alt="logo" />
        <p>Funicular</p>
      </div>
      <button>Sign in</button>
    </header>
    <div class="main-content landing-content">
      <div class="text-container">
        <h1>Behavioural interviews made easy.</h1>
        <div class="middle-decoration">
          <div></div>
          <p>What we do</p>
        </div>
        <p>
          Pig fatback jerky shankle sausage. Porchetta spare ribs turducken,
          tail salami cupim flank pork loin pig meatloaf brisket turkey ham hock
          swine strip steak.
        </p>
        <button>Get started</button>
      </div>
      <img src="@/assets/illustrations/landing.svg" />
    </div>
    <div class="main-content features-list">
      <div class="feature-small">f</div>
      <div class="feature-small">f</div>
      <div class="feature-small">f</div>
      <div class="feature-small">f</div>
    </div>

    <div class="main-content feature-block">
      <h3>Title</h3>
      <p>smetiing</p>
    </div>
    <div class="main-content feature-block">
      <h3>Title</h3>
      <p>smetiing</p>
    </div>
    <div class="main-content feature-block">
      <h3>Title</h3>
      <p>smetiing</p>
    </div>
    <footer>footer</footer>
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
    background: lightblue;

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
        // TODO to replace animation
        transform: scale(1.05);
      }
    }

    > button {
      background: $c-primary;
      color: $c-background;

      align-self: flex-start;
    }
  }

  .main-content {
    padding: 100px 200px;
  }

  .landing-content {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-top: 0;

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
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LandingView",
});
</script>
