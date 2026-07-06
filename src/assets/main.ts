import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css' // 確保只引入我們加了 Tailwind 的這行

const app = createApp(App)

app.use(router)
app.mount('#app')