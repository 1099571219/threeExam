import { createApp } from 'vue'
import './style.css'
import App from './view/Home.vue'
import router from './router/index'
import section from './components/section.vue'

const app = createApp(App)
app.config.globalProperties.$section = section;

app.use(router).mount('#app')
