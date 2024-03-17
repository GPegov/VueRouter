<template>

    <nav id="nav">
      
        <div class="navItem menuBarWrap " v-show ="show === false" :key="Date.now()">
          <img class="MenuIcon" src="@/img/MenuIcons/MenuIcon.png" 
            alt="Menu" @click="show = !show"/>
          <router-link id="logo" to="/">Виталий и Екатерина</router-link>
        </div>
      

      
        <div class="navItem menuBarExpand" v-show="show === true">
          <div class="navItemExpand">
            <img class="MenuIcon"  src="@/img/MenuIcons/Clear.png" 
            alt="Clear" @click="show = !show" :key="Date.now()"/>
          <router-link id="logo" to="/">Виталий и Екатерина</router-link>
          </div>
          
          <div class="navItem">
            <router-link to="/CheckIn" @click="show = false">Подтвердите присутствие</router-link>
          </div>
          <div class="navItem">
            <router-link to="/Parents" @click="show = false">Наши родители</router-link>
          </div>
          <div class="navItem">
            <router-link to="/Place" @click="show = false">Место проведения мероприятия</router-link>
          </div>
          <div class="navItem">
            <router-link to="/SeatingPlan" @click="show = false">План рассадки гостей</router-link>
          </div>
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
.menuIcon {
  display: none;
}

@media screen and (max-width: 500px) {
.MenuIcon {
  display: flex;
  width: 50px;
  height: 50px;
  margin-right: 70px;
  margin-left: -15px;
  cursor:pointer;
  
}

.navItem {
  font-weight: 900;
  font-size: 14pt;
  padding-top: 20px;
}
.menuBarWrap{
  display: flex;
  flex-direction: row;
  margin-top: 10px;
}
.navItemExpand{
  display: flex;
  flex-direction: row;
}
.menuBarExpand {
  display: flex;
  flex-direction: column;
  margin-top: 10px;

}
#nav {
  padding-bottom: 20px;
  padding-top: 0px;
}
}
</style>