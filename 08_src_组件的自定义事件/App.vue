<template>
    <!-- 网页的布局结构 -->
    <div class="demo2">

        <my-school></my-school>
        <br>
<!--
           v-on:transmit 会在子组件中注册一个名为transmit的事件并监听这个事件

           当子组件中通过原生的事件触发函数，而函数中的$emit()方法被调用，在$emit方法中又触发了'transmit' 事件时，
           父组件中这个事件绑定的函数consoleInfo就会被调用

           并且在这个过程中可以传递参数，this.$emit(事件名, args)中的args会被传递到父组件的函数中
-->
<!--       注册子组件事件的方法一： <my-student v-on:transmit="consoleInfo"></my-student>-->
<!--       当一个子组件被销毁时，其中注册的自定义事件也被销毁-->
      <my-student ref="student"></my-student>
<!--       当一个子组件的某个实例对象被销毁时，不会影响其他的实例对象-->
      <my-student v-on:transmit="consoleInfo"></my-student>
    </div>
</template>

<script>

import MySchool from './components/MySchool.vue'
import MyStudent from "@/components/MyStudent.vue";

export default {
    
    name: 'App',
    
    components:{
        MySchool:MySchool,
        MyStudent:MyStudent
    },

    methods:{
      consoleInfo(name){
        console.log(name)
      },
      consoleInfo1(){
        console.log('demo')
      },
    },

    mounted() {
      /*
      * 在子组件中注册组件事件的方式二，通过$ref取到子组件对象
      * 然后使用$on(event name, trig function)来在子组件中注册自定义事件并制定触发时调用
      * */
      // 这种方式更加灵活，比如可以设置定时事件多久后生效
     /* setTimeout(() => {
        this.$refs.student.$on('transmit',this.consoleInfo)

      },3000)*/
      this.$refs.student.$on('transmit',this.consoleInfo)
      this.$refs.student.$on('testUnBind',this.consoleInfo1)

    }
}
</script>

<style >
    .demo2{
      background-color: gray;
      padding: 50px;
    }
</style>
