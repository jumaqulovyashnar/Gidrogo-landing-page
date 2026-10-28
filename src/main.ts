import { createApp } from 'vue'
import '@/app/styles/index.css'
import { router } from '@/app/providers/router'
import App from './App.vue'

const app = createApp(App)

app.use(router)
app.mount('#app')
