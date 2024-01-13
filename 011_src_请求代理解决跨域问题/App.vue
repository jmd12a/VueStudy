
<script>

import axios from 'axios'
export default {

  methods:{

    axiosOne(){
      axios.get('http://localhost:8080/one/student').then(
      // axios.get('http://localhost:5000/student').then(
          response => {
            console.log(response.data)
          },

          error =>{
            console.log(error.message)
          }
      )
    },

    axiosTwo(){
      axios.get('http://localhost:8080/two/car').then(
          response => {
            console.log(response.data)
          },

          error =>{
            console.log(error.message)
          }
      )
    }
  }

}
</script>

<template>
  <div>
    <button @click="axiosOne">点我获取学生数据</button>
    <button @click="axiosTwo">点我获取汽车数据</button>
  </div>
</template>

<style>

</style>