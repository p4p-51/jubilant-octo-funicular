import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { UsefulRoutes } from "./routes";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/signin",
    name: "signin",
    component: () =>
      import(/* webpackChunkName: "signin" */ "../views/SignInView.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/RegisterView.vue"),
  },
  {
    path: "/landing",
    name: "landing",
    component: () =>
      import(/* webpackChunkName: "landing" */ "../views/LandingView.vue"),
  },
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/settings",
    name: "settings",
    component: () =>
      import(
        /* webpackChunkName: "settings" */ "../views/pages/SettingsView.vue"
        ),
  },
  {
    path: "/plan/create",
    name: "create your study plan",
    component: () =>
      import(
        /* webpackChunkName: "study-plan" */ "../views/CreatePlanView.vue"
        ),
  },
  {
    path: "/plan/done",
    name: "study-plan",
    component: () =>
      import(/* webpackChunkName: "study-plan" */ "../views/StudyPlanView.vue"),
  },
  {
    path: "/lecture/intro",
    name: "introduction to behavioural interviews",
    component: () =>
      import(
        /* webpackChunkName: "study-plan" */ "../views/LectureIntroView.vue"
        ),
  },
  {
    path: "/lecture",
    name: "lecture",
    component: () =>
      import(/* webpackChunkName: "lecture" */ "../views/LectureView.vue"),
    children: [
      {
        path: ":moduleId/quiz/:type",
        component: () =>
          import(
            "../views/QuizView.vue"
            ),
      },
      {
        path: ":moduleId/content",
        component: () =>
          import(
            "../views/pages/lectures/self-introduction/SelfIntroLectureView.vue"
            ),
      },
      {
        path: ":moduleId/feedback",
        component: () =>
          import(
            "../views/ModuleEndView.vue"
            ),
      },
      //Special lecture routes
      {
        path: UsefulRoutes.selfIntroDiyRoute(),
        component: () =>
          import (
            "../views/pages/lectures/self-introduction/DIYTimeView.vue"
            )
      },
      {
        path: UsefulRoutes.buildProfileRoute(),
        name: "build profile",
        component: () =>
          import(
            /* webpackChunkName: "build-profile" */ "../views/pages/lectures/build-profile/BuildProfileView.vue"
            ),
      },
      {
        path: UsefulRoutes.addAnswerRoute(),
        component: () =>
          import(
            /* webpackChunkName: "add" */ "../views/pages/lectures/add-answers/AddAnswerView.vue"
            ),
      },
    ],
  },
  // SEPARATOR (Above this line are tidied routes)

  {
    path: "/questions",
    name: "question bank",
    component: () =>
      import(
        /* webpackChunkName: "question-bank" */ "../views/QuestionBankView.vue"
        ),
  },
  {
    path: "/questions/:id",
    name: "question detail",
    component: () =>
      import(
        /* webpackChunkName: "question-detail" */ "../views/QuestionDetailView.vue"
        ),
  },
  {
    path: "/graduation",
    name: "graduation",
    component: () =>
      import(
        /* webpackChunkName: "graduation" */ "../views/GraduationView.vue"
        ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
