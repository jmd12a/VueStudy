<script>
import MyStudent from "@/components/MyStudent.vue";
import {mixin1} from "@/components/mixin";

export default {
  name: "MySchool",
  components: {MyStudent},

  data(){
    return{
      name: '实验中学',
      address:'河南省南阳市方城县文化路'
    }
  },

  methods:{
    tip(){
      alert("努力学习，天天向上")
    }
  },

  mixins:[mixin1],
}
</script>

<template>
  <div>


    <MyStudent/>

    <h3 >学校名称：{{name}}</h3>
<!--    插件中定义过滤器并在这里使用-->
    <h3>学校地址：{{address | mySlice}}</h3>
    <input type="text" v-f-bind="name">
    <br>
    <button @click="tip"> 点击展示学校标语</button>
    <br>
    <button @click="showName">点击展示学校名字</button>
  </div>
</template>

<style scoped>

</style>