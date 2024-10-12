<template>

    <div>
        <h2>Форма для персонификации сайта</h2>

        <!--Bride and Groom-->
        <p>Информация о молодоженах</p>

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
        <p>Информация о родителях</p>

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

        <p>Имена родственников</p>

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

        <p>Имена друзей</p>
        
        <div class="Friends">
            <div class="PersonItem">
                <p>Имя друга № 1</p>
                <input v-model="storePersonification.friend_1" type="text" placeholder="Введите имя друга №1">
            </div>

            <div class="PersonItem">
                <p>Имя друга № 2</p>
                <input v-model="storePersonification.friend_2" type="text" placeholder="Введите имя друга №2">
            </div>

            <div class="PersonItem">
                <p>Имя друга № 3</p>
                <input v-model="storePersonification.friend_3" type="text" placeholder="Введите имя друга №3">
            </div>

            <div class="PersonItem">
                <p>Имя друга № 4</p>
                <input v-model="storePersonification.friend_4" type="text" placeholder="Введите имя друга №4">
            </div>

            <div class="PersonItem">
                <p>Имя друга № 5</p>
                <input v-model="storePersonification.friend_5" type="text" placeholder="Введите имя друга №5">
            </div>

            <div class="PersonItem">
                <p>Имя друга № 6</p>
                <input v-model="storePersonification.friend_6" type="text" placeholder="Введите имя друга №6">
            </div>

            <div class="PersonItem">
                <p>Имя друга № 7</p>
                <input v-model="storePersonification.friend_7" type="text" placeholder="Введите имя друга №7">
            </div>

            <div class="PersonItem">
                <p>Имя друга № 8</p>
                <input v-model="storePersonification.friend_8" type="text" placeholder="Введите имя друга №8">
            </div>
        </div>

        <p>Информация на главной странице</p>

        <div class="Heading">
            
            <div class="PersonItem">
                <p>Имена жениха и невесты для надписи красивым шрифтом</p>
                <input v-model="storePersonification.namesOfBrideAndGroomHeading" type="text"
                    placeholder="Введите имена жениха и невесты">
            </div>
            
            <div class="PersonItem">
                <p>Дата мероприятия</p>
                <input v-model="storePersonification.dateOfMarriage" type="text" 
                    placeholder="Введите дату мероприятия">
            </div>
            
            <div class="PersonItem">
                <p>Вступительный параграф №1</p>
                <input v-model="storePersonification.headingParagraphSugaryIntro_1" type="text"
                    placeholder="Введите вступительный параграф №1">
            </div>
            
            <div class="PersonItem">
                <p>Вступительный параграф №2</p>
                <input v-model="storePersonification.headingParagraphSugaryIntro_2" type="text"
                    placeholder="Введите вступительный параграф №2">
            </div>
            
            <div class="PersonItem">
                <p>Вступительный параграф №3</p>
                <input v-model="storePersonification.headingParagraphSugaryIntro_3" type="text"
                    placeholder="Введите вступительный параграф №3">
            </div>
        </div>

        <p>Место и адрес церемонии</p>

        <div class="Ceremony">
            <div class="PersonItem">
                <p>Название места церемонии</p>
                <input v-model="storePersonification.ceremonyPlaceName" type="text" 
                    placeholder="Введите название места церемонии">
            </div>
            
            <div class="PersonItem">
                <p>Адрес места церемонии</p>
                <input v-model="storePersonification.ceremonyAddress" type="text" 
                    placeholder="Введите адрес места церемонии">
            </div>
        </div>

        <p>Банкет</p>

        <div class="Banquet">
            <div class="PersonItem">
                <p>Название места банкета</p>
                <input v-model="storePersonification.banquetPlaceName" type="text" 
                    placeholder="Введите название места банкета">
            </div>
            <div class="PersonItem">
                <p>Адрес места банкета</p>
                <input v-model="storePersonification.banquetAddress" type="text" 
                    placeholder="Введите адрес места банкета">
            </div>
         </div>
    </div>


</template>

<script setup>
import { usePersonification } from '@/stores/Personification'
const storePersonification = usePersonification()
</script>