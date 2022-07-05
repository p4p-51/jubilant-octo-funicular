<template>
  <div class="section-example">
    <SectionTitle title="Example" />
    <div class="examples-container">
      <div class="example-box">
        <div class="example-text">
          <div class="quote top">"</div>
          <p>
            Pig fatback jerky shankle sausage. Porchetta spare ribs turducken,
            tail salami cupim flank pork loin pig meatloaf brisket turkey ham
            hock swine strip steak. Sirloin chicken ground round bacon, kielbasa
            chuck kevin short ribs. Short loin chuck salami pork chop fatback.
            Pork loin short loin pastrami short ribs frankfurter salami strip
            steak brisket leberkas sirloin shoulder boudin pig.
          </p>
          <div class="quote bottom">"</div>
        </div>
        <p class="good">Good</p>
        <ul>
          <li>Hello</li>
          <li>Hello</li>
          <li>Hello</li>
          <li>Hello</li>
        </ul>
      </div>
      <div class="example-box">
        <p>helo</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/css/theme.scss";

.section-example {
  display: flex;
  flex-direction: column;
}

.examples-container {
  display: flex;
  justify-content: space-around;

  margin-left: $m-p-indent;
  margin-right: $m-p-indent;

  .example-box {
    border: solid 1px $c-grey-light;

    box-sizing: border-box;
    padding: 20px;

    width: 40%;

    display: flex;
    flex-direction: column;
    align-items: center;

    .example-text {
      display: flex;

      .quote {
        font-size: 50px;
        font-style: italic;

        width: 30px;

        color: $c-grey-dark;

        &.top {
          line-height: 1.2;
        }

        &.bottom {
          align-self: flex-end;
          line-height: 0;
        }
      }

      p {
        flex: 1;

        font-size: 14px;

        color: $c-grey-dark;

        margin: 0;
        margin-top: 10px;
      }
    }

    .good,
    .bad {
      font-size: 20px;
      font-weight: 500;
      margin-top: 10px;
    }

    .good {
      color: green;
    }

    .bad {
      color: red;
    }

    ul {
      margin: 0;
      margin-bottom: 10px;

      align-self: stretch;
      text-align: left;

      font-size: 12px;
    }
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import SectionTitle from "./SectionTitle.vue";
export default defineComponent({ components: { SectionTitle } });
</script>
