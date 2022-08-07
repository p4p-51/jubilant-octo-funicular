<template>
  <div class="settings-view">
    <h1>Account</h1>
    <hr />
    <div class="account-info-container">
      <div class="info">
        <h6>Name</h6>
        <p>Displawy name</p>
      </div>
      <div class="info">
        <h6>Email</h6>
        <p>Email address</p>
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

h1 {
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 0;
}

h1 + hr {
  border: solid 1px $c-primary;
  margin: 0;
  width: 50px;
}

.account-info-container {
  border-top: solid 1px $c-grey-light;
  border-bottom: solid 1px $c-grey-light;

  padding: 34px 0;
  margin: 50px 0;
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
import { defineComponent } from "vue";

export default defineComponent({ name: "SettingsView" });
</script>
