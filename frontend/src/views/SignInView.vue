<template>
  <div class="sign-in-view">
    <div class="content-container">
      <h1>Please sign in to continue</h1>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sign-in-view {
  background: lightblue;

  box-sizing: border-box;
  padding: 20px 50px;

  width: 100%;

  display: flex;
  flex-direction: column;

  overflow-y: scroll;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SignInView",
  methods: {
    // signIn() {
    //     this.$emit("signIn");
    // },
  },
});
</script>
