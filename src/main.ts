import App from "@/App";
import contexts from "@/contexts";
import router from "@/router";
import "@/styles";
import { createApp } from "vue";

createApp(App).use(contexts).use(router).mount("#app");
