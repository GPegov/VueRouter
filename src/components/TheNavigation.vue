<template>

    <div id="nav">
      <div class="navItem">
        <router-link id="logo" to="/">Виталий и Екатерина</router-link>
      </div>
      <div class="navItem">
        <router-link to="/CheckIn">Подтвердите присутствие</router-link>
      </div>
      <div class="navItem">
        <router-link to="/Parents">Наши родители</router-link>
      </div>
      <div class="navItem">
        <router-link to="/Place">Место проведения мероприятия</router-link>
      </div>
      <div class="navItem">
        <router-link to="/SeatingPlan">План рассадки гостей</router-link>
      </div>
      
  </div>
</template>

<script>

</script>

<style>
#nav .active-link {
    color: rgb(130, 255, 255);
}

@media screen and (max-width: 500px) {
.navItem {
  display: flex;
  flex-direction: column;
  padding-top: 20px;
}
#nav {
  display: flex;
  flex-direction: column;
  padding-top: 0px;
}
}
</style>