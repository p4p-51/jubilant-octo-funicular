<template>
  <div class="signin-view">
    <div class="content-container">
      <img src="@/assets/logo.svg" alt="logo" />
      <h1>Login to Your Account</h1>
      <input type="text" placeholder="Email" v-model="email" />
      <input type="password" placeholder="Password" v-model="password" />
      <p v-if="errMsg" class="error">{{ errMsg }}</p>
      <button @click="signIn">Sign in</button>
      <p class="redirect">
        Not registered yet?
        <a><router-link to="/register">Create an account</router-link></a>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/theme.scss";

.signin-view {
  background: rgba($c-primary, 0.5);
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  justify-content: center;
  align-items: center;

  .content-container {
    width: 300px;

    background: $c-background;

    padding: 40px 60px;

    border-radius: 15px;

    display: flex;
    flex-direction: column;

    row-gap: 20px;

    img {
      width: 60px;
      align-self: center;
    }

    h1 {
      font-weight: 500;
      font-size: 20px;
      text-transform: uppercase;
      letter-spacing: 1px;

      margin: 0;

      margin-bottom: 15px;

      align-self: center;
    }

    input {
      padding: 15px 20px;

      border: none;
      border-radius: 5px;

      background: #e5e5e5;

      font-family: $f-poppins;

      &:focus {
        outline: none;
      }
    }

    .error {
      margin-top: 0;
      margin-bottom: -20px;

      font-size: 14px;

      color: red;
    }

    > button {
      background: $c-primary;
      color: $c-background;

      height: 45px;

      margin-top: 15px;

      text-transform: uppercase;

      font-size: 16px;

      border-radius: 5px;
    }

    .redirect {
      font-size: 14px;
      margin: 0;

      font-weight: 300;

      a {
        text-decoration: none;
        color: $c-primary;

        font-weight: 400;
      }
    }
  }
}
</style>

<script lang="ts" setup>
import { ref } from "vue";
import firebase from "firebase";
import { useRouter } from "vue-router"; // import router
import { defineComponent } from "vue";

const email = ref("");
const password = ref("");

const errMsg = ref(); // ERROR MESSAGE

const router = useRouter(); // get a reference to our vue router

const signIn = () => {
  // we also renamed this method
  firebase
    .auth()
    .signInWithEmailAndPassword(email.value, password.value) // THIS LINE CHANGED
    .then((data) => {
      console.log("Successfully logged in!");
      router.push("/feed"); // redirect to the feed
    })
    .catch((error) => {
      console.log(error.code);

      switch (error.code) {
        case "auth/invalid-email":
          errMsg.value = "Invalid email";
          break;
        case "auth/user-not-found":
          errMsg.value = "No account with that email was found";
          break;
        case "auth/wrong-password":
          errMsg.value = "Incorrect password";
          break;
        default:
          errMsg.value = "Email or password was incorrect";
          break;
      }
    });
};
</script>
