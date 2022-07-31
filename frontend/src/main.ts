import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBv6bG6HtiEFWzt9owckwZizlm3aOUEAcw",
  authDomain: "jubilant-octo-funicular.firebaseapp.com",
  projectId: "jubilant-octo-funicular",
  storageBucket: "jubilant-octo-funicular.appspot.com",
  messagingSenderId: "254603884346",
  appId: "1:254603884346:web:dea6671ee49804d2c24203",
  measurementId: "G-G3C0RG1DB8",
};

firebase.initializeApp(firebaseConfig);
createApp(App).use(router).mount("#app");
