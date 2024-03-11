<template>

  <router-link to="/Parents">Родители</router-link>
  
  <the-navigation />
  <div class="container">
    <router-view :key="$route.path" />
  </div>
</template>

<script setup>
  import TheNavigation from "@/components/TheNavigation.vue";
</script>
