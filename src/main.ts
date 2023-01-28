import { createApp } from 'vue'
import './assets/style.css'
import App from './App.vue'

import { RouterConfigs } from './routes/index'

const app = createApp(App)
app.use(RouterConfigs)
app.mount('#app')
