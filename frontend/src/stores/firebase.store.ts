import { reactive } from "vue";
import firebase from "firebase";

export const firebaseStore = reactive({
  isLoggedIn: false,
  authToken: "" as string,
  user: null as firebase.User | null,
  async update(user: firebase.User | null) {
    if (user) {
      this.authToken = await user.getIdToken(true);
      this.isLoggedIn = true;
      this.user = user;
    } else {
      this.isLoggedIn = false;
      this.user = null;
    }
  },
  signOut() {
    firebase.auth().signOut();
    this.isLoggedIn = false;
    this.authToken = "";
  },
});
