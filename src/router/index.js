import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import MyParents from "@/views/MyParents.vue";
import MyAskGuests from "@/views/MyAskGuests.vue";
import MyPlace from "@/views/MyPlace.vue";
import MySeatingPlan from "@/views/MySeatingPlan.vue"


const routes = [
  {path: "/", name: "home", component: HomeView,},
  {path: "/CheckIn", name: "checkIn", component: MyAskGuests,},
  {path: "/Parents", name: "parents", component: MyParents,},
  {path: "/Place", name: "place", component: MyPlace,},
  {path: "/SeatingPlan", name: "seatingPlan", component: MySeatingPlan,},
  
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
