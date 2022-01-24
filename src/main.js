import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import './assets/scss/base/_reset.scss'
import './assets/scss/index.scss'

createApp(App).use(router).mount('#app')
