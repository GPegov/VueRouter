<template>
  
  <the-navigation />
  <div class="container">
    <router-view />
    <!-- <router-view v-slot="{ Component }">
      <transition name="route" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view> -->
  </div>
</template>

<script setup>
  import TheNavigation from "@/components/TheNavigation.vue";
</script>

<style>
/*----------route transitions----------*/
.route-enter-from {
  opacity: 0;
  transform: translateY(100px);
}
.route-enter-active {
  opacity: 1;
  transition: all 1s ease-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateY(-100px);
}
.route-leave-active {
  transition: all 1s ease-in;
}
/*----------end of route transitions----------*/
</style>