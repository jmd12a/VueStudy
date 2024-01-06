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

    testRef(){
      console.log(this.$refs.h1)
      console.log(this.$refs.stu)
      console.log(this.$refs.h1.innerText)
    }
  }
}
</script>

<template>
  <div>
    <MyStudent ref="stu"></MyStudent>
    <h3 ref="h1">学校名称：{{name}}</h3>
    <h3>学校地址：{{address}}</h3>
    <br>
    <button @click="tip"> 点击展示学校标语</button>
    <button @click = "testRef" > 测试Ref属性 </button>
  </div>
</template>

<style scoped>

</style>