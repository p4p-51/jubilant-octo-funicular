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
      <div class="text">
        <h3>Pork loin short loin pastrami short ribs frankfurter</h3>
        <p>
          Ribeye shoulder spare ribs pig. Filet mignon kielbasa pig, frankfurter
          swine meatball tri-tip. Tri-tip meatball shank filet mignon,
          burgdoggen pork chop chislic pastrami porchetta ball tip sirloin
          shankle pancetta venison spare ribs. Ball tip tri-tip tongue turkey,
          ham fatback tenderloin pastrami jerky sausage brisket beef bresaola
          pig frankfurter. Pork frankfurter jerky shoulder leberkas hamburger.
          Bresaola ribeye tail kielbasa corned beef pastrami shankle cow chuck
          pancetta flank tenderloin swine. Andouille venison porchetta, jowl
          chislic pork loin filet mignon short ribs rump sausage kielbasa ground
          round alcatra shank.
        </p>
      </div>
      <img src="@/assets/illustrations/person-money.svg" />
    </div>
    <div class="main-content feature-block reverse">
      <div class="text">
        <h3>Ribeye shoulder spare ribs pig</h3>
        <p>
          Andouille chislic turkey doner, beef ribs ground round porchetta
          t-bone pancetta drumstick rump kielbasa. Doner cupim flank tenderloin
          short loin bacon shankle. Prosciutto drumstick leberkas flank,
          frankfurter corned beef shoulder sausage filet mignon beef ribs rump
          pastrami. Drumstick brisket turkey t-bone picanha spare ribs short
          ribs hamburger cupim pork chop burgdoggen shank. Kevin sirloin
          frankfurter salami ball tip alcatra short ribs, jerky tri-tip pork
          loin prosciutto meatball. Turducken kevin jerky ball tip burgdoggen
          tail cupim spare ribs. T-bone doner shank cupim.
        </p>
      </div>
      <img src="@/assets/illustrations/content-people.svg" />
    </div>
    <div class="main-content feature-block">
      <div class="text">
        <h3>Tail brisket shoulder shankle chicken buffalo</h3>
        <p>
          Pig fatback jerky shankle sausage. Porchetta spare ribs turducken,
          tail salami cupim flank pork loin pig meatloaf brisket turkey ham hock
          swine strip steak. Sirloin chicken ground round bacon, kielbasa chuck
          kevin short ribs. Short loin chuck salami pork chop fatback. Pork loin
          short loin pastrami short ribs frankfurter salami strip steak brisket
          leberkas sirloin shoulder boudin pig. Pig fatback jerky shankle
          sausage. Porchetta spare ribs turducken, tail salami cupim flank pork
          loin pig meatloaf brisket turkey ham hock swine strip steak. Sirloin
          chicken ground round bacon, kielbasa chuck kevin short ribs. Short
          loin chuck salami pork chop fatback. Pork loin short loin pastrami
          short ribs frankfurter salami strip steak brisket leberkas sirloin
          shoulder boudin pig.
        </p>
      </div>
      <img src="@/assets/illustrations/girl-balloons.svg" />
    </div>
    <footer>footer</footer>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/css/theme.scss";

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
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LandingView",
});
</script>
