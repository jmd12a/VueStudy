<script>
import {mixin1} from "@/components/mixin";
import vue from "vue";

export default {
  name: "MyStudent",

  data(){
    return{
      name:'王东明',
      age:20,
      z:vue.z  // 在插件中定义的全局属性
    }
  },

  methods: {

    addAge(){
      this.age++
    }
  },

  mixins:[mixin1]
}
</script>

<template>
  <div>
    <h3 v-text="name"></h3>
    <h3 >学生年龄: {{age}}</h3>

    <button @click="addAge">学生成长</button>
    <br>
    <button @click="showName">点击展示学校名字</button>



  </div>
</template>

<style scoped>

</style>