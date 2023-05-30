import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import "virtual:uno.css";


const app = createApp(App);
app.use(createPinia());
app.mount("#app");
