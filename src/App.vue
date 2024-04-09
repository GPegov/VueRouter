<template>
    <the-navigation/>
  <div class="container">

    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <div :key="$route.path">  
          <component :is="Component"></component>
        </div>
      </transition>
    </router-view>

  </div>
</template>

<script setup>
  import TheNavigation from "@/components/TheNavigation.vue";

</script>

<style>
/*----------route transitions----------*/
.fade-enter-from {
  opacity: 0;
  transform: translateY(40px);
}
.fade-enter-active {
  opacity: 1;
  transition: all 0.2s ease-out;
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-40px);
}
.fade-leave-active {
  transition: all 0.2s ease-out;
}
/*----------end of route transitions----------*/
</style>