<template>
  <loading v-model:active="isLoading.loading" />

  <div class="register-view">
    <div class="content-container">
      <img
        src="@/assets/logo.svg"
        alt="logo"
        @click="this.$router.push('/landing')"
      />
      <h1>Create an Account</h1>
      <input
        type="text"
        placeholder="Email"
        v-model="email"
        @keyup.enter="register"
      />
      <input
        type="password"
        placeholder="Password"
        v-model="password"
        @keyup.enter="register"
      />
      <button @click="register">Register</button>
      <p class="redirect">
        Already have an account?
        <a>
          <router-link to="/signin">Sign in</router-link>
        </a>
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

      cursor: pointer;
      transition: $animation;

      &:hover {
        transform: scale(1.1) rotate(15deg);
      }
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

<script setup>
import { ref, reactive } from "vue";
import firebase from "firebase";
import { useRouter } from "vue-router"; // import router
import { registerUser } from "../apis/api";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

const isLoading = reactive({ loading: true });

const email = ref("");
const password = ref("");
const router = useRouter(); // get a reference to our vue router
const register = async () => {
  isLoading.loading = true;
  console.log("registering", email, password);
  try {
    const user = await firebase
      .auth()
      .createUserWithEmailAndPassword(email.value, password.value); // need .value because ref()
    const [error, data] = await registerUser();
    if (error) {
      throw "Cannot register user";
    }
    await router.push("/"); // redirect to home
  } catch (error) {
    // TODO: don't route them to home page
    console.log(error.code);
    alert(error.message);
  }
  isLoading.loading = false;
};
</script>
