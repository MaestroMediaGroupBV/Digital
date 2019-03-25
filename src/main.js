import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueFbChat from 'vue-facebook-chat' // https://www.npmjs.com/package/vue-facebook-chat
import {
    library
} from '@fortawesome/fontawesome-svg-core'
import {
    faUserSecret
} from '@fortawesome/free-solid-svg-icons'
import {
    faTwitter
} from '@fortawesome/free-brands-svg-icons'
import {
    FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

library.add(faUserSecret,
    faTwitter)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueFbChat)

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");