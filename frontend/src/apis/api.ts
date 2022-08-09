import axios, { AxiosRequestConfig } from "axios";
import firebase from "firebase";
import { Answer, Experience } from "@/types/Question.interface";
import { SelfIntro } from "@/types/User.interface";

const axiosClient = axios.create({
  baseURL: "http://localhost:9002",
});

axiosClient.interceptors.request.use(async (config:AxiosRequestConfig) => {
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
  const { data } = await axiosClient.post(
    `/questions/${questionId}/answers`,
    answer,
  );
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

const updateExperience = async (
  experienceId: number,
  experience: { name?: string; labels?: string[] },
) => {
  const { data } = await axiosClient.post(
    `/experiences/${experienceId}/`,
    experience,
  );
  return data;
};

const getExperiences = async () => {
  const { data } = await axiosClient.get(`/experiences`);
  return data;
};

const deleteExperience = async (experienceId: number) => {
  const { data } = await axiosClient.delete(`/experiences/${experienceId}/`);
  return data;
};

const getSelfInto = async () => {
  const { data } = await axiosClient.get("/users/me/self-intro");
  return data;
};

const submitSelfIntro = async (intro: SelfIntro) => {
  const { data } = await axiosClient.post("/users/me/self-intro", intro);
  return data;
};

export {
  registerUser,
  getQuestions,
  getQuestionAnswer,
  submitAnswer,
  getLabels,
  putExperience,
  updateExperience,
  getExperiences,
  deleteExperience,
  getSelfInto,
  submitSelfIntro,
};
