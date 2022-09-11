import { createApp } from "vue";
import App from "./App.vue";
import router, { isRouteUnguarded } from "./router";
import firebaseConfig from "@/firebase/firebaseConfig";
import firebase from "firebase";
import { firebaseStore } from "@/stores/firebase.store";

firebase.initializeApp(firebaseConfig);
createApp(App).use(router).mount("#app");

firebaseStore.isLoggingIn = true;
firebase.auth().onAuthStateChanged((user) => {
  const currentPath = router.currentRoute.value.path;

  if (user != null) {
    // if they on an unguarded page

    if (isRouteUnguarded(currentPath)) {
      router.push("/");
    }
    //redirect to "/"
  } else {
    //not signed in
    //if they on a guarded page
    if (!isRouteUnguarded(currentPath)) {
      router.push("/landing");
    }
    //redirect to "landing"
  }
  firebaseStore.isLoggingIn = false;
});
