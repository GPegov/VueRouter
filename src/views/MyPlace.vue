<template>

    <h2 class="mainHeader">Место проведения мероприятия</h2>
        <div class="placeDescription">
            <div class="placeDescription1">
                <h3>Сбор Гостей</h3>
                <p>{{ storePersonification.ceremonyPlaceName }}</p>
                <p>{{ storePersonification.ceremonyAddress }}</p> 
            </div>
            <div class="placeDescription2">
                <h3>Торжество</h3>
                <p>{{ storePersonification.banquetPlaceName }}</p>
                <p>{{ storePersonification.banquetAddress }}</p> 
            </div>
        </div>
    <YandexMap />

    




        
    
</template>

<script setup>

import YandexMap from '@/components/YandexMap.vue';
import { usePersonification } from '@/stores/Personification'

const storePersonification = usePersonification()





</script>

<style scoped>

.header_place {
    color: rgb(68, 68, 68);
    margin-top: 25px;
    margin-bottom: 35px;
    display: flex;
    justify-content: center;
    font-size: 22pt;
    font-family:'Circe Light', sans-serif !important;
}
.placeDescription {
    display: flex;
    flex-direction: row;
    color: rgb(68, 68, 68);
    margin-top: 25px;
    margin-bottom: 35px;
    justify-content: center;
    
    font-family:'Circe Light', sans-serif !important;

}
.placeDescription1 {
    padding-left: 10px;
    padding-right: 10px;
    display: flex;
    flex-direction: column;
    
}
.placeDescription2 {
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    padding-right: 10px;
}
.mainHeader {
    display: flex;
    text-align: center;
    margin-top: 0px;
}

@media screen and (min-width: 768px) {
    
}
</style>