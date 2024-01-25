import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';

import App from './App.vue'
import router from './router'

import 'primeicons/primeicons.css'
import 'primevue/resources/themes/md-light-indigo/theme.css'

const app = createApp(App)
app.use(PrimeVue)
app.use(createPinia())
app.use(router)

app.mount('#app')
