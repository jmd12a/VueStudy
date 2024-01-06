<script>

export default {
  name: "MyStudent",

  data(){
    return{
      name: '王东明',
      age:'12'
    }
  },

  methods: {
    tip() {
      alert("努力学习，天天向上")
    },

  }
}
</script>

<template>
  <div>
    <h3 v-text="'学生姓名:'+name"></h3>
    <h3 v-text="'学生年龄:'+age"></h3>
    <br>

  </div>
</template>

<style scoped>

</style>