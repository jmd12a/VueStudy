<!-- 网页的布局结构 -->
<template>

    <div class="demo2">

<!--      同一个事件的不同实例对象可以监视不同的事件，调用不同的方法-->
        <my-school></my-school>

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
<!--      组件中也可以绑定原生事件，作用范围是整个div; 点击这个div中的绑定了自定义事件按钮，会先触发div事件，然后触发自定义事件
      <my-student ref="student" @click.native="test()"></my-student>
      <h3>学生姓名： {{studentName}}</h3>

       当一个子组件的某个实例对象被销毁时，不会影响其他的实例对象
      <my-student v-on:transmit="consoleInfo"></my-student>-->
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

    data(){
      return{
        studentName:''
      }
    },

    methods:{
    },

    /*
    * 不同的组件也可以检测事件总线上的同一个事件，当这个事件触发时，所有订阅了这个事件的组件都会调用各自的回调函数
    * */
    mounted() {
      this.$bus.$on('passInformation',(name) => {
        console.log(this)
      })
    }
}
</script>

<style >
    .demo2{
      background-color: gray;
      padding: 50px;
    }
</style>
