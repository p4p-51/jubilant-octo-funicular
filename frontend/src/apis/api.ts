import axios, { AxiosError, AxiosRequestConfig } from "axios";
import firebase from "firebase";
import { Answer, Experience } from "@/types/Question.interface";
import { SelfIntro } from "@/types/User.interface";
import { routeStore } from "@/stores/route.store";
import { firebaseStore } from "@/stores/firebase.store";

const axiosClient = axios.create({
  baseURL: "http://localhost:9002",
});

type errorResponse = { code: number; message: string };
// type ApiResponse<T> = [null, T] | [errorResponse];
type ApiResponse<T> = [null, T] | [AxiosError];

const axiosCall = async <T>(
  config: AxiosRequestConfig,
): Promise<ApiResponse<T>> => {
  const authConfig: AxiosRequestConfig = {
    ...config,
    headers: { "Authorization": "bearer " + firebaseStore.authToken },
  };
  try {
    const { data } = await axiosClient.request(authConfig);
    return [null, data];
  } catch (error) {
    // Yea... I dont know what the fuck is going on here
    // const errorResponse: errorResponse = (error as any)["response"]["data"];
    if (error instanceof AxiosError) {
      return [error as AxiosError];
    }
    throw "Um....";
  }
};

const registerUser = async (): Promise<ApiResponse<any>> => {
  return await axiosCall({ method: "post", url: "/users/register" });
};

const getQuestions = async (): Promise<ApiResponse<any>> => {
  return await axiosCall({ method: "get", url: "/questions" });
};

const getQuestionAnswer = async (
  questionId: number,
): Promise<ApiResponse<any>> => {
  return await axiosCall({
    method: "get",
    url: `/questions/${questionId}/answers`,
  });
};

const submitAnswer = async (
  questionId: number,
  answer: Answer,
): Promise<ApiResponse<any>> => {
  return await axiosCall({
    method: "post",
    url: `/questions/${questionId}/answers`,
    data: answer,
  });
};

const deleteAnswer = async (
  questionId: number,
  experienceId: number,
): Promise<ApiResponse<any>> => {
  return await axiosCall({
    method: "delete",
    url: `/questions/${questionId}/answers`,
    data: { experienceId },
  });
};

const getLabels = async (): Promise<ApiResponse<any>> => {
  return await axiosCall({ method: "get", url: "/labels" });
};

const putExperience = async (
  experience: Experience,
): Promise<ApiResponse<any>> => {
  return await axiosCall({
    method: "put",
    url: "/experiences",
    data: experience,
  });
};

const updateExperience = async (
  experienceId: number,
  experience: { name?: string; labels?: string[] },
): Promise<ApiResponse<any>> => {
  return await axiosCall({
    method: "post",
    url: `/experiences/${experienceId}`,
    data: experience,
  });
};

const getExperiences = async (): Promise<ApiResponse<any>> => {
  return await axiosCall({ method: "get", url: "/experiences" });
};

const deleteExperience = async (
  experienceId: number,
): Promise<ApiResponse<any>> => {
  return await axiosCall({
    method: "delete",
    url: `/experiences/${experienceId}`,
  });
};

const getSelfInto = async (): Promise<ApiResponse<any>> => {
  return await axiosCall({ method: "get", url: "/users/me/self-intro" });
};

const submitSelfIntro = async (intro: SelfIntro): Promise<ApiResponse<any>> => {
  return await axiosCall({
    method: "post",
    url: "/users/me/self-intro",
    data: intro,
  });
};

const trackProgress = async (
  moduleId: string,
  stage: number,
): Promise<ApiResponse<any>> => {
  return await axiosCall({
    method: "post",
    url: "/users/me/complete",
    data: { moduleId, stage },
  });
};

const getUser = async (): Promise<ApiResponse<any>> => {
  return await axiosCall({ method: "get", url: "/users/me" });
};

export {
  registerUser,
  getQuestions,
  getQuestionAnswer,
  submitAnswer,
  deleteAnswer,
  getLabels,
  putExperience,
  updateExperience,
  getExperiences,
  deleteExperience,
  getSelfInto,
  submitSelfIntro,
  trackProgress,
  getUser,
};
