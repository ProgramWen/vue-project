import { createApp } from 'vue'
import App from './App.vue' // 確保這一行路徑是對的
import router from './router'
import './assets/main.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
