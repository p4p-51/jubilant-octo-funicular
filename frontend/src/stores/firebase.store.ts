import { reactive } from "vue";
import firebase from "firebase";

export const firebaseStore = reactive({
  isLoggedIn: false,
  authToken: "" as String,
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