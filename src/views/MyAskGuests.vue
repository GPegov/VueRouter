<script setup>
import { useVariables } from '@/stores/Variables.js'
const storeVariables = useVariables()
</script>

<template>
    <h1 class="mainHeader">Подтвердите присутствие</h1>
    <div
    class="guestForm"
    >
        <form 
            class="addGuestsForm"
            @submit.prevent>
            <div class="inputField">
                <input 
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
               v-on:keyup.enter="storeVariables.saveGuest"
            >
                Добавить гостя
            </button>
        </form>

        <div class="askGuests">
            <div class="guestsList">
                <div 
                    class="guestItem" 
                    v-for = '(guest, index) in storeVariables.guests'
                    :key="guest.id"
                    >
                        <div class="guestName">
                            <div class="name">Имя: {{ guest.name }}</div>     
                            <div class="surname">Фамилия: {{ guest.surname }}</div> 
                        </div>
                        <div class="removeGuestDiv">
                            <button 
                            class="removeGuestBtn" 
                            @click="storeVariables.deleteGuest(index)"
                            >
                            Удалить
                            </button>
                        </div>
                </div>
            </div>

            <div class="askGuestsMore"
                v-if="(storeVariables.guests.length > 0)"
                >
                <div>
                    <button

                    class="askGuestsMoreButton"
                    :class="{pressed: storeVariables.familyProperties.alone}"
                    @click="storeVariables.familyProperties.alone = !storeVariables.familyProperties.alone,
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
                </div>
                <div>
                    <button

                class="askGuestsMoreButton"
                    :class="{pressed: storeVariables.familyProperties.couple}"
                    @click="storeVariables.familyProperties.couple = !storeVariables.familyProperties.couple,
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
                </div>
            </div>
            <div class="askGuestsMore"
                v-if="((storeVariables.guests.length > 0) && (storeVariables.familyProperties.alone || storeVariables.familyProperties.couple))"
                >

                <div>
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
                </div>
                <div>
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
                </div>
            </div>
            <div class="askGuestsMore"
                v-if="((storeVariables.guests.length > 0) && (storeVariables.familyProperties.withChildren || storeVariables.familyProperties.withoutChildren))"
            >
                <div>
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
                </div> 
                <div>
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
                </div> 
            
            </div>
            <div class="askGuestsMore"
                v-if="((storeVariables.guests.length > 0) && (storeVariables.familyProperties.onCar || storeVariables.familyProperties.needTransfer))" 
                name="Food">
                <div>
                    <button
                    class="askGuestsMoreButton"
                    :class="{pressed: storeVariables.familyProperties.foodDoesntMatter}"
                    @click="storeVariables.familyProperties.foodDoesntMatter = !storeVariables.familyProperties.foodDoesntMatter,
                            storeVariables.familyProperties.foodMeat = false,
                            storeVariables.familyProperties.foodFish = false
                            "
                    >
                        Не важно
                    </button>
                </div>
                <div>
                    <button
                    class="askGuestsMoreButton"
                    :class="{pressed: storeVariables.familyProperties.foodMeat}"
                    @click="storeVariables.familyProperties.foodMeat = !storeVariables.familyProperties.foodMeat,
                            storeVariables.familyProperties.foodFish = false,
                            storeVariables.familyProperties.foodDoesntMatter = false
                            "
                    >
                        Мясо
                    </button>
                </div>
                <div>
                    <button
                    class="askGuestsMoreButton"
                    :class="{pressed: storeVariables.familyProperties.foodFish}"
                    @click="storeVariables.familyProperties.foodFish = !storeVariables.familyProperties.foodFish,
                            storeVariables.familyProperties.foodDoesntMatter = false,
                            storeVariables.familyProperties.foodMeat = false
                            "
                    >
                        Рыба
                    </button>
                </div> 
            </div>

            <button 
            v-if="((storeVariables.familyProperties.foodDoesntMatter || storeVariables.familyProperties.foodMeat || storeVariables.familyProperties.foodFish) && (storeVariables.guests.length > 0))"
            class="btn send"
            @click="storeVariables.askGuestsResult
            "
            >
                Отправить
            </button>
        </div>

        
    </div>

</template>

<style scoped>

.guestForm {

    border: 1px solid rgb(24, 93, 133);
    max-width: 800px;
    padding: 10px;
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
    box-shadow: 0 0 5px #000000;
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
    margin-top: 30px;
    
    margin-bottom: 30px;
    background: #c9ffe8;
    color: rgb(24, 93, 133);

}
.askGuests {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 495.8px;
    justify-content: flex-start;
    
    
    
}
.askGuestsMore {
    display: flex;
    flex-direction: row;
    justify-content: center;
    min-width: 100%;
    padding-bottom: 20px;
}

.askGuestsMoreButton {
    border: 1px solid teal;
    
    padding: 15px 20px 15px 20px;
    margin-left: 30px;
    margin-right: 30px;
    margin-top: 30px;
    border-radius: 5px;
    background-color: #fffbe7;
    cursor: pointer;

    
}
.send {
    margin-top: 30px;
    margin-bottom: 30px;
    font-size: 14pt;
    box-shadow: 0 0 30px #9effd7;

}
.pressed {
    background:#a2fdd7;
    box-shadow: 0 0 40px #9effd7;
    color: black;
}


@media screen and (max-width: 800px) {
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
    margin: 5px;
}

}







</style>
