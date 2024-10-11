<template>

    <div>
        <h2>Форма для персонификации сайта</h2>

        <div class="BrideAndGroom">
            <div class="PersonItemVip">
                <p>Имя невесты</p>
                <input v-model="storePersonification.bridesName" type="text" 
                    placeholder="Введите имя невесты">
            </div>
            <div class="PersonItemVip">
                <p>Имя жениха</p>
                <input v-model="storePersonification.groomsName" type="text" 
                    placeholder="Введите имя жениха">
            </div>

        </div>

        <!--Parents-->

        <div class="Parents">
            <div class="PersonItem">
                <p>Полное имя отца невесты</p>
                <input v-model="storePersonification.bridesFatherFullName" type="text"
                    placeholder="Введите полное имя отца невесты">
            </div>
            <div class="PersonItem">
                <p>Имя-отчество отца невесты</p>
                <input v-model="storePersonification.bridesFatherWithMiddleName" type="text"
                    placeholder="Введите Имя-отчество отца невесты">
            </div>
            <div>
                <p>Род занятий отца невесты</p>
                <input v-model="storePersonification.bridesFatherOccupation" type="text"
                    placeholder="Введите Род занятий отца невесты">
            </div>
            <div class="PersonItem">
                <p>Полное имя матери невесты</p>
                <input v-model="storePersonification.bridesMotherFullName" type="text"
                    placeholder="Введите Полное имя матери невесты">
            </div>
            <div class="PersonItem">
                <p>Имя-отчество матери невесты</p>
                <input v-model="storePersonification.bridesMotherWithMiddleName" type="text"
                    placeholder="Введите Имя-отчество матери невесты">
            </div>
            <div class="PersonItem">
                <p>Род занятий матери невесты</p>
                <input v-model="storePersonification.bridesMotherOccupation" type="text"
                    placeholder="Введите Род занятий матери невесты">
            </div>
            <div class="PersonItem">
                <p>Полное имя отца жениха</p>
                <input v-model="storePersonification.groomsFatherFullName" type="text"
                    placeholder="Введите Полное имя отца жениха">
            </div>
            <div class="PersonItem">
                <p>Имя-отчество отца жениха</p>
                <input v-model="storePersonification.groomsFatherWithMiddleName" type="text"
                    placeholder="Введите Имя-отчество отца жениха">
            </div>
            <div class="PersonItem">
                <p>Род занятий отца жениха</p>
                <input v-model="storePersonification.groomsFatherOccupation" type="text"
                    placeholder="Введите Род занятий отца жениха">
            </div>
            <div class="PersonItem">
                <p>Полное имя матери жениха</p>
                <input v-model="storePersonification.groomsMotherFullName" type="text"
                    placeholder="Введите Полное имя матери жениха">
            </div>
            <div class="PersonItem">
                <p>Имя-отчество матери жениха</p>
                <input v-model="storePersonification.groomsMotherWithMiddleName" type="text"
                    placeholder="Введите Имя-отчество матери жениха">
            </div>
            <div class="PersonItem">
                <p>Род занятий матери жениха</p>
                <input v-model="storePersonification.groomsMotherOccupation" type="text"
                    placeholder="Введите Род занятий матери жениха">
            </div>

        </div>

        <!--Nephews-->

        <div class="Nephews">
            <div class="PersonItem">
                <p>Имя родственика №1</p>
                <input v-model="storePersonification.nephew_1" type="text" placeholder="Имя родственика №1">
            </div>
            <div class="PersonItem">
                <p>Имя родственика №2</p>
                <input v-model="storePersonification.nephew_2" type="text" placeholder="Имя родственика №2">
            </div>
            <div class="PersonItem">
                <p>Имя родственика №3</p>
                <input v-model="storePersonification.nephew_3" type="text" placeholder="Имя родственика №3">
            </div>
            <div class="PersonItem">
                <p>Имя родственика №4</p>
                <input v-model="storePersonification.nephew_4" type="text" placeholder="Имя родственика №4">
            </div>
            <div class="PersonItem">
                <p>Имя родственика №5</p>
                <input v-model="storePersonification.nephew_5" type="text" placeholder="Имя родственика №5">
            </div>
            <div class="PersonItem">
                <p>Имя родственика №6</p>
                <input v-model="storePersonification.nephew_6" type="text" placeholder="Имя родственика №6">
            </div>
            <div class="PersonItem">
                <p>Имя родственика №7</p>
                <input v-model="storePersonification.nephew_7" type="text" placeholder="Имя родственика №7">
            </div>
            <div class="PersonItem">
                <p>Имя родственика №8</p>
                <input v-model="storePersonification.nephew_8" type="text" placeholder="Имя родственика №8">
            </div>
        </div>

        <!--Friends-->


<!--continue from here-->
        
        <div class="Friends">
            <input v-model="storePersonification.friend_1" type="text" placeholder="Имя друга №1">

            <input v-model="storePersonification.friend_2" type="text" placeholder="Имя друга №2">

            <input v-model="storePersonification.friend_3" type="text" placeholder="Имя друга №3">

            <input v-model="storePersonification.friend_4" type="text" placeholder="Имя друга №4">

            <input v-model="storePersonification.friend_5" type="text" placeholder="Имя друга №5">

            <input v-model="storePersonification.friend_6" type="text" placeholder="Имя друга №6">

            <input v-model="storePersonification.friend_7" type="text" placeholder="Имя друга №7">

            <input v-model="storePersonification.friend_8" type="text" placeholder="Имя друга №8">
        </div>

        <!--Heading-->

        <div class="Heading">
            <input v-model="storePersonification.namesOfBrideAndGroomHeading" type="text"
                placeholder="Имена жениха и невесты красивым шрифтом">

            <input v-model="storePersonification.dateOfMarriage" type="text" placeholder="Дата мероприятия">

            <input v-model="storePersonification.headingParagraphSugaryIntro_1" type="text"
                placeholder="Вступительный параграф №1">

            <input v-model="storePersonification.headingParagraphSugaryIntro_2" type="text"
                placeholder="Вступительный параграф №2">

            <input v-model="storePersonification.headingParagraphSugaryIntro_3" type="text"
                placeholder="Вступительный параграф №3">

        </div>

        <!--Ceremony-->

        <div class="Ceremony">
            <input v-model="storePersonification.ceremonyPlaceName" type="text" placeholder="Название места церемонии">

            <input v-model="storePersonification.ceremonyAddress" type="text" placeholder="Адрес места церемонии">
        </div>

        <!--Banquet-->

        <div class="Banquet">
            <input v-model="storePersonification.baquetPlaceName" type="text" placeholder="Название места банкета">

            <input v-model="storePersonification.banquetAddress" type="text" placeholder="Адрес места банкета">
        </div>
    </div>


</template>

<script setup>
import { usePersonification } from '@/stores/Personification'
const storePersonification = usePersonification()
</script>