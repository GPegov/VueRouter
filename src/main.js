import { createPinia } from 'pinia'

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { vOnClickOutside } from '@vueuse/components';
import VueSmoothScroll from 'vue3-smooth-scroll';
import { Vue3Geolocation } from 'vue3-geolocation';



import ymapsVueComponents from 'ymaps-vue-components';





createApp(App)
            .use(createPinia())
            .use(router)
            .use(vOnClickOutside)
            .use(VueSmoothScroll, {duration: 700, updateHistory: false})
            .use(Vue3Geolocation)
            .use(ymapsVueComponents)
            
            
            .mount("#app");

