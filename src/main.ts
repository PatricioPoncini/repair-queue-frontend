import './assets/index.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { CoCarAlt } from 'oh-vue-icons/icons'
addIcons(CoCarAlt)

const app = createApp(App)

app.use(createPinia())
app.component("v-icon", OhVueIcon);
app.use(router)

app.mount('#app')
