import { defineStore } from 'pinia'

export const useVariables = defineStore('variables', {
    state: () => ({
        guests: [],
        guest: {name: '', surname: ''},
        familyProperties: {
            alone: false,
            couple: false,
            withChildren: false,
            withoutChildren: false,
            onCar: false,
            needTransfer: false,
            foodDoesntMatter: false,
            foodMeat: false,
            foodFish: false,
            },
            formResults: []
    }),
    getters: {
        
    },
    actions: { 
        saveGuest (state) {
            this.guests.push(
                {id:Date.now(), 
                name: this.guest.name,
                surname: this.guest.surname
                }),
            this.guest.name = '',
            this.guest.surname = ''
            
        },
        deleteGuest (index) {
            this.guests.splice(index, 1)
            if (this.guests.length === 0) {
                this.familyProperties = {
                    alone: false,
                    couple: false,
                    withChildren: false,
                    withoutChildren: false,
                    onCar: false,
                    needTransfer: false,
                    foodDoesntMatter: false,
                    foodMeat: false,
                    foodFish: false,
                }
          }
        },
        askGuestsResult () {
            this.formResults.push({id: Date.now(), Guests: this.guests, Properties: this.familyProperties})
            this.guests = []
            this.familyProperties = {
                alone: false,
                couple: false,
                withChildren: false,
                withoutChildren: false,
                onCar: false,
                needTransfer: false,
                foodDoesntMatter: false,
                foodMeat: false,
                foodFish: false 
            }
        }
    }
})