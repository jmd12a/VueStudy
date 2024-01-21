import Vue from 'vue'
import App from "./App";
// import {mixin1} from "@/components/mixin";

Vue.config.productionTip = false

new Vue({
    el:'#app',
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this
    }
})