import { reactive } from "vue";
import firebase from "firebase";

export const firebaseStore = reactive({
  isLoggedIn: false,
  authToken: "" as String,
  async update(user: firebase.User | null) {
    if (user) {
      this.isLoggedIn = true;
      this.authToken = await user.getIdToken(true);
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