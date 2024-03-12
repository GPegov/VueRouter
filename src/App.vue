<template>
  
  <the-navigation />
  <div class="container">
    <router-view :key="$route.path" />
  </div>
</template>

<script setup>
  import TheNavigation from "@/components/TheNavigation.vue";
</script>
