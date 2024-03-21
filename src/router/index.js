
import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "@/views/HomeView.vue";
// import MyParents from "@/views/MyParents.vue";
// import MyAskGuests from "@/views/MyAskGuests.vue";
// import MyPlace from "@/views/MyPlace.vue";
// import MySeatingPlan from "@/views/MySeatingPlan.vue"


const routes = [
  {path: "/", name: "home", component: () => import ('@/views/HomeView.vue')},
  {path: "/CheckIn", name: "checkIn", component: () => import ('@/views/MyAskGuests.vue')},
  {path: "/Parents", name: "parents", component: () => import ('@/views/MyParents.vue')},
  {path: "/Place", name: "place", component: () => import ('@/views/MyPlace.vue')},
  {path:"/Plan", name: "plan", component: () => import ('@/views/MySeatingPlan.vue')}
  
  /*{path:'/destination/:id/:slug', 
   name: 'destination.show', 
   component: () => import('@/views/DestinationShow.vue'),
  props: route=>({id:parseInt(route.params.id)}),
  }*/
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active-link'
});

export default router;
