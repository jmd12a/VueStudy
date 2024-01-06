import Vue from 'vue'
import App from "./App";
import plugins from "@/plugins";
// import {mixin1} from "@/components/mixin";

Vue.config.productionTip = false
Vue.use(plugins,1) // 使用插件，第一个参数是要使用的插件，其后我们可以自由传入参数，并在install方法中接受
// Vue.use(xxx) 可以使用多个use来安装多个插件
// Vue.mixin(mixin1) // 全局混入，在所有的vue组件中生效，同时包括入口的vm对象

new Vue({
    el:'#app',
    render: h => h(App),
})