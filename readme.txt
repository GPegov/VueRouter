21.03.24
		--DONE-- (installed custom directive on hiding dropdown menus on an outside click)
		--DONE-- (added autofocus on guest.name textarea when open MyAskGuests) 
	add focus on guest.surname textarea on pressing 'enter' 
	complete v-for cycle in Navigation.vue
		--DONE-- (have found out why the path to MySeatingPlan component is missing in the router)
	upload data from MyAskGuests component in MongoDB after pressing "submit" button
	develop "MyPersinification" component
22.03.2024
		--DONE-- (added horisontal centering of pressed buttons in MyAskGuests by scrolling)
	hide screen keyboard after adding a guest and focus on guest list
23.03.2024
		--	Done-- (add popup window after pressing "send" button in MyAskGuests)
	--in progress-- add transitions in vue router using "animate css" library and by setting absolute position to router component
25.03.2024
		--DONE-- (swapped "saveGuest" and "deleteGuest" functions to their more advanced versions)
	try deleting some unnesessary div's in MyAskGuests to help transitions work well. Stable copy of this component is in src folder
26.03.2024
	resolve problem with transition of guestlist div
27.03.2024
		--DONE-- (swapped saveGuest function with the one that uses .unshift() method)
	resolve a problem of having :key attribute in <transition-group>
28.03.2024
	extract transition in separate component with a <slot /> and use it in 'MyAskGuests'
	develop new set of buttons in 'MyAskGuests'using v-for cycle to apply <transition-group> correctly.
	Add material icons to 'MyAskGuests' and learn how to use them.
01.04.2024
		--DONE-- changed the style of buttons in 'MyAskGuests'
		--DONE-- added media inquiry for screens with width less than 375px in MyAskGuests   
03.04.2024 
		--DONE-- integrated a map in "MyPlace" component
04.04.2024
		--DONE-- added 2 placemarks on the map for place of marriage and reataurant
09.04.2024
		--DONE-- added a popup window on clicking submit button in MyAskGuests
01.05.2024
		--DONE-- try fetch method to interact with mongodb database
		--DONE-- try using json server instead of mongodb
	learn more about axios library
	learn more about node js
02.05.2024
	develop a component that takes guest data from json file or db and shows it in a table or so.
		--DONE-- send FormResults to MongoDb
		--Can't be done due to sanctions-- send formResults to MongoDB Atlas
21.07.2024 
	Edit layout of a desktop version
	Develop a server using my old laptop and store MongoDb database in it. (I will need static IP address for it, maybe I should find another solution)
	Pass any Nodejs course
	Learn more about IndexedDB
	Learn more about Docker

19.10.2024
	Complete MyPersonalisationForm.vue:
		- Set universal classes for rows of guests
		- Write a function that takes first names of Bride and Groom and insert them in special field in MyPersonalisationForm 

28.10.2024
	Switch sending guest data from mongoDB server to Json file. 
	Find and add pretty font for bride and Groom names on the main page
	Add button "Send" in the end of MyPersonalisationForm page to modify all reactive data listed in it. (maybe it's better to use Json instead of Pinia storage in that case)
  
30.10.2024
	Add changing Pinia storage values through input and textarea fields in MyPersonalisationForm 


*********---Long Break---*********

18.06.2025
	Реализовать умный скролл в механизме добавления и выбора параметров гостей. 
	Перемещение фокуса на первый ряд кнопок в MyAskGuests.vue после добавления гостя 
	Плавная анимация исчезнования кнопки "Отправить" 
	Использовать файл data.json для персонификации сайта

23.06.2025
	Сделать страницу для администрирования и удаления базы данных гостей и их параметров на основе информации файла db.json

25.06.2025
	После заполнения формы гостей два раза высвечивается "Данные отправлены"
		--DONE-- Разные стили кнопок в процессе выбора параметров гостей и при появлении кнопки "Отправить"

27.06.2025
	Нужно переделать MyAskGuests, чтобы каждый отдельный гость мог иметь свои собственные 
		параметры, а данная группа гостей сохранялась в единый объект. В компоненте MyGuestsDb.vue 
		добавить возможность удалять как отдельных гостей из группы так и всю группу целиком. 
	Добавить в компонент MyGuestsDb логику добавления гостей как в MyAskGuests, но для каждого 
		гостя нужно предоставлять выбор отдельных параметров. Потом эту логику портировать и в MyAskGuests

29.06.2025
	Не добавляется гость в MyGuestsDb.vue. Нужно реализовать логику, когда сначала указываются 
		имя и фамилия гостя, и как только они начинают быть отличны от 0, открывается первый ряд 
		кнопок выбора параметров гостя. При выборе всех параметров гостя активируется кнопка "Добавить гостя". 
		После добавления текущего гостя можно добавлять следующего. У добавленного гостя параметры его выбора 
		будут высвечиваться интуитивно-понятными пиктограммами возле имени.  
	Когда налажу новый механизм добавления гостей и их параметров, нужно будет портировать его в компонент 
		MyAskGuests.

01.07.2025
    В компоненте MyGuestsDb.vue гости сохраняются в правильном виде. Нужно добавить автоматическую 
	    загрузку списка групп гостей из db.json. 
	Настроить механизм выбора параметров гостей, чтобы второй ряд кнопок не пропадал при выборе. 


	




	
	   