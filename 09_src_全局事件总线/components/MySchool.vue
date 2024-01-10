<template>
    <div class='demo'>
            <h3>学校名称:{{name}}</h3>
            <h3>学校地址:{{address}}</h3>
            <br>

    </div>
</template>

<script>


export default {
    
    name: 'MySchool',

    data(){
        return{
            name:'新中',
            address:'方城县文化路附近'
        }
    },

    methods:{
      testEvent(name){
        console.log(name)
      }
    },

    mounted() {
      // 注册这个事件，在检测到这个事件时，调用这个函数

      this.$bus.$on('passInformation', this.testEvent)


    },

  /* 此时已经清理了虚拟dom并注销了组件实例对象，可以在这里解绑*/
    destroyed() {
      // 只提供事件名，则会移除这个事件所有的监听器


      // 同时提供事件名和回调函数，可以移除特定的监听器,但是注册事件监听时不能使用匿名函数
      this.$bus.$off('passInformation',this.testEvent)
    }

}
</script>

<style>

    .demo{
        background-color: yellow;
        padding: 50px;
    }
</style>
