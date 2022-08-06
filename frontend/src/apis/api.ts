import axios from "axios";
import firebase from "firebase";

const axiosClient = axios.create({
  baseURL: "http://localhost:9002",
});

axiosClient.interceptors.request.use(async (config) => {
  const token = await firebase.auth().currentUser?.getIdToken(true);
  alert(JSON.stringify(token));
  config.headers!.Authorization = "Bearer " + token;
  return config;
});

export default () => ({
  async registerUser() {
    return await axiosClient.post("/users/register");
  },
});
