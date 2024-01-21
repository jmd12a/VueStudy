<template>
    <div class='demo'>
            <h3>学校名称:{{name}}</h3>
            <h3>学校地址:{{address}}</h3>
            <br>

    </div>
</template>

<script>

import Pubsub from 'pubsub-js'
export default {
    
    name: 'MySchool',

    data(){
        return{
            name:'新中',
            address:'方城县文化路附近'
        }
    },

    mounted() {
      // 每次订阅都会产生一个订阅id，通过这个订阅id来销毁这个订阅
      this.pubId = Pubsub.subscribe('passName',(messageName,data) =>{
        console.log(messageName,data)
      })

      //setTimeout(() => this.$destroy(), 3000)
    },

    beforeDestroy() {
      // 取消订阅和事件总线不同，通过订阅时产生的id来取消，取消的这个组件对该事件的监听
      Pubsub.unsubscribe(this.pubId)
    }

}
</script>

<style>

    .demo{
        background-color: yellow;
        padding: 50px;
    }
</style>
