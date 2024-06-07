import { createApp } from "vue";
import store from "./store/index";
import "./style.css";
import App from "./App.vue";
import router from "./routes/routes";

createApp(App).use(store).use(router).mount("#app");
