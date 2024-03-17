import { defineStore } from 'pinia'

export const usePersonification = defineStore('personification', {
    state: () => ({
        bridesName: 'Екатерина Олеговна',
        groomsName: 'Виталий Сергеевич',
    //Parents
        bridesFatherFullName: 'Олег Рудольфович Вейнер',
        bridesFatherWithMiddleName: 'Олег Рудольфович',
        bridesFatherOccupation: 'Главный инженер ООО «Газпром трансгаз Санкт-Петербург»',
        
        bridesMotherFullName: 'Марианна Владимировна Вейнер',
        bridesMotherWithMiddleName: 'Марианна Владимировна',
        bridesMotherOccupation: 'Владелица сети салонов цветов "Гортензия"',
        
        groomsFatherFullName: 'Сергей Виталиевич Беспалов',
        groomsFatherWithMiddleName: 'Сергей Виталиевич',
        groomsFatherOccupation: 'Сварщик VI разряда. Почётный работник ОАО "Воркутинский механический завод"',
        
        groomsMotherFullName: 'Екатерина Андреевна Беспалова',
        groomsMotherWithMiddleName: 'Екатерина Андреевна',
        groomsMotherOccupation: 'Швея высшей категории. Сотрудница ОАО "Воркутинская швейная фабрика"',
    
    //Nephews
        nephew_1: 'Юлия Беспалова',
        nephew_2: 'Никанор Беспалов',
        nephew_3: 'Лариса Натынзина',
        nephew_4: 'Владимир Натынзин',
        nephew_5: 'Виолетта Родионова',
        nephew_6: 'Максим Родионов',
        nephew_7: 'Оля Родионова',
        nephew_8: 'Настя Родионова',
        
        
    //Friends
        friend_1: 'Марина',
        friend_2: 'Денис',
        friend_3: 'Валера',
        friend_4: 'Наташа',
        friend_5: 'Игорь',
        friend_6: 'Юля',
        friend_7: 'Лера',
        friend_8: 'Максим',
    //Heading
        namesOfBrideAndGroomHeading: '',
        dateOfMarriage: 'Торжество состоится 17 апреля 2024г. в 15.00',
        headingParagraphSugaryIntro_1: 'Все вы знаете их как любимых родственников, верных друзей и надёжных коллег но наступит день, и мы больше не сможем воспринимать их отдельно друг от друга!',
        headingParagraphSugaryIntro_2: 'В этот день два любящих сердца соединятся воедино, и появится новая, счастливая семья!',
        headingParagraphSugaryIntro_3: 'Они будут рады видеть Вас и Ваших спутников на своём свадебном торжестве!',
    //Ceremony
        ceremonyPlaceName: 'Территориальный отдел ЗАГСа г. Воркуты',
        ceremonyAddress: 'Адрес: г. Воркута, ул. Ленина д. 54',
    //Banquet
        banquetPlaceName: 'Семейный ресторан "OLIVA"',
        banquetAddress: 'г. Воркута, ул. Мира 15',


    })
})