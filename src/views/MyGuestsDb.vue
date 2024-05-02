<template>

    <div class="container">
        <div>
            <input type="text" placeholder="Введите имя гостя" v-model="newGuestName">
            <input type="text" placeholder="Введите описание гостя" v-model="newGuestSurname">
            <button @click="addGuest">
                Отправить
            </button>

        </div>
        <div v-if="guests.length">
            <div v-for="guest in guests" :key="guest.id">
                <div class="guestItem">
                    {{ guest.name }}: {{ guest.surname }}
                    <button class="delete" @click="deleteGuestInDb(guest.id)">Delete</button>

                </div>

            </div>
        </div>
        <div v-else>
            Укажите гостей
        </div>

    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const fetchData = () => {
    fetch('http://localhost:3000/guests')
        .then(res => res.json())
        .then(data => guests.value = data)
        .catch(err => console.log(err.message))
}

const guests = ref([])

let newGuestName = ''
let newGuestSurname = ''

onMounted(() => {
    fetchData()
})

const addGuest = () => {
    if (newGuestName.length && newGuestSurname.length) {
        fetch('http://localhost:3000/guests', {
            method: 'POST',
            body: JSON.stringify({
                name: newGuestName,
                surname: newGuestSurname
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json))
            .then(() => fetchData())

        newGuestName = ''
        newGuestSurname = ''
    }
}

const deleteGuestInDb = (id) => {
    // guests.value = guests.value.filter(guest => guest.id != id)

    fetch('http://localhost:3000/guests/' + id, {
        method: "DELETE",
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    }).then(() => fetchData())
}
</script>

<style></style>