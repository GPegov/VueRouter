<template>
    <div class="guest-manager">
        <div class="header">
            <h1>Управление гостями</h1>
            <p class="subtitle">Добавьте и редактируйте список гостей</p>
        </div>

        <div class="add-guest-form">
            <div class="input-group">
                <input ref="nameInput" type="text" placeholder="Имя гостя" v-model="store.guest.name"
                    @keyup.enter="handleAddGuest" class="input-field">
                <input ref="descInput" type="text" placeholder="Фамилия гостя" v-model="store.guest.surname"
                    @keyup.enter="handleAddGuest" class="input-field">
            </div>

            <div class="button-group">
                <button @click="handleAddGuest" :disabled="!isFormValid" class="submit-btn">
                    <span v-if="!isLoading">Добавить гостя</span>
                    <span v-else class="loader"></span>
                </button>

                <button @click="loadFromDb" class="load-btn" :disabled="isLoading">
                    <span v-if="!isLoading">Загрузить из db.json</span>
                    <span v-else class="loader"></span>
                </button>
            </div>
        </div>

        <div class="guest-list-container">
            <transition name="fade" mode="out-in">
                <div v-if="store.guests.length" class="guest-list">
                    <div v-for="group in store.guests" :key="group.id" class="guest-group">
                        <div class="group-header">
                            <h3>Группа от {{ group.date }}</h3>
                            <button @click="prepareDeleteGroup(group.id)" class="delete-group-btn"
                                title="Удалить группу">
                                Удалить группу
                            </button>
                        </div>

                        <transition-group name="list" tag="div">
                            <div v-for="guest in group.guests" :key="guest.id" class="guest-item">
                                <div class="guest-info">
                                    <span class="guest-name">{{ guest.name }}</span>
                                    <span class="guest-surname">{{ guest.surname }}</span>
                                </div>

                                <button @click="prepareDeleteGuest(group.id, guest.id)" class="delete-btn"
                                    title="Удалить">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                                        <path
                                            d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z" />
                                    </svg>
                                </button>
                            </div>
                        </transition-group>
                    </div>
                </div>

                <div v-else class="empty-state">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                    <p>Список гостей пуст</p>
                    <p>Добавьте первого гостя или загрузите из файла</p>
                </div>
            </transition>
        </div>

        <transition name="fade">
            <div v-if="error" class="error-message">
                {{ error }}
                <button @click="error = null" class="close-error-btn">×</button>
            </div>
        </transition>

        <transition name="fade">
            <div v-if="showConfirmModal" class="modal-overlay" @click.self="cancelAction">
                <div class="modal-content">
                    <h3>{{ confirmMessage }}</h3>
                    <div class="modal-buttons">
                        <button @click.stop="confirmAction" class="confirm-btn">Да, удалить</button>
                        <button @click.stop="cancelAction" class="cancel-btn">Отмена</button>
                    </div>
                </div>
            </div>
        </transition>

    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useVariables } from '@/stores/Variables.js'

const store = useVariables()
const isLoading = ref(false)
const error = ref(null)
const nameInput = ref(null)
const descInput = ref(null)

const showConfirmModal = ref(false)
const confirmMessage = ref('')
const actionToConfirm = ref(null)
const currentGroupId = ref(null)
const currentGuestId = ref(null)

const isFormValid = computed(() => {
    return store.guest.name.trim() && store.guest.surname.trim()
})

// Подготовка удаления группы
const prepareDeleteGroup = (groupId) => {
    currentGroupId.value = groupId
    confirmMessage.value = 'Вы уверены, что хотите удалить эту группу гостей?'
    actionToConfirm.value = 'deleteGroup'
    showConfirmModal.value = true
}

// Подготовка удаления гостя
const prepareDeleteGuest = (groupId, guestId) => {
    currentGroupId.value = groupId
    currentGuestId.value = guestId
    confirmMessage.value = 'Вы уверены, что хотите удалить этого гостя?'
    actionToConfirm.value = 'deleteGuest'
    showConfirmModal.value = true
}

// Подтверждение действия
const confirmAction = async () => {
    showConfirmModal.value = false

    if (actionToConfirm.value === 'deleteGroup') {
        await handleDeleteGuestGroup(currentGroupId.value)
    } else if (actionToConfirm.value === 'deleteGuest') {
        await handleDeleteGuest(currentGroupId.value, currentGuestId.value)
    }
}

// Отмена действия
const cancelAction = () => {
    showConfirmModal.value = false
}



const hideKeyboard = () => {
    nameInput.value?.blur()
    descInput.value?.blur()

    const tmpInput = document.createElement('input')
    tmpInput.style.position = 'absolute'
    tmpInput.style.top = '-100px'
    document.body.appendChild(tmpInput)
    tmpInput.focus()
    setTimeout(() => {
        tmpInput.blur()
        document.body.removeChild(tmpInput)
    }, 100)
}

const loadFromDb = async () => {
    try {
        isLoading.value = true
        error.value = null

        const response = await fetch('http://localhost:4000/guests', {
            cache: 'no-store' // Полностью отключаем кэширование
        })

        if (!response.ok) {
            throw new Error(`Ошибка загрузки: ${response.status}`)
        }

        const data = await response.json()
        store.guests = data

    } catch (err) {
        error.value = err.message
        console.error('Ошибка fetch:', err)
    } finally {
        isLoading.value = false
    }
}



const handleAddGuest = async () => {
    if (!isFormValid.value) return

    try {
        isLoading.value = true
        error.value = null

        const success = await store.saveGuest()
        if (success) {
            hideKeyboard()
            await loadFromDb() // Обновляем данные после добавления
        }
    } catch (err) {
        error.value = `Ошибка при добавлении: ${err.message}`
        console.error('Ошибка при добавлении гостя:', err)
    } finally {
        isLoading.value = false
    }
}

const handleDeleteGuestGroup = async (groupId) => {
    try {
        isLoading.value = true
        error.value = null

        const response = await fetch(`http://localhost:4000/guest-groups/${groupId}`, {
            method: 'DELETE'
        })

        const result = await response.json()

        if (!result.success) {
            throw new Error(result.error || 'Failed to delete group')
        }

        store.guests = store.guests.filter(g => g.id !== groupId)

    } catch (err) {
        error.value = `Delete error: ${err.message}`
        console.error('Error:', err)
    } finally {
        isLoading.value = false
    }
}

const handleDeleteGuest = async (groupId, guestId) => {
    try {
        isLoading.value = true
        error.value = null

        const response = await fetch(
            `http://localhost:4000/groups/${groupId}/guests/${guestId}`,
            { method: 'DELETE' }
        )

        const result = await response.json()

        if (!result.success) {
            throw new Error(result.error || 'Failed to delete guest')
        }

        store.guests = store.guests.map(group => {
            if (group.id === groupId) {
                return {
                    ...group,
                    guests: group.guests.filter(g => g.id !== guestId)
                }
            }
            return group
        })

    } catch (err) {
        error.value = `Delete error: ${err.message}`
        console.error('Error:', err)
    } finally {
        isLoading.value = false
    }
}

onMounted(() => {
    loadFromDb()
})

onMounted(() => {
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && showConfirmModal.value) {
      cancelAction()
    }
  })
})
</script>

<style scoped>
.guest-group {
    margin-bottom: 2rem;
    padding: 1rem;
    background: #f0f8ff;
    border-radius: 8px;
}

.group-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
}

.delete-group-btn {
    background-color: #e74c3c;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s;
}

.delete-group-btn:hover {
    background-color: #c0392b;
}

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

.add-guest-form {
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

.button-group {
    display: flex;
    gap: 1rem;
}

.submit-btn {
    flex: 1;
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

.load-btn {
    flex: 1;
    padding: 0.75rem;
    background-color: #2ecc71;
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

.load-btn:hover {
    background-color: #27ae60;
}

.submit-btn:disabled,
.load-btn:disabled {
    background-color: #bdc3c7;
    cursor: not-allowed;
}

.loader {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 3px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    border-top-color: white;
    animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

.guest-list-container {
    background: #fff;
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
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
}

.guest-name {
    font-weight: 500;
    color: #2c3e50;
}

.guest-surname {
    font-size: 0.875rem;
    color: #7f8c8d;
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

.empty-state {
    text-align: center;
    padding: 2rem;
    color: #7f8c8d;
}

.empty-state svg {
    margin-bottom: 1rem;
    color: #bdc3c7;
}

.empty-state p:first-of-type {
    font-weight: 500;
    margin-bottom: 0.5rem;
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

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3); /* Уменьшили прозрачность */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}

.modal-content {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 400px;
  width: 90%;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  pointer-events: auto; /* Важно: позволяет взаимодействовать с содержимым */
  z-index: 3;
}

.modal-content h3 {
    margin-top: 0;
    color: #2c3e50;
}

.modal-buttons {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    margin-top: 1.5rem;
}

.confirm-btn {
    background-color: #e74c3c;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s;
}

.confirm-btn:hover {
    background-color: #c0392b;
}

.cancel-btn {
    background-color: #ecf0f1;
    color: #2c3e50;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s;
}

.cancel-btn:hover {
    background-color: #bdc3c7;
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

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

@media (max-width: 600px) {
    .input-group {
        grid-template-columns: 1fr;
    }

    .button-group {
        flex-direction: column;
    }

    .guest-manager {
        padding: 1rem;
    }
}
</style>