<template>
  <div class="section-example">
    <SectionTitle> {{ title }} </SectionTitle>
    <div class="examples-container">
      <div class="example-box">
        <div class="example-text">
          <div class="quote top">"</div>
          <p>
            {{ bad.text }}
          </p>
          <div class="quote bottom">"</div>
        </div>
        <div class="description-container">
          <p class="bad">Bad</p>
          <ul>
            <li v-for="exp in bad.explanations" :key="exp">{{ exp }}</li>
          </ul>
        </div>
      </div>
      <div class="example-box">
        <div class="example-text">
          <div class="quote top">"</div>
          <p>
            {{ good.text }}
          </p>
          <div class="quote bottom">"</div>
        </div>
        <div class="description-container">
          <p class="good">Good</p>
          <ul>
            <li v-for="exp in good.explanations" :key="exp">{{ exp }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/theme.scss";

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
    justify-content: space-between;

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
    .description-container {
      display: flex;
      flex-direction: column;
      align-self: stretch;

      align-items: center;

      .good,
      .bad {
        font-size: 20px;
        font-weight: 500;
        margin-top: 10px;

        margin-bottom: 10px;
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

        color: $c-black;
      }
    }
  }
}
</style>

<script lang="ts">
import Example from "@/types/Example.interface";
import { defineComponent, PropType } from "vue";
import SectionTitle from "./SectionTitle.vue";
export default defineComponent({
  name: "SectionExample",
  components: { SectionTitle },
  props: {
    title: {
      type: String,
      required: true,
    },
    good: {
      type: Object as PropType<Example>,
      required: true,
    },
    bad: {
      type: Object as PropType<Example>,
      required: true,
    },
  },
});
</script>
