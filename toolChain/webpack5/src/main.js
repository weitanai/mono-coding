import { createApp } from 'vue'
import App from './App.vue'


const app = createApp(App)
app.config.errorHandler = function (err, vm, info) {
    console.log('errorHandle:---', err)
  }
app.mount('#app');