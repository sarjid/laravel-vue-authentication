import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import router from "./router";
import "./style.css";
import FontAwesomeIcon from "./assets/fontawesome";
import App from "./App.vue";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
const app = createApp(App);
app.use(pinia);
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
