<script>

export default {
  name: "MyStudent",

  data(){
    return{
      name:'王东明',
      age:20,
    }
  },

  methods: {

    addAge(){
      this.age++
    }
  },

}
</script>

<template>
  <div>
    <h3 v-text="name"></h3>
    <h3 >学生年龄: {{age}}</h3>

    <button @click="addAge">学生成长</button>
    <br>
    <button >点击展示学校名字</button>



  </div>
</template>

<style scoped>

</style>