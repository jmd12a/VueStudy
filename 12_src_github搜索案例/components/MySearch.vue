<script>
import axios  from "axios";
export default {
  name: 'MySearch',

  data(){
    return{
      keyword: ''
    }
  },

  methods: {
    getUsers(){
      /*
      * this.$bus.$emit('Start Search') 通过一个新的事件提醒MyList组件该怎么展示
      * */
      // 使用同一个事件，在不同的时刻传递不同的信息即可
      this.$bus.$emit('passOnUsers', {
        users:[],
        isLoading: true,
        error:''}
      )
      // es6的模板字符串
      axios.get(`https://api.github.com/search/users?q=${this.keyword.trim()}`).then(
          response =>{
            console.log("数据获取成功")

            // 通过消息总线传递信息
            this.$bus.$emit('passOnUsers', {
              users: response.data.items,
              isLoading: false,
              error:''}
            )

          },

          error => {
            this.$bus.$emit('passOnUsers', {
              users: [],
              isLoading: false,
              error:error.message}
            )
          }
      )
    }
  }
}
</script>

<template>
  <div class="container">
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input v-model="keyword" type="text" placeholder="enter the name you search" /><br><br>
        <button @click="getUsers">Search</button>
      </div>
    </section>
  </div>
</template>

<style scoped>

</style>