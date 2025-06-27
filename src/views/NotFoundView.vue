<template>
    <div class="not-found">
      <h1>404</h1>
      <p>Страница не найдена. Возможно, вы ошиблись URL?</p>
      <router-link to="/">Вернуться на главную</router-link>
    </div>
  </template>

<script setup> 
    import { onMounted } from 'vue'; 
    import { useRouter } from 'vue-router'; 

    const router = useRouter(); onMounted(() => { setTimeout(() => router.push('/'), 5000); }); 

</script>
  
  <style scoped>
  .not-found {
    text-align: center;
    padding: 2rem;
  }
  </style>