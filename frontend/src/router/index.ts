import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/lecture/end",
    name: "module-end",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "module-end" */ "../views/ModuleEndView.vue"),
  },
  {
    path: "/lecture",
    name: "lecture",
    component: () =>
      import(/* webpackChunkName: "lecture" */ "../views/LectureView.vue"),
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
    path: "/plan/create",
    name: "create your study plan",
    component: () =>
      import(
        /* webpackChunkName: "study-plan" */ "../views/CreatePlanView.vue"
      ),
  },
  {
    path: "/diy", // TODO: to refactor into module routes
    name: "diy",
    component: () =>
      import(
        /* webpackChunkName: "diy" */ "../views/pages/lectures/self-introduction/DIYTimeView.vue"
      ),
  },
  {
    path: "/questions",
    name: "question bank",
    component: () =>
      import(
        /* webpackChunkName: "question-bank" */ "../views/QuestionBankView.vue"
      ),
  },
  {
    path: "/add",
    name: "Add answer",
    component: () =>
      import(/* webpackChunkName: "add" */ "../views/AddAnswerView.vue"),
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
  {
    path: "/lecture/build-profile",
    name: "build profile",
    component: () =>
      import(
        /* webpackChunkName: "build-profile" */ "../views/BuildProfileView.vue"
      ),
  },
  {
    path: "/lecture/quiz",
    name: "quiz",
    component: () =>
      import(/* webpackChunkName: "quiz" */ "../views/QuizView.vue"),
  },
  {
    path: "/signin",
    name: "signin",
    component: () =>
      import(/* webpackChunkName: "signin" */ "../views/SignInView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
