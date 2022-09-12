import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import firebaseConfig from "@/firebase/firebaseConfig";
import firebase from "firebase";

firebase.initializeApp(firebaseConfig);
createApp(App).use(router).mount("#app");
