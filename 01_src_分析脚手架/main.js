/*
* 入口函数
* */

import Vue from 'vue'  // 引入的是vue.runtime.esm.js,没有模板解析器
import App from './App.vue'

// 关闭vue的生产提示
Vue.config.productionTip = false

/*
*   引入的是vue.runtime.esm.js,没有模板解析器。
*   为了解析App组件，我们使用render(createElement)函数，该函数的第一个参数createElement是创建元素的函数
*   通过使用createElement我们创建App的元素。App是所有组件的父组件，创建以后程序继续往下调用直到完成
*
* */
new Vue({
  el:'#app', // 将app组件放入到容器中

  // render: h => h(App),

  /* render(createElement) { // render函数会被vue自动调用
    // 函数的作用是创建元素
    const v1 = createElement('h1','你好啊')

    return v1
  }*/
  // 上述可以简写为，类似于lambda表达式
  render: h => h(App)

})//.$mount('#app') // 对象挂载到容器中
