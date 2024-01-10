import Vue from 'vue'
import App from "./App";
// import {mixin1} from "@/components/mixin";

Vue.config.productionTip = false


new Vue({
    el:'#app',
    render: h => h(App),
    beforeCreate() {
        // 在生命周期钩子中定义全局事件总线，使用这个vue对象当做全局事件总线
        Vue.prototype.$bus=this
        Vue.prototype.x=1
    }
})