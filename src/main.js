import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
AOS.init({ once: true, duration: 1200, easing: "ease-in-out" });
createApp(App).mount("#app");
