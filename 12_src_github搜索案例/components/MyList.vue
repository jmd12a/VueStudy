<script>
import MyCard from "@/components/MyCard.vue";
export default {
  name: "MyList",
  data(){
    return{
      info:{
        users:[],
        isFirst: true,
        isLoading: false,
        error:''
      }
    }
  },

  components:{
    MyCard:MyCard
  },

  mounted() {
    // 挂在事件监听器
    this.$bus.$on('passOnUsers',(data) => {
        // es6语法，合并信息，同时存在则以后边的为准
        this.info = {...this.info, ...data}
        this.info.isFirst = false
    })

    /*
    根据不同事件的事件设置参数
    this.$bus.$on('Start Search',()=>{
      this.users=[]
      this.isLoading = true
      this.isFirst = false
    })*/
  },

 /* beforeDestroy() {
    this.$bus.$off('passOnUsers')
  }*/
}
</script>

<template>
  <div class="row">
    <h3 v-if="info.isFirst"> 欢迎使用</h3>
    <h3 v-show="info.isLoading">正在加载中......</h3>
<!--    通过v-for告诉vue，为数组中的每个元素创建一个my-card实例 key选取接口返回的-->
    <my-card v-for="user in info.users" :key="user.id" :user="user"></my-card>

    <h3 v-show="info.error.trim().length !== 0" >{{info.error}}</h3>

  </div>
</template>

<style scoped>
    .album {
      min-height: 50rem; /* Can be removed; just added for demo purposes */
      padding-top: 3rem;
      padding-bottom: 3rem;
      background-color: #f7f7f7;
    }

  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }
</style>