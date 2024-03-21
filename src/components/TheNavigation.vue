<template>
  
  <nav id="nav">
    
    <div class="menuBarWrap" v-if="show === false">
      <img class="MenuIcon" src="@/img/MenuIcons/MenuIcon.png" 
        alt="Menu" @click="show = !show"/>
        <router-link id="logo" to="/" @click="show = false">Виталий и Екатерина</router-link>
    </div>

    <div class="menuBarExpand" v-on-click-outside="closeMenu" v-else>
      <div class="navItem menuBarWrap">
        <img class="MenuIcon" src="@/img/MenuIcons/Clear.png" 
          alt="Clear" @click="show = !show"/>
        <router-link id="logo" to="/" @click="show = false">Виталий и Екатерина</router-link>
      </div>
      <div class="navItem">
        <router-link to="/" @click="show = false">Главная</router-link>
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
        <router-link to="/Plan" @click="show = false">План рассадки гостей</router-link>
      </div>
    </div>
      
    
      
      
          
          
        
  </nav>
  
</template>

<script setup>
import { ref } from 'vue'
import { vOnClickOutside } from '@vueuse/components'
const show = ref(false);
const closeMenu = () => {
  show.value = false
  
}
</script>

<style>
/*----------Animation----------*/

.menuAnimation-enter-from,
.menuAnimation-leave-to {
    opacity: 0;
    transform: translateY(-60px);
}
.menuAnimation-enter-active,
.menuAnimation-leave-active {
    transition: all 0.5s ease;
    
}
.menuAnimation-move {
    transition: all 0.5s ease;
}

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

/*----------End of the animation----------*/


#nav .active-link {
    color: rgb(130, 255, 255);
    
}
#nav {
  display: flex;
  flex-direction: row;
  padding-bottom: 20px;
  padding-top: 0px;
}
.MenuIcon {
  display: flex;
  width: 50px;
  height: 50px;
  margin-right: 70px;
  margin-left: -15px;
  cursor:pointer;
  
}
.menuWrapper {
  display: flex;
  flex-direction: column;
  
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
  padding-top: 20px;
  
}
.navItemExpand{
  display: flex;
  flex-direction: row;
}
.menuBarExpand {
  display: flex;
  flex-direction: column;
  

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
.menuWrapper {
  display: flex;
  flex-direction: column;
  
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
  padding-top: 20px;
  
}
.navItemExpand{
  display: flex;
  flex-direction: row;
}
.menuBarExpand {
  display: flex;
  flex-direction: column;
  

}
}
</style>