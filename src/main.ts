import App from './App.vue'
import { createApp } from 'vue'
import './assets/styles/index.css'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(fas)

createApp(App).mount('#app')
