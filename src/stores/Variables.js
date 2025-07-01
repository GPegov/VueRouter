import { defineStore } from "pinia";

export const useVariables = defineStore("variables", {
  state: () => ({
    guests: [],
    guest: {
      name: "",
      surname: "",
      properties: {
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
    },
    showToast: false,
    popupTrigger: false,
  }),

  actions: {
    async saveGuest() {
      if (!this.guest.name.trim() || !this.guest.surname.trim()) {
        this.triggerToast();
        return false;
      }

      this.guests.unshift({
        id: Date.now(),
        name: this.guest.name.trim(),
        surname: this.guest.surname.trim(),
        properties: { ...this.guest.properties }, // Копируем текущие свойства
      });

      // Сбрасываем только имя и фамилию
      this.guest.name = "";
      this.guest.surname = "";

      return true;
    },

    resetGuestProperties() {
      this.guest.properties = {
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

    async submitGuestGroup() {
      if (this.guests.length === 0) {
        this.triggerToast();
        return;
      }

      try {
        const response = await fetch("http://localhost:4000/guest-groups", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: Date.now(),
            date: new Date().toLocaleString("ru-RU"),
            guests: this.guests,
          }),
        });

        if (!response.ok) throw new Error("Ошибка сервера");

        this.resetForm();
        this.popupTriggerTimeout();
      } catch (error) {
        console.error("Ошибка сохранения:", error);
        this.triggerToast();
      }
    },

    // saveGuest() {
    //   if (!this.guest.name.trim() || !this.guest.surname.trim()) {
    //     this.triggerToast();
    //     return;
    //   }

    //   this.guests.unshift({
    //     id: Date.now(),
    //     name: this.guest.name.trim(),
    //     surname: this.guest.surname.trim(),
    //   });

    //   this.guest.name = "";
    //   this.guest.surname = "";
    // },

    deleteGuest(id) {
      this.guests = this.guests.filter((guest) => guest.id !== id);
      if (this.guests.length === 0) {
        this.resetFamilyProperties();
      }
    },

    async askGuestsResult() {
      if (this.guests.length === 0) {
        this.triggerToast();
        return;
      }

      try {
        const response = await fetch("http://192.168.1.169:4000/guests", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            date: new Date().toLocaleString("ru-RU"),
            guests: this.guests,
            properties: this.familyProperties,
          }),
        });

        if (!response.ok) throw new Error("Ошибка сервера");

        this.resetForm();
        this.popupTriggerTimeout();
      } catch (error) {
        console.error("Ошибка сохранения:", error);
        this.triggerToast();
      }
    },

    resetForm() {
      this.guests = [];
      this.resetFamilyProperties();
    },

    resetFamilyProperties() {
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
      };
    },

    triggerToast() {
      this.showToast = true;
      setTimeout(() => (this.showToast = false), 2000);
    },

    popupTriggerTimeout() {
      this.popupTrigger = true;
      setTimeout(() => (this.popupTrigger = false), 2000);
    },

    save10Guest() {
      const testGuests = [
        { name: "Вася", surname: "Рогов", id: 1 },
        { name: "Мария", surname: "Иванова", id: 2 },
        { name: "Алексей", surname: "Петров", id: 3 },
        { name: "Ольга", surname: "Сидорова", id: 4 },
        { name: "Дмитрий", surname: "Смирнов", id: 5 },
        { name: "Анна", surname: "Кузнецова", id: 6 },
        { name: "Иван", surname: "Васильев", id: 7 },
        { name: "Елена", surname: "Павлова", id: 8 },
        { name: "Сергей", surname: "Семёнов", id: 9 },
        { name: "Татьяна", surname: "Фёдорова", id: 10 },
      ];

      this.guests = [...testGuests, ...this.guests];
    },

    //   askGuestsResult () {
    //     this.formResults.push({Guests: this.guests, Properties: this.familyProperties})

    //     fetch('http://localhost:4000/guests', {
    //     method: 'POST',
    //     body: JSON.stringify({
    //         data: this.formResults
    //     }),
    //     headers: {
    //         'Content-type': 'application/json; charset=UTF-8',
    //     }
    // })

    //     this.guests = []
    //     this.formResults = []
    //     this.familyProperties = {
    //         alone: false,
    //         couple: false,
    //         withChildren: false,
    //         withoutChildren: false,
    //         onCar: false,
    //         needTransfer: false,
    //         foodDoesntMatter: false,
    //         foodMeat: false,
    //         foodFish: false
    //     }
    // },
    //  triggerToast () {
    //     this.showToast = true;
    //     setTimeout(() => this.showToast = false, 2000)
    // },
    // popupTriggerTimeout () {
    //     this.popupTrigger = true;
    //     setTimeout(() => this.popupTrigger = false, 2000)
    // },
    // save10Guest () {

    //     this.guests = [
    //         {name: "Вася", surname: "Рогов", id: Math.random()},
    //         {name: "Тётя", surname: "Мотя", id: Math.random()},
    //         {name: "Вася", surname: "Рогов", id: Math.random()},
    //         {name: "Тётя", surname: "Мотя", id: Math.random()},
    //         {name: "Вася", surname: "Рогов", id: Math.random()},
    //         {name: "Тётя", surname: "Мотя", id: Math.random()},
    //         {name: "Вася", surname: "Рогов", id: Math.random()},
    //         {name: "Тётя", surname: "Мотя", id: Math.random()},
    //         {name: "Вася", surname: "Рогов", id: Math.random()},
    //         {name: "Тётя", surname: "Мотя", id: Math.random()},
    //         ... this.guests]
    // }
  },
  getters: {
    isFormValid() {
      return (
        this.guest.name.trim().length > 0 &&
        this.guest.surname.trim().length > 0
      );
    },
  },
});
