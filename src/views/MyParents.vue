<template>
    <div class="Parents">

        <h1 class="mainHeader">Наши родители</h1>

        <h2 class="parentsTitle">Родители жениха</h2>
        <div class="husbandsParents">
            <div class="parentPhotoAndText">
                <img class="parentPhoto" src="@/img/Parents/husbandsFather1.jpg"/>
                <h4 class="parentName">{{ storePersonification.groomsFatherFullName }}</h4>
                <p class="parentOccupation">{{ storePersonification.groomsFatherOccupation }}</p>
            </div>
            <div class="parentPhotoAndText">
                <img class="parentPhoto" src="@/img/Parents/husbandsMother1.jpg"/>
                <h4 class="parentName">{{ storePersonification.groomsMotherFullName }}</h4>
                <p class="parentOccupation">{{ storePersonification.groomsMotherOccupation }}</p>
            </div>
        </div>

        <h2 class="parentsTitle">Родители невесты</h2>
        <div class="wifesParents">
                    <div class="parentPhotoAndText">
                        <img class="parentPhoto" src="@/img/Parents/wifesFather1.jpg"/>
                        <h4 class="parentName">{{ storePersonification.bridesFatherFullName }}</h4>
                        <p class="parentOccupation">{{ storePersonification.bridesFatherOccupation }}</p>
                    </div>
                    <div class="parentPhotoAndText">
                        <img class="parentPhoto" src="@/img/Parents/wifesMother1.jpg"/>
                        <h4 class="parentName">{{ storePersonification.bridesMotherFullName }}</h4>
                        <p class="parentOccupation">{{ storePersonification.bridesMotherOccupation }}</p>
                    </div>
                </div>
        </div>
        
</template>

<script setup>
import { usePersonification } from '@/stores/Personification'
const storePersonification = usePersonification()
</script>

<style>


.parentsTitle {
    color: rgb(82, 82, 82);
    margin-top: 70px;
    margin-bottom: 50px;
    display: flex;
    justify-content: center;
    font-size: 26pt;
    font-family:'Circe Light', sans-serif !important;
}
.parentPhotoAndText {
    padding-right: 20px;
    text-align: center;
}


@media screen and (min-width: 500px) {
.parentsPhotos {
    display: flex;
    flex-direction: row;
}
.husbandsParents {
    display: flex;
    flex-direction: row;
}
.wifesParents {
    display: flex;
    flex-direction: row;
}
.mainHeader {
    
}
}
</style>