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
            formResults: [],
            showToast: false,
            popupTrigger:false
    }),
    getters: {
        
    },
    actions: { 
        // saveGuest () {
        //     const id = Date.now()
        //     if ( (this.guest.name.length) && (this.guest.surname.length ) ) {
        //         this.guests = [{name: this.guest.name, surname: this.guest.surname, id}, ... this.guests],
        //         this.guest.name = '',
        //         this.guest.surname = ''
        //     }
        //     else this.triggerToast()
        // },
        saveGuest () {
            const id = Date.now()
            if ( (this.guest.name.length) && (this.guest.surname.length ) ) {
                this.guests.unshift({name: this.guest.name, surname: this.guest.surname, id: id})
                this.guest.name = '',
                this.guest.surname = ''
            }
            else this.triggerToast()
        },



        deleteGuest (id) {
            this.guests = this.guests.filter(guest => guest.id != id)
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
        },
         triggerToast () {
            this.showToast = true;
            setTimeout(() => this.showToast = false, 2000)
        },
        popupTriggerTimeout () {
            this.popupTrigger = true;
            setTimeout(() => this.popupTrigger = false, 3000)
        },
        save10Guest () {
            
            this.guests = [
                {name: "Вася", surname: "Рогов", id: Math.random()},
                {name: "Тётя", surname: "Мотя", id: Math.random()},
                {name: "Вася", surname: "Рогов", id: Math.random()},
                {name: "Тётя", surname: "Мотя", id: Math.random()},
                {name: "Вася", surname: "Рогов", id: Math.random()},
                {name: "Тётя", surname: "Мотя", id: Math.random()},
                {name: "Вася", surname: "Рогов", id: Math.random()},
                {name: "Тётя", surname: "Мотя", id: Math.random()},
                {name: "Вася", surname: "Рогов", id: Math.random()},
                {name: "Тётя", surname: "Мотя", id: Math.random()},
                ... this.guests]
        }

    }


    // saveGuest () {
        //     if ( (this.guest.name.length != 0) && (this.guest.surname.length != 0) ) {
        //         this.guests.push(
        //         {id:Date.now(), 
        //         name: this.guest.name,
        //         surname: this.guest.surname
        //         }),
        //         this.guest.name = '',
        //         this.guest.surname = ''
        //     }
        //     else this.triggerToast()
            

        // },
        // deleteGuest (index) {
        //     this.guests.splice(index, 1)
        //     if (this.guests.length === 0) {
        //         this.familyProperties = {
        //             alone: false,
        //             couple: false,
        //             withChildren: false,
        //             withoutChildren: false,
        //             onCar: false,
        //             needTransfer: false,
        //             foodDoesntMatter: false,
        //             foodMeat: false,
        //             foodFish: false,
        //         }
        //   }
        // },
})