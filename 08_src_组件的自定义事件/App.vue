<!-- 网页的布局结构 -->
<template>

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
<!--      组件中也可以绑定原生事件，作用范围是整个div; 点击这个div中的绑定了自定义事件按钮，会先触发div事件，然后触发自定义事件-->
<!--      <my-student ref="student" @click.native="test()"></my-student>-->
      <h3>学生姓名： {{studentName}}</h3>

<!--       当一个子组件的某个实例对象被销毁时，不会影响其他的实例对象-->
<!--      <my-student v-on:transmit="consoleInfo"></my-student>-->
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
      consoleInfo(name){

        console.log(name)
        this.studentName = name // 通过监听事件获取子组件中的数据后给data中的属性赋值
      },
      /*consoleInfo1(){
        console.log('demo')
      },*/

      test(){
        window.alert('123')
      }
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

      /* 关于回调函数中this指向的问题
      * 1. 如果直接在这个写回调函数，回调函数会指向student实例对象，因为该函数是被student.$on调用的
      * 2. 在这里可以剪头函数，因为剪头函数没有自己的this，会往上级找，在上级中找到的是mounted,而mounted中的this是app实例对象
      * */
      this.$refs.student.$on('transmit',(name) =>{
        this.studentName = name
      })

      // this.$refs.student.$on('testUnBind',this.consoleInfo1)

    }
}
</script>

<style >
    .demo2{
      background-color: gray;
      padding: 50px;
    }
</style>
