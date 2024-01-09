<template>
    <!-- 网页的布局结构 -->
    <!-- template组件使用引入的新组件vue-template-compiler进行解析   -->
    <div class="demo1">
            <h3>学生姓名:{{name}}</h3>
            <h3>学生年龄:{{age}}</h3>

            <button @click="transmitName">点我传递学生姓名</button>
            <br>
            <button @click="unBind">点我解绑自定义事件</button>
            <br>
            <button @click="destroyTest">点我销毁组件</button>
    </div>
</template>

<script>


export default {

    name:'MyStudent',

    data(){
            return{
                name:'王五',
                age:'13'
            }
        },
    methods:{
      // 原生的事件触发后调用这个函数
      transmitName(){
          // 在这个函数中通过this.$emit()方法去触发这个事件，这个事件的注册是在父组件中注册的
          // 第一个是事件名，第二个是自定义参数
          this.$emit('transmit',this.name);
          this.$emit('testUnBind')
      },
      unBind(){
        // this.$off('transmit') // 解绑单个自定义事件
        // this.$off(['transmit','testUnBind']) // 解绑多个自定义事件
        this.$off() // 解绑所有自定义事件
      },

      destroyTest(){
          this.$destroy()
      }

    },

    
}
</script>

<style  scoped>
      .demo1{
        background-color: green;
        padding: 50px;
      }
</style>