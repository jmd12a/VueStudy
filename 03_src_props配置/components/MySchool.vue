<script>
import MyStudent from "@/components/MyStudent.vue";
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
    },

  }
}
</script>

<template>
  <div>

<!--    1.如果不使用v-bind来传递，即使指定了类型，接受的也是字符串
        2.使用v-bind指令，vue会判断传入的值的类型，并把转换后的类型交给prop
        3.因此如果要把其他类型的当作string类型穿入，那么就不能使用v-bind指令，否则即使指定了string类型接收的依然不是String

        <MyStudent name="王东明" :age="16" :hobbies="['编程','睡觉']"></MyStudent>
-->
    <MyStudent name="王东明" :age="16" :hobbies="['编程','睡觉']"></MyStudent>

    <h3 ref="h1">学校名称：{{name}}</h3>
    <h3>学校地址：{{address}}</h3>
    <br>
    <button @click="tip"> 点击展示学校标语</button>
  </div>
</template>

<style scoped>

</style>