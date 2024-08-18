import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createMemoryHistory, createRouter } from "vue-router";
import AboutView from "./AboutView.vue";
import HomeView from "./HomeView.vue";
import DisclaimerView from "./DisclaimerView.vue";
import WorkWithMeView from "./WorkWithMeView.vue";
import Articles from "./Articles.vue";
import ArticleDetailView from "./ArticleDetailView.vue";
import 'vue-markdown-shiki/style'
import markdownPlugin from 'vue-markdown-shiki'

const routes = [
  { path: "/", component: HomeView },
  { path: "/articles", component: Articles },
  { path: "/articles/:articleSlug", component: ArticleDetailView },
  { path: "/about", component: AboutView },
  { path: "/disclaimer", component: DisclaimerView },
  { path: "/work-with-me", component: WorkWithMeView },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

createApp(App).use(router).use(markdownPlugin).mount("#app");
