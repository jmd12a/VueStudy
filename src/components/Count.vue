<script>
export default {
  name: "Count",
  data(){
    return {
      sum:1,
      n:1, // 选择累加的值
    }
  },

  methods:{
    increment(){
      this.sum += this.n
    },
    decrement(){
      this.sum -= this.n
    },
    incrementOdd(){
      if (this.sum % 2){
        this.sum += this.n
      }
    },
    incrementWait(){
      setTimeout(()=>{
        this.sum += this.n
      },500)
    }
  }

}
</script>

<template>
  <div>
    <h1>当前求和为: {{ sum }}</h1>

    <select v-model="n">
<!--      使用v-bind来定义绑定的值为数值类型 -->
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>

    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<style lang="css">
  button{
    margin-left: 5px;
  }
</style>