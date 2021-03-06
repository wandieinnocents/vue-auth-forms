import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// import bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css';
// global css 
import '@/assets/css/main.css'

createApp(App).use(router).mount("#app");
