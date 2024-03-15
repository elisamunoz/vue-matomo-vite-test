import { createApp } from "vue";
import VueMatomo from "vue-matomo";
import "./style.css";
import App from "./App.vue";

const app = createApp(App);
app.use(VueMatomo, {
  // Configure your Matomo server and site by providing:
  host: "https://elisa-github.matomo.cloud/",
  siteId: 1,
});
app.mount("#app");
window._paq.push(["trackPageView"]); // To track a page view
