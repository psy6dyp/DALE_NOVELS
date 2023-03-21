import { createApp } from 'vue'
import i18n from './i18n'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import axios from 'axios'
// import Web3 from 'web3'
const app = createApp(App)
// app.config.globalProperties.$Web3 = Web3
app.use(createPinia())
app.use(i18n)
app.use(router)
app.mount('#app')
