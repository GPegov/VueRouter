
import { createRouter, createWebHistory } from "vue-router";



const routes = [
  {path: "/", name: "home", component: () => import ('@/views/HomeView.vue')},
  {path: "/CheckIn", name: "checkIn", component: () => import ('@/views/MyAskGuests.vue')},
  {path: "/Parents", name: "parents", component: () => import ('@/views/MyParents.vue')},
  {path: "/Place", name: "place", component: () => import ('@/views/MyPlace.vue')},
  {path:"/Plan", name: "plan", component: () => import ('@/views/MySeatingPlan.vue')}
  
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active-link'
});

export default router;
