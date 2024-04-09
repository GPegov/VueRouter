<script setup>
import { useVariables } from '@/stores/Variables.js';
import MyToast from '@/components/MyToast.vue';
import FadeTransition from '@/transitions/FadeTransition.vue';
import { ref } from 'vue'
import MyPopup from '@/components/MyPopup.vue';



const icons = ref([
    {name:'alternate_email', text: 'Буду один/одна'}, {name:'local_phone', text: 'Буду с парой'},
    {name:'alternate_email', text: 'С детьми'}, {name:'local_phone', text: 'Без детей'},
    {name:'local_post_office', text: 'На машине'}, {name:'local_fire_department', text: 'Нужен трансфер'},
    {name:'local_post_office', text: 'Мясо'}, {name:'local_fire_department', text: 'Рыба'},

])


const storeVariables = useVariables();
const vAutofocus = {
    mounted(el) {
        el.focus()
    }
}

</script>

<template>
<div class="guestForm">
    <h1 class="mainHeader">Подтвердите присутствие</h1>

    <form 
        class="addGuestsForm"
        @submit.prevent>
        <div class="inputField">
            <input 
                v-autofocus
                class="inputs"
                v-model="storeVariables.guest.name"
                type="text" 
                placeholder="Имя Гостя"
                
            >
            <input 
                class="inputs"
                v-model="storeVariables.guest.surname" 
                type="text" 
                placeholder="Фамилия Гостя"
                
            >
        </div>
        <button
            class="btn addGuestbtn"
            @click="storeVariables.saveGuest"
            @keyup.enter="storeVariables.saveGuest"
        >
            Добавить гостя
        </button>

        <button
            class="btn add10Guestbtn"
            @click="storeVariables.save10Guest"
        >
            Добавить 10 гостей
        </button>
        
        <transition name="toast">
            <MyToast v-if="storeVariables.showToast" />
        </transition>

    </form>
<!-- <Transition name="all" mode="out-in">         -->
    <div class="askGuests">
        <div class="guestsList">
            <transition-group tag="div" name="list" mode="out-in">
                <div class="guestItem" 
                    v-for = '(guest) in storeVariables.guests'
                    :key="guest.id"
                >
                    <div class="guestName">
                        <div class="name">Имя: {{ guest.name }} </div>     
                        <div class="surname">Фамилия: {{ guest.surname }}</div> 
                    </div>
            
                    <div class="removeGuestDiv">
                        <button 
                            class="removeGuestBtn" 
                            @click="storeVariables.deleteGuest(guest.id)"
                            >
                            Удалить
                        </button>
                    </div>
                </div>
            </transition-group>
        </div>    
        <div class="additionalAskButtons" :key="1">
            <Transition name="all" mode="out-in"> 
                <div class="askGuestsMore"
                :key="2"
                inheritAttrs=false

                    v-show="(storeVariables.guests.length > 0)">
                    
                        <a href="#scrollAskGuests"
                            v-smooth-scroll
                            v-bind="$attrs">
                            <button
                            
                                class="askGuestsMoreButton"
                                :class="{pressed: storeVariables.familyProperties.alone}"
                                @click="
                                    storeVariables.familyProperties.alone = !storeVariables.familyProperties.alone,
                                    storeVariables.familyProperties.couple = false,
                                    storeVariables.familyProperties.withChildren = false,
                                    storeVariables.familyProperties.withoutChildren = false,
                                    storeVariables.familyProperties.onCar = false,
                                    storeVariables.familyProperties.needTransfer = false,
                                    storeVariables.familyProperties.foodDoesntMatter = false,
                                    storeVariables.familyProperties.foodMeat = false,
                                    storeVariables.familyProperties.foodFish = false
                                    "
                            >
                                Буду один / одна
                            </button>
                        </a>   
                    
                    
                        <a href="#scrollAskGuests"
                            v-smooth-scroll
                            v-bind="$attrs">
                            <button
                            
                                class="askGuestsMoreButton"
                                :class="{pressed: storeVariables.familyProperties.couple}"
                                @click="
                                    storeVariables.familyProperties.couple = !storeVariables.familyProperties.couple,
                                    storeVariables.familyProperties.alone = false,
                                    storeVariables.familyProperties.withChildren = false,
                                    storeVariables.familyProperties.withoutChildren = false,
                                    storeVariables.familyProperties.onCar = false,
                                    storeVariables.familyProperties.needTransfer = false,
                                    storeVariables.familyProperties.foodDoesntMatter = false,
                                    storeVariables.familyProperties.foodMeat = false,
                                    storeVariables.familyProperties.foodFish = false
                                    "
                            >
                                Буду с парой
                            </button>
                        </a>
                    
                </div>
            
            </Transition>
            <Transition name="all" mode="out-in">
                <div class="askGuestsMore"
                :key="3"
                inheritAttrs=false

                    v-show="((storeVariables.guests.length > 0) && (storeVariables.familyProperties.alone || storeVariables.familyProperties.couple))"
                    >
                    
                        <a href="#scrollAskGuests"
                            v-smooth-scroll
                            v-bind="$attrs">
                            <button
                            
                                class="askGuestsMoreButton"
                                :class="{pressed: storeVariables.familyProperties.withChildren}" 
                                @click="storeVariables.familyProperties.withChildren = !storeVariables.familyProperties.withChildren,
                                        storeVariables.familyProperties.withoutChildren = false,
                                        storeVariables.familyProperties.onCar = false,
                                        storeVariables.familyProperties.needTransfer = false,
                                        storeVariables.familyProperties.foodDoesntMatter = false,
                                        storeVariables.familyProperties.foodMeat = false,
                                        storeVariables.familyProperties.foodFish = false
                                        "
                            >
                                С детьми
                            </button>
                        </a>
                    
                
                    
                        <a href="#scrollAskGuests"
                            v-smooth-scroll
                            v-bind="$attrs">
                            <button
                            
                                class="askGuestsMoreButton"
                                :class="{pressed: storeVariables.familyProperties.withoutChildren}"
                                @click="storeVariables.familyProperties.withoutChildren = !storeVariables.familyProperties.withoutChildren,
                                        storeVariables.familyProperties.withChildren = false,
                                        storeVariables.familyProperties.onCar = false,
                                        storeVariables.familyProperties.needTransfer = false,
                                        storeVariables.familyProperties.foodDoesntMatter = false,
                                        storeVariables.familyProperties.foodMeat = false,
                                        storeVariables.familyProperties.foodFish = false
                                        "
                            >
                                Без детей
                            </button>
                        </a>
                    
                </div>
            </Transition>
            <Transition name="all" mode="out-in">
                <div class="askGuestsMore"
                :key="4"
                inheritAttrs=false

                    v-show="((storeVariables.guests.length > 0) && 
                    (storeVariables.familyProperties.withChildren || storeVariables.familyProperties.withoutChildren))">
                    
                        <a href="#scrollAskGuests"
                            v-smooth-scroll
                            v-bind="$attrs">
                            <button
                                
                                class="askGuestsMoreButton"
                                :class="{pressed: storeVariables.familyProperties.onCar}"
                                @click="storeVariables.familyProperties.onCar = !storeVariables.familyProperties.onCar,
                                        storeVariables.familyProperties.needTransfer = false,
                                        storeVariables.familyProperties.foodDoesntMatter = false,
                                        storeVariables.familyProperties.foodMeat = false,
                                        storeVariables.familyProperties.foodFish = false
                                        "
                            >
                                На машине
                            </button>
                        </a>

                        <a href="#scrollAskGuests"
                            v-smooth-scroll
                            v-bind="$attrs">
                            <button
                                
                                class="askGuestsMoreButton"
                                :class="{pressed: storeVariables.familyProperties.needTransfer}"
                                @click="storeVariables.familyProperties.needTransfer = !storeVariables.familyProperties.needTransfer,
                                        storeVariables.familyProperties.onCar = false,
                                        storeVariables.familyProperties.foodDoesntMatter = false,
                                        storeVariables.familyProperties.foodMeat = false,
                                        storeVariables.familyProperties.foodFish = false
                                        "
                            >
                                Нужен трансфер
                            </button>
                        </a>    
                        
                </div>
            </Transition>
            <Transition name="all" mode="out-in">
                <div class="askGuestsMore"
                :key="5"
                inheritAttrs=false

                    v-show="((storeVariables.guests.length > 0) && (storeVariables.familyProperties.onCar || storeVariables.familyProperties.needTransfer))" 
                >
                    <a href="#scrollAskGuests"
                        v-smooth-scroll
                        v-bind="$attrs">
                        <button
                            
                            class="askGuestsMoreButton"
                            :class="{pressed: storeVariables.familyProperties.foodMeat}"
                            @click="storeVariables.familyProperties.foodMeat = !storeVariables.familyProperties.foodMeat,
                                    storeVariables.familyProperties.foodFish = false
                                    "
                        >
                            Мясо
                        </button>
                    </a>
                
                    <a href="#scrollAskGuests"
                        v-smooth-scroll
                        v-bind="$attrs">
                        <button
                            
                            class="askGuestsMoreButton"
                            :class="{pressed: storeVariables.familyProperties.foodFish}"
                            @click="storeVariables.familyProperties.foodFish = !storeVariables.familyProperties.foodFish,
                                    storeVariables.familyProperties.foodMeat = false
                                    "
                        >
                            Рыба
                        </button>
                    </a>
                </div>
            </Transition>
                    
            
            <Transition name="all" mode="out-in">
                <div class="sendButton" 
                :key="6"
                v-bind="$attrs"
                >
                    <button
                    
                        v-show="((storeVariables.familyProperties.foodDoesntMatter || storeVariables.familyProperties.foodMeat || storeVariables.familyProperties.foodFish) && (storeVariables.guests.length > 0))"
                        class="btn send"
                        @click="storeVariables.askGuestsResult(),
                                storeVariables.popupTriggerTimeout()
                        "
                        
                    >
                        Отправить
                    </button> 
                    <transition name="all" mode="out-in">
                        <MyPopup v-if="storeVariables.popupTrigger">
                            <h3>Данные отправлены</h3>
                            <h3>Мы будем рады видеть вас на нашем торжестве!</h3>
                        </MyPopup>
                    </transition>
                </div>
            </Transition>


            <!-- <ul>
                <li v-for="icon in icons" :key="icon.name">
                    <span class="material-icons">{{ icon.name }}</span>
                    <div>{{ icon.text }}</div>
                </li>
            </ul> -->


            <Transition name="all" mode="out-in">
                <div id="scrollAskGuests" ref="scrollAskRef" :key="7" v-bind="$attrs"></div>
            </Transition>
        </div> 
    </div>
<!-- </Transition> -->
</div>

</template>


<style scoped>
/*----------Animation----------*/
.toast-enter-active {
    animation: wobble 0.5s ease;
}
.toast-leave-to {
    opacity: 0;
    transform: translateY(60px);
}
.toast-leave-active {
    transition: all 0.3s ease;
    
}
@keyframes wobble {
    0% { transform: translateY(-60px); opacity: 0;}
    50% { transform: translateY(0px); opacity: 1;}
    60% { transform: translateX(8px);}
    70% { transform: translateX(-8px);}
    80% { transform: translateX(4px);}
    90% { transform: translateX(-4px);}
    100% { transform: translateX(0px);}
}

.list-enter-from {
    opacity: 0;
    transform: translateY(-60px);
}
.list-leave-to {
    opacity: 0;
    transform: translateX(-60px);
}
.list-enter-active {
    transition: all 0.5s ease;
}
.list-leave-active{
    transition: all 0.4s ease;
    position: absolute;
}
.list-move {
    transition: all 0.5s ease;
    
}


.all-enter-from {
    opacity: 0;
    transform: translateY(-60px);
}
.all-leave-to {
    opacity: 0;
    transform: translateY(-60px);
}
.all-enter-active {
    transition: all 0.5s ease;
}
.all-leave-active{
    transition: all 0.4s ease;
    position: absolute;
}
.all-move {
    transition: all 0.5s ease;
    
}


/*----------End of animation----------*/

.additionalAskButtons ul {
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    max-width: 400px;
    margin: 30px auto;
}
.askGuests {
    /* display: flex;
    flex-direction: column;
    align-items: center; */
    
    /* padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    max-width: 400px;
    margin: 30px auto; */
    
}
.additionalAskButtons li {
    display: flex;
    flex-direction: column;
    
    align-items: center;
    list-style-type: none;
    background: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
    cursor: pointer;
    line-height: 1.5em;
}
.additionalAskButtons {
    
    
    /* padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    max-width: 400px;
    margin: 30px auto; */
    
}

.askGuestsMore {
    /* display: flex;
    flex-direction: row;
    justify-content: center;
    min-width: 100%;
    padding-bottom: 20px;
    position: relative; */

    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    max-width: 400px;
    margin: 30px auto;

}
.mainHeader {
    display: flex;
    text-align: center;
    margin-top: 0px;
}
.askGuestsMoreButton {
    /* border: 1px solid teal;
    padding: 15px 20px 15px 20px;
    margin-left: 30px;
    margin-right: 30px;
    margin-top: 30px;
    border-radius: 5px;
    background-color: #fffbe7; */

    min-width: 100%;
    
    scroll-behavior: smooth;

    /* display: flex;
    flex-direction: column; */
    
    align-items: center;
    list-style-type: none;
    background: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
    cursor: pointer;
    line-height: 2em;
    font-size: 1rem;
    
}

#scrollAskGuests {
    display: flex;
    flex-direction: column;
    width: 150px;
    height: 5px;
    opacity: 0;
    background-color: green;
    margin-top: 150px;
    
}
.guestForm {
    max-width: 800px;
    padding: 0px 10px 10px 10px;
    display: flex;
    flex-direction: row;
    
}
.addGuestsForm {
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    min-width: 290px;
    
}
.name {
    text-align: left;
    padding-left: 10px;
}
.surname {
    text-align: left;
    padding-left: 10px;
}
.guestsList{
    width: 100%;
    padding-left: 7px;
    padding-right: 7px;
    position: relative;
    
}
.guestItem {
    border-radius: 5px;
    text-align: center;
    background: #c9ffe8;
    color: rgb(24, 93, 133);
    padding: 10px;
    align-items: center;
    display: flex;
    flex-direction: row;
    
}

.guestName {
    width: 80%;
    max-width: 510px;
    
    
}
.removeGuestDiv {
    padding-left: 20px;
}
.removeGuestBtn {
    padding: 5px 10px 5px 10px;
    border: 1px solid rgb(24, 93, 133);
    border-radius: 5px;
    background-color: white;
    color: rgb(24, 93, 133);
    box-shadow: 0 0 3px #000000;
    cursor:pointer;
}
.inputField {
    display: flex;
    flex-direction: column;
}
.inputs {
    width: 100%;
    border: 1px solid rgb(24, 93, 133);
    padding: 10px 15px;
    margin-top: 15px;
    border-radius: 10px;
    font-size: 14pt;
}
.btn {
    background-color: #fff;
    padding: 10px 15px;
    color: rgb(24, 93, 133);
    border: 1px solid rgb(24, 93, 133);
    border-radius: 5px;
    cursor:pointer;
}
.addGuestbtn {
    font-size: 15px;
    margin-top: 30px;
    margin-bottom: 30px;
    background: #c9ffe8;
    color: rgb(24, 93, 133);

    
}

.add10Guestbtn {
    font-size: 15px;
    margin-top: 0px;
    margin-bottom: 20px;
    background: #c9fffb;
    color: rgb(24, 93, 133);
}

.send {
    margin: auto;
    margin-top: 30px;
    margin-bottom: 30px;
    font-size: 14pt;
    box-shadow: 0 0 30px #9effd7;
    
}
.sendButton {
    margin: auto;
    display: flex;
    justify-content: center;
}
.pressed {
    background:#a2fdd7;
    box-shadow: 0 0 40px #9effd7;
    color: black;
}


@media screen and (max-width: 768px) {
    .guestForm {
    flex-direction: column;
}
.inputField {
    justify-content: center;
}
.guestsList{
    min-width: 345px;
    max-width: 80%;
    padding-bottom: 30px;
}
.askGuests {
    min-width: 290px;
    max-width: fit-content;
    margin-left: auto;
    margin-right: auto;
}
.askGuestsMoreButton {
    font-size: 15px;
    padding: 30px 0px 30px 0px;
}
}

@media screen and (max-width: 376px) {
.askGuestsMoreButton {
    font-size: 15px;
    padding: 30px 0px 30px 0px;
}
.guestsList{
    min-width: 300px;
    max-width: 80%;
    padding-bottom: 30px;
}
}
</style>
