import { reactive } from "vue";
import firebase from "firebase";

export const firebaseStore = reactive({
  isLoggingIn: false,
  isLoggedIn: false,
  authToken: "" as string,
  async update(user: firebase.User | null) {
    if (user) {
      this.authToken = await user.getIdToken(true);
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  },
  signOut() {
    firebase.auth().signOut();
    this.isLoggedIn = false;
    this.authToken = "";
  },
});
