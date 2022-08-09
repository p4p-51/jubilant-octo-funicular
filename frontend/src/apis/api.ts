import axios from "axios";
import firebase from "firebase";
import { Answer, Experience } from "@/types/Question.interface";

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

const getQuestionAnswer = async (questionid: number) => {
  const { data } = await axiosClient.get(`/questions/${questionid}/answers`);
  return data;
};

const submitAnswer = async (questionId: number, answer: Answer) => {
  const { data } = await axiosClient.post(`/questions/${questionId}/answers`, answer);
  return data;
};

const getLabels = async () => {
  const { data } = await axiosClient.get(`/labels`);
  return data;
};

const putExperience = async (experience: Experience) => {
  const { data } = await axiosClient.put("/experiences", experience);
  return data;
};

const updateExperience = async (experienceId: number, experience: { name?: string, labels?: string[]}) => {
  const { data } = await axiosClient.post(`/experiences/${experienceId}/`, experience);
  return data;
};

const getExperiences = async () => {
  const { data } = await axiosClient.get(`/experiences`);
  return data;
};

const getSelfInto = async() => {

}


export {
  registerUser,
  getQuestions,
  getQuestionAnswer,
  submitAnswer,
  getLabels,
  putExperience,
  updateExperience,
  getExperiences,
};
