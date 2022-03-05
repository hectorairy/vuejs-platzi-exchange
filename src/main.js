import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";
import routes from "@/routes";
import { dollarFilter, percentFilter } from "@/filters";

Vue.filter("dollar", dollarFilter);
Vue.filter("percent", percentFilter);
Vue.config.productionTip = false;

new Vue({
  router: routes,

  render: (h) => h(App),
}).$mount("#app");
