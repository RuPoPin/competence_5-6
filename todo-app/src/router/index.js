import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import TodoList from '../views/TodoList.vue';
import Profil from '../views/Profiles.vue';

const routes = [
  { path: '/', name: 'Главная', component: Home },
  { path: '/todo', name: 'TodoList', component: TodoList },
  { path: '/profil', name: 'Profil', component: Profil },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;