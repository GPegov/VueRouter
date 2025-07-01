<template>
    <div class="guest-manager">
        <div class="header">
            <h1>Управление гостями</h1>
            <p class="subtitle">Добавьте и редактируйте список гостей</p>
        </div>

        <!-- Форма добавления гостя -->
        <div class="add-guest-form">
            <div class="input-group">
                <input ref="nameInput" type="text" placeholder="Имя гостя" v-model="store.guest.name"
                     class="input-field">
                <input ref="descInput" type="text" placeholder="Фамилия гостя" v-model="store.guest.surname"
                     class="input-field">
            </div>
            
        



        <!-- Ряды кнопок с параметрами -->
        <div class="properties-section" v-if="store.isFormValid">
            <!-- 1-й ряд: Один/одна или с парой -->
            <transition name="collapse" mode="out-in">
                <div class="properties-row">
                    <button class="property-btn" :class="{ 'active': store.guest.properties.alone }"
                        @click="toggleProperty('alone')">
                        Один/одна
                    </button>
                    <button class="property-btn" :class="{ 'active': store.guest.properties.couple }"
                        @click="toggleProperty('couple')">
                        С парой
                    </button>
                </div>
            </transition>

            <!-- 2-й ряд: С детьми или без -->
            <transition name="collapse" mode="out-in">
                <div class="properties-row" v-if="
                    (store.guest.properties.alone || store.guest.properties.couple)">
                    <button class="property-btn" :class="{ 'active': store.guest.properties.withChildren }"
                        @click="toggleProperty('withChildren')">
                        С детьми
                    </button>
                    <button class="property-btn" :class="{ 'active': store.guest.properties.withoutChildren }"
                        @click="toggleProperty('withoutChildren')">
                        Без детей
                    </button>
                </div>
            </transition>

            <!-- 3-й ряд: На машине или трансфер -->
            <transition name="collapse" mode="out-in">
                <div class="properties-row" v-if="
                    (store.guest.properties.withChildren || store.guest.properties.withoutChildren)">
                    <button class="property-btn" :class="{ 'active': store.guest.properties.onCar }"
                        @click="toggleProperty('onCar')">
                        На машине
                    </button>
                    <button class="property-btn" :class="{ 'active': store.guest.properties.needTransfer }"
                        @click="toggleProperty('needTransfer')">
                        Нужен трансфер
                    </button>
                </div>
            </transition>

            <!-- 4-й ряд: Предпочтения по еде -->
            <transition name="collapse" mode="out-in">
                <div class="properties-row" v-if="
                    (store.guest.properties.onCar || store.guest.properties.needTransfer)">
                    <button class="property-btn" :class="{ 'active': store.guest.properties.foodMeat }"
                        @click="toggleProperty('foodMeat')">
                        Мясо
                    </button>
                    <button class="property-btn" :class="{ 'active': store.guest.properties.foodFish }"
                        @click="toggleProperty('foodFish')">
                        Рыба
                    </button>
                </div>
            </transition>

            <!-- Кнопка добавления следующего гостя -->
            <!-- <transition name="fade">
                <button v-if="showAddNextButton" @click="allowAddNextGuest" class="add-next-btn">
                    Добавить следующего гостя
                </button>
            </transition> -->
        </div>

        <!-- Список добавленных гостей -->
        <div class="guest-list-container" v-if="store.guests.length > 0">
            <transition-group name="list" tag="div">
                <div v-for="guest in store.guests" :key="guest.id" class="guest-item">
                    <div class="guest-info">
                        <span class="guest-name">{{ guest.name }} {{ guest.surname }}</span>
                        <div class="guest-properties-icons">
                            <span v-if="guest.properties.alone">👤</span>
                            <span v-if="guest.properties.couple">👫</span>
                            <span v-if="guest.properties.withChildren">👪</span>
                            <span v-if="guest.properties.onCar">🚗</span>
                            <span v-if="guest.properties.needTransfer">🚌</span>
                            <span v-if="guest.properties.foodMeat">🍖</span>
                            <span v-if="guest.properties.foodFish">🐟</span>
                        </div>
                    </div>
                    <button @click="store.deleteGuest(guest.id)" class="delete-btn" title="Удалить">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                            <path
                                d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z" />
                        </svg>
                    </button>
                </div>
            </transition-group>
        </div>

        <button 
                @click="handleAddGuest" 
                @keyup.enter="handleAddGuest"
                :disabled="!store.isFormValid" class="submit-btn">
                Добавить гостя
            </button>
        </div>


        <!-- Кнопка подтверждения -->
        <transition name="fade">
            <div class="confirm-section" v-if="store.guests.length > 0 && 
                (store.guest.name == 0 && store.guest.surname == 0)">
                <button class="confirm-btn" @click="confirmPresence">
                    Закончить заполнение и отправить данные гостей
                </button>
            </div>
        </transition>

        <!-- Сообщение о добавлении гостя -->
        <transition name="fade">
            <div v-if="guestAddedMessage" class="guest-added-message">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                Гость добавлен!
            </div>
        </transition>

        <transition name="fade">
            <div v-if="error" class="error-message">
                {{ error }}
                <button @click="error = null" class="close-error-btn">×</button>
            </div>
        </transition>

        <transition name="fade">
            <MyPopup v-if="store.popupTrigger">
                <h3>Данные отправлены</h3>
                <h3>Мы будем рады видеть вас на нашем торжестве!</h3>
            </MyPopup>
        </transition>
    </div>
</template>






<script setup>
import { ref } from 'vue'
import { useVariables } from '@/stores/Variables.js'
import MyPopup from '@/components/MyPopup.vue'

const store = useVariables()
const error = ref(null)
const nameInput = ref(null)
const descInput = ref(null)
const guestAddedMessage = ref(false)


const confirmPresence = async () => {
  try {
    if (store.guests.length === 0) {
      error.value = 'Добавьте хотя бы одного гостя';
      return;
    }

    await store.submitGuestGroup();
  } catch (err) {
    error.value = 'Ошибка при сохранении данных';
    console.error('Ошибка:', err);
  }
};



const toggleProperty = (prop) => {
    // Логика взаимоисключающих свойств
    if (prop === 'alone') {
        store.guest.properties.couple = false
    } else if (prop === 'couple') {
        store.guest.properties.alone = false
    } else if (prop === 'withChildren') {
        store.guest.properties.withoutChildren = false
    } else if (prop === 'withoutChildren') {
        store.guest.properties.withChildren = false
    } else if (prop === 'onCar') {
        store.guest.properties.needTransfer = false
    } else if (prop === 'needTransfer') {
        store.guest.properties.onCar = false
    } else if (prop === 'foodMeat') {
        store.guest.properties.foodFish = false
    } else if (prop === 'foodFish') {
        store.guest.properties.foodMeat = false
    }
    // Переключаем выбранное свойство
    store.guest.properties[prop] = !store.guest.properties[prop]
}





const handleAddGuest = async () => {
  if (!store.guest.name.trim() || !store.guest.surname.trim()) {
    error.value = 'Введите имя и фамилию гостя'
    return
  }

  try {
    const success = await store.saveGuest()
    if (success) {
      store.resetGuestProperties() // Сбрасываем параметры через хранилище
      
      guestAddedMessage.value = true
      setTimeout(() => {
        guestAddedMessage.value = false
      }, 3000)
    }
  } catch (err) {
    error.value = 'Ошибка при добавлении гостя'
    console.error(err)
  }
}





</script>






<style scoped>

.guest-manager {
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.header {
    text-align: center;
    margin-bottom: 2rem;
}

.header h1 {
    font-size: 1.8rem;
    color: #2c3e50;
    margin-bottom: 0.5rem;
}

.subtitle {
    color: #7f8c8d;
    font-size: 1rem;
}

.guest-form {
    background: #fff;
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    margin-bottom: 2rem;
}

.input-group {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-bottom: 1rem;
}

.input-field {
    padding: 0.75rem 1rem;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 1rem;
    transition: border-color 0.3s;
}

.input-field:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
}

.properties-section {
    margin-bottom: 1.5rem;
}

.properties-row {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
    justify-content: center;
}

.property-btn {
    padding: 0.75rem 1.5rem;
    background: #e9ecef;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s;
    font-size: 1rem;
}

.property-btn.active {
    background: #3498db;
    color: white;
    box-shadow: 0 0 10px rgba(52, 152, 219, 0.5);
}

.submit-btn {
    width: 100%;
    padding: 0.75rem;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.3s;
}

.submit-btn:hover {
    background-color: #2980b9;
}

.submit-btn:disabled {
    background-color: #bdc3c7;
    cursor: not-allowed;
}

.guest-list-container {
    background: #fff;
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    margin-bottom: 2rem;
}

.guest-list {
    display: grid;
    gap: 0.75rem;
}

.guest-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background: #f8f9fa;
    border-radius: 6px;
    transition: all 0.3s;
}

.guest-info {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}

.guest-name {
    font-weight: 500;
    color: #2c3e50;
    margin-bottom: 0.5rem;
}

.guest-properties-icons {
    display: flex;
    gap: 0.5rem;
    font-size: 1.2rem;
}

.delete-btn {
    background: none;
    border: none;
    color: #e74c3c;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 4px;
    transition: background-color 0.2s;
}

.delete-btn:hover {
    background-color: rgba(231, 76, 60, 0.1);
}

.confirm-section {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
}

.confirm-btn {
    padding: 1rem 2rem;
    background-color: #2ecc71;
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 1.1rem;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.3s;
    box-shadow: 0 2px 15px rgba(46, 204, 113, 0.3);
}

.confirm-btn:hover {
    background-color: #27ae60;
}

.error-message {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #e74c3c;
    color: white;
    padding: 1rem 2rem;
    border-radius: 6px;
    display: flex;
    align-items: center;
    gap: 1rem;
    z-index: 1000;
}

.close-error-btn {
    background: none;
    border: none;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    padding: 0;
    margin-left: 1rem;
}

/* Анимации */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.list-enter-active,
.list-leave-active {
    transition: all 0.3s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

.list-move {
    transition: transform 0.3s ease;
}

@media (max-width: 600px) {
    .input-group {
        grid-template-columns: 1fr;
    }

    .guest-manager {
        padding: 1rem;
    }

    .properties-row {
        flex-direction: column;
        gap: 0.5rem;
    }
}
</style>