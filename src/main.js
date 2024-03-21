import { createPinia } from 'pinia'

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { vOnClickOutside } from '@vueuse/components'

createApp(App).use(createPinia()).use(router).use(vOnClickOutside).mount("#app");

