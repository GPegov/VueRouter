<template>
  <div class="home">
    <h1 class="theDate">{{ storePersonification.dateOfMarriage }}</h1>
    <div class="destinations">
      <div class="menuItem">
        <router-link to="/CheckIn">
          Подтвердите присутствие
        </router-link>
      </div>

      <div class="menuItem">
        <router-link to="/CheckIn">
          Наши родители
        </router-link>
      </div>

      <div class="menuItem">
        <router-link to="/CheckIn">
          Место проведения мероприятия
        </router-link>
      </div>

      <div class="menuItem">
        <router-link to="/CheckIn">
          План рассадки гостей
        </router-link>
      </div>
    
    </div>

    <div class="invitation">
      <p class="invitationText">{{ storePersonification.headingParagraphSugaryIntro_1 }}</p>
      <p class="invitationText">{{ storePersonification.headingParagraphSugaryIntro_2 }}</p>
      <p class="invitationText">{{ storePersonification.headingParagraphSugaryIntro_3 }}</p>
    </div>
  </div>
</template>


<script setup>
import { usePersonification } from '@/stores/Personification'
const storePersonification = usePersonification()
</script>

<style scoped>
.invitation {
color: rgb(68, 68, 68);
display: flex;
flex-direction: column;
padding-top: 40px;

}
.menuItem {
  padding-top: 20px;
}
.theDate {
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 30px;
    display: flex;
    justify-content: center;
    font-size: 16pt;
    font-family:'Circe Light', sans-serif !important;
    text-align: center;
}
.invitationText {
    text-align: center;
    -webkit-font-smoothing: antialiased;
    font-family:'Segoe UI', Tahoma, Verdana, sans-serif;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 15px;

}
.invitHeader {
    padding-top: 30px;
    padding-bottom: 30px;
}
@media screen and (max-width: 500px) {
.destinations{
  display: flex;
  flex-direction: column;
}
}
</style>