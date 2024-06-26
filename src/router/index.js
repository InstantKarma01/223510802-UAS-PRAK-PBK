// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import WeatherView from '../views/WeatherView.vue';
import AboutView from '../views/AboutView.vue';

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/about', name: 'about', component: AboutView },
  { path: '/weather', name: 'weather', component: WeatherView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;