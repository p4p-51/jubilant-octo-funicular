import axios from "axios";
import firebase from "firebase";

const axiosClient = axios.create({
  baseURL: "http://localhost:9002",
});

axiosClient.interceptors.request.use(async (config) => {
  const token = await firebase.auth().currentUser?.getIdToken(true);
  config.headers!.Authorization = "Bearer " + token;
  return config;
});

const registerUser = async () => {
  const { data } = await axiosClient.post("/users/register");
  return data;
};

const getQuestions = async () => {
  const { data } = await axiosClient.get("/questions");
  return data;
};

export { registerUser, getQuestions };
