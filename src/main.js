import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
//引入axios
import axios from "axios";
Vue.prototype.$http = axios;
//引入底部菜单
import { Tabbar, TabbarItem } from "vant";
Vue.use(Tabbar);
Vue.use(TabbarItem);
import "vant/lib/index.css";
//引入全局css
import "../public/css/iconfont.css";
// import "../public/css/iconfont.ttf";
import "../public/css/iconfont.js";

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
