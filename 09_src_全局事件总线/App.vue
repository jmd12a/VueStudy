<!-- 网页的布局结构 -->
<template>

    <div class="demo2">

<!--      同一个组件的不同实例对象可以监视不同的事件，调用不同的方法-->
        <my-school></my-school>

        <my-school></my-school>
        <br>

      <my-student ref="student"></my-student>
<!--
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
        console.log(name)
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
