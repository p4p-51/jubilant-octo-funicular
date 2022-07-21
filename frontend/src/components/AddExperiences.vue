<template>
  <div class="add-experiences">
    <h2>List down some of your past teamwork experiences</h2>
    <div class="content">
      <div class="create-experiences">
        <button class="box">+ Add a new experience</button>
        <div>somethign</div>
      </div>
      <div class="checklist">
        <h3>Your experiences</h3>
        <p v-for="c in checklist" :key="c.label">
          <span class="tick" v-if="c.isFilled">✓ </span>
          <span class="dot" v-else>• </span>{{ c.label }}
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/theme.scss";

.add-experiences {
  width: 100%;

  > h2 {
    font-size: 20px;
    font-weight: 400;

    margin-bottom: 5px;
    margin-top: 40px;
  }

  .content {
    display: flex;
    justify-content: space-between;
    column-gap: 70px;

    .add-experiences {
      flex: 1;
    }

    .create-experiences {
      flex: 2;
      display: flex;

      flex-direction: column;

      margin-top: 30px;

      .box {
        border: solid 1px $c-grey-light;
        border-radius: 0;

        max-width: 1000px;

        padding: 20px 25px;

        &:hover {
          background: rgba($c-primary, 0.1);
          border: solid 1px $c-primary;
          transform: none;
        }
      }
    }
    .checklist {
      width: 30%;
      box-sizing: border-box;

      h3 {
        font-size: 20px;
        font-weight: 400;
      }

      p {
        margin-left: 20px;

        .dot {
          color: orange;
        }

        .tick {
          color: green;
        }
      }

      p > span {
        font-weight: bold;
        margin-right: 10px;
      }
    }
  }
}
</style>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "AddExperiences",
  components: {},
  data() {
    return {
      checklist: [
        {
          label: "Conflict",
          isFilled: false,
        },
        {
          label: "Leadership",
          isFilled: false,
        },
        {
          label: "Communication",
          isFilled: false,
        },
        {
          label: "Teamwork",
          isFilled: true,
        },
        {
          label: "Collaboration",
          isFilled: false,
        },
        {
          label: "Failure",
          isFilled: false,
        },
      ],
    };
  },
  props: {},
});
</script>
