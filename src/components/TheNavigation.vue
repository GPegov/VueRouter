<template>
    <div id="nav">
      <router-link id="logo" to="/">Виталий и Екатерина</router-link>
      <router-link 
      v-for="destination in destinations"
      :key="destination.id"
      :to="{name:'destination.show', params:{id:destination.id, slug: destination.slug}}"
    >
    {{ destination.name }}
    </router-link>
  </div>
</template>

<script>
import sourseData from '@/data.json'
export default {
  data() {
    return {
      destinations: sourseData.destinations
    }
  }
}
</script>

<style>
#nav .vue-school-active-link {
    color: rgb(130, 255, 255);
    
}
</style>