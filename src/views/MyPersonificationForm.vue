<template>
    <div class="PersonFormContainer">
        <h1>Форма для персонификации сайта</h1>

        <!--Bride and Groom-->
        <div class="ForH2">
            <h2>Информация о молодожёнах</h2>
        </div>

        <div class="BlockRow">
            <div class="PersonItemVip">
                <p>Имя невесты</p>
                <input v-model="storePersonification.bridesName" type="text" placeholder="Введите имя невесты">
            </div>

            <div class="PersonItemVip">
                <p>Имя жениха</p>
                <input v-model="storePersonification.groomsName" type="text" placeholder="Введите имя жениха">
            </div>
        </div>

        <!--Parents-->
        <div class="ForH2">
            <h2>Информация о родителях</h2>
        </div>
        <div class="BlockRow">

            <div class="PersonColumn">

                <div class="ForH3">
                    <h3>Родители Невесты</h3>
                </div>

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

                <div class="PersonItem">
                    <p>Род занятий отца невесты</p>
                    <textarea rows="2" v-model="storePersonification.bridesFatherOccupation" type="text"
                        placeholder="Введите Род занятий отца невесты"></textarea>
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
                    <textarea rows="2" v-model="storePersonification.bridesMotherOccupation" type="text"
                        placeholder="Введите Род занятий матери невесты"></textarea>
                </div>
            </div>

            <div class="PersonColumn">

                <div class="ForH3">
                    <h3>Родители жениха</h3>
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
                    <textarea rows="2" v-model="storePersonification.groomsFatherOccupation" type="text"
                        placeholder="Введите Род занятий отца жениха"></textarea>
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
                    <textarea rows="2" v-model="storePersonification.groomsMotherOccupation" type="text"
                        placeholder="Введите Род занятий матери жениха"></textarea>
                </div>
            </div>
        </div>

        <div class="ForH2">
            <h2>Имена родственников</h2>
        </div>


        <div class="BlockRow">

            <div class="PersonColumn">
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
            </div>

            <div class="PersonColumn">
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

        </div>

        <div class="ForH2">
            <h2>Имена друзей</h2>
        </div>

        <div class="BlockRow">

            <div class="PersonColumn">
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
            </div>

            <div class="PersonColumn">
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

        </div>

        <div class="ForH2">
            <h2>Информация на главной странице</h2>
        </div>

        <div class="BlockColumn">

            <div class="PersonRow">

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
            </div>

            <div class="PersonColumnCentered">

                <div class="PersonItem">
                    <p>Вступительный параграф №1</p>
                    <textarea class="Text3Rows" rows="3" v-model="storePersonification.headingParagraphIntro_1"
                        type="text" placeholder="Введите вступительный параграф №1"></textarea>
                </div>

                <div class="PersonItem">
                    <p>Вступительный параграф №2</p>
                    <textarea class="Text3Rows" rows="3" v-model="storePersonification.headingParagraphIntro_2"
                        type="text" placeholder="Введите вступительный параграф №2"></textarea>
                </div>

                <div class="PersonItem">
                    <p>Вступительный параграф №3</p>
                    <textarea class="Text3Rows" rows="3" v-model="storePersonification.headingParagraphIntro_3"
                        type="text" placeholder="Введите вступительный параграф №3"></textarea>
                </div>
            </div>

        </div>

        <div class="ForH2">
            <h2>Место и адрес церемонии</h2>
        </div>

        <div class="BlockRow">
            <div class="PersonColumn">
                <div class="PersonItem">
                    <p>Название места церемонии</p>
                    <textarea rows="2" v-model="storePersonification.ceremonyPlaceName" type="text"
                        placeholder="Введите название места церемонии"></textarea>
                </div>
            </div>

            <div class="PersonColumn">
                <div class="PersonItem">
                    <p>Адрес места церемонии</p>
                    <textarea rows="2" v-model="storePersonification.ceremonyAddress" type="text"
                        placeholder="Введите адрес места церемонии"></textarea>
                </div>
            </div>

        </div>

        <div class="ForH2">
            <h2>Банкет</h2>
        </div>

        <div class="BlockRow">

            <div class="PersonColumn">
                <div class="PersonItem">
                    <p>Название места банкета</p>
                    <textarea rows="2" v-model="storePersonification.banquetPlaceName" type="text"
                        placeholder="Введите название места банкета"></textarea>
                </div>
            </div>

            <div class="PersonColumn">
                <div class="PersonItem">
                    <p>Адрес места банкета</p>
                    <textarea rows="2" v-model="storePersonification.banquetAddress" type="text"
                        placeholder="Введите адрес места банкета"></textarea>
                </div>
            </div>

        </div>
    </div>
</template>


<script setup>
import { usePersonification } from '@/stores/Personification'
const storePersonification = usePersonification()
</script>


<style scoped>
input {
    width: 400px;
    font-size: 12pt;
    text-align: center;
}

textarea {
    width: 400px;
    font-size: 12pt;
    text-align: center;
    font-family: Avenir, Helvetica, Arial, sans-serif;
}

.PersonItemVip {
    width: 50%;
    padding-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

}

.PersonItem {
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.BlockRow {
    width: 100%;
    border: 1px solid darkgreen;
    border-radius: 7px;
    display: flex;
    flex-direction: row;

}

.BlockColumn {
    width: 100%;
    border: 1px solid darkgreen;
    border-radius: 7px;
    display: flex;
    flex-direction: column;

}

.PersonRow {

    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-bottom: 30px;
}

.PersonColumn {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 30px;
}

.PersonColumnCentered {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 30px;
}

.ForH2 {
    padding: 20px;
    display: flex;
    justify-content: center;
}

.ForH3 {
    padding: 10px;
    display: flex;
    justify-content: center;
}

.Text3Rows {
    width: 900px;
    font-size: 12pt;
    text-align: left;
    font-family: Avenir, Helvetica, Arial, sans-serif;
}



@media screen and (max-width: 768px) {}
</style>