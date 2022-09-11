<template>
  <div class="settings-view">
    <title-block title="Settings" />

    <div class="account-info-container">
      <div class="info">
        <h6>Name</h6>
        <p>{{ name || "Unnamed User" }}</p>
      </div>
      <div class="info">
        <h6>Email</h6>
        <p>{{ email }}</p>
      </div>
    </div>
    <button>Log out</button>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/theme.scss";
.settings-view {
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-right: 40px;

  padding: 20px 40px;
  box-sizing: border-box;

  > button {
    border: none;
    color: red;
    border: solid 1px white;

    font-weight: 600;

    &:hover {
      border: solid 1px red;
      transform: none;
    }
  }
}

.account-info-container {
  border-top: solid 1px $c-grey-light;
  border-bottom: solid 1px $c-grey-light;

  padding: 34px 0;
  margin: 50px 0;

  margin-top: 0;
  width: 700px;

  display: flex;
  flex-direction: column;
  row-gap: 30px;

  .info {
    margin-left: 10px;

    h6 {
      font-size: 14px;
      font-weight: 400;

      margin: 0;
    }

    p {
      font-size: 12px;
      color: $c-grey-dark;

      margin: 0;
      margin-top: 5px;
    }
  }
}
</style>

<script lang="ts">
import TitleBlock from "@/components/TitleBlock.vue";
import { defineComponent } from "vue";
import { firebaseStore } from "@/stores/firebase.store";

export default defineComponent({
  name: "SettingsView",
  components: {
    TitleBlock,
  },
  data() {
    return {
      email: firebaseStore.user?.email,
      name: firebaseStore.user?.displayName,
    };
  },
});
</script>
