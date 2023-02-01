import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//route import edilmiş
//.use(router) --> kullanılacağını söylemiş

createApp(App).use(router).mount('#app')
