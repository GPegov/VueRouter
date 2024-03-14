<template>

    <nav id="nav">
      <transition name="fade" mode="out-in">
        <div class="navItem menuBar">
          
          <img id="menuIcon" v-show ="show === false" src="@/img/MenuIcons/MenuIcon.png" 
            alt="Menu" @click="show = !show" :key="Date.now()"/>

          <img id="clear" v-show="show === true" src="@/img/MenuIcons/Clear.png" 
            alt="Clear" @click="show = !show" :key="Date.now()"/>
            
      
          <router-link id="logo" to="/">Виталий и Екатерина</router-link>
        </div>
      </transition>
      
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
      
    </nav>
</template>

<script setup>
import { ref } from 'vue'
const show = ref(false);
</script>

<style>
#nav .active-link {
    color: rgb(130, 255, 255);
}
#menuIcon {
  display: none;
}

@media screen and (max-width: 500px) {
#menuIcon {
  display: flex;
  width: 60px;
  height: 60px;
  margin-bottom: 10px;
  margin-right: 70px;
  margin-left: -15px;
  cursor:pointer;
  
}
#clear {
  display: flex;
  width: 60px;
  height: 60px;
  margin-bottom: 10px;
  margin-right: 70px;
  margin-left: -15px;
  cursor:pointer;
}
.navItem {
  display: flex;
  flex-direction: column;
  padding-top: 10px;
}
.menuBar{
  display: flex;
  flex-direction: row;

}
#nav {
  display: flex;
  flex-direction: column;
  padding-top: 0px;
}
}
</style>