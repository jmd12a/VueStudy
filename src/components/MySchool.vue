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
    }
  }
}
</script>

<template>
  <div>
    <MyStudent/>

    <h3 >学校名称：{{name}}</h3>
<!--    插件中定义过滤器并在这里使用-->
    <h3>学校地址：{{address}}</h3>
  </div>
</template>

<style scoped>

</style>