<template>
  <div class="real-home-view">
    <div class="content">
      <h1>Hi, there</h1>
      <h2>Ready to take your behavioural skills to the next level?</h2>

      <div class="continue-prompt">
        <p>Current module: <span>Welcome</span></p>
        <div class="buttons">
          <button
            v-if="routeStore.moduleId !== 'welcome'"
            @click="this.$router.push(routeStore.path())"
          >
            Continue where you left off ->
          </button>
          <img
            src="@/assets/icons/refresh.svg"
            alt="Start from the beginning"
            title="Start from the beginning"
          />
        </div>
      </div>
    </div>
    <div class="illustration-container">
      <img src="@/assets/illustrations/girl-studying.svg" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/theme.scss";

.real-home-view {
  display: flex;

  height: 100%;
  width: 100%;

  justify-content: space-between;

  .content {
    width: 55%;
    min-width: 600px;

    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: flex-start;

    padding: 0 100px;
    box-sizing: border-box;

    h1 {
      font-size: 64px;
      color: $c-black;

      margin-bottom: 20px;
    }

    h2 {
      font-size: 24px;

      font-weight: 400;
      color: $c-grey-dark;
      margin-top: 0;
    }

    .continue-prompt {
      margin-top: 60px;

      > p {
        font-size: 16px;

        > span {
          color: $c-secondary;
          font-weight: 500;

          margin-left: 5px;
        }
      }

      .buttons {
        display: flex;
        align-items: center;

        button {
          color: $c-bg-grey;

          background: $c-primary;
        }

        img {
          margin-left: 15px;
          transform: scaleX(-1);

          cursor: pointer;
          transition: $animation;

          &:hover {
            transform: scaleX(-1) scale(1.1) rotate(20deg);
          }
        }
      }
    }
  }

  .illustration-container {
    background-color: rgba($c-primary, 0.2);

    display: flex;
    justify-content: center;

    img {
      width: 80%;
    }
  }
}

@media (max-width: 1080px) {
  .illustration-container {
    visibility: hidden;
    display: none;
  }

  .content {
    min-width: 100% !important;
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
  name: "RealHomeView",
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
