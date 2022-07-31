<template>
  <div class="register-view">
    <div class="content-container">
      <img src="@/assets/logo.svg" alt="logo" />
      <h1>Create an Account</h1>
      <input type="text" placeholder="Email" v-model="email" />
      <input type="password" placeholder="Password" v-model="password" />
      <button @click="register">Submit</button>
      <p>
        Not registered yet?
        <a><router-link to="/register">Create an account</router-link></a>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/theme.scss";

.register-view {
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
      font-weight: 400;
      font-size: 20px;
      text-transform: uppercase;

      margin: 0;

      margin-bottom: 15px;
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

    > button {
      background: $c-primary;
      color: $c-background;

      height: 45px;

      margin-top: 15px;

      text-transform: uppercase;

      font-size: 16px;

      border-radius: 5px;
    }
  }
}
</style>

<script setup>
import { ref } from "vue";
import firebase from "firebase";
import { useRouter } from "vue-router"; // import router
const email = ref("");
const password = ref("");
const router = useRouter(); // get a reference to our vue router
const register = () => {
  firebase
    .auth() // get the auth api
    .createUserWithEmailAndPassword(email.value, password.value) // need .value because ref()
    .then((data) => {
      console.log("Successfully registered!");
      router.push("/"); // redirect to home
    })
    .catch((error) => {
      console.log(error.code);
      alert(error.message);
    });
};
</script>
