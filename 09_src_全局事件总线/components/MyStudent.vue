<template>
    <!-- 网页的布局结构 -->
    <!-- template组件使用引入的新组件vue-template-compiler进行解析   -->
    <div class="demo1">
            <h3>学生姓名:{{name}}</h3>
            <h3>学生年龄:{{age}}</h3>
            <button @click="trig">点击通过事件总线给school传递信息</button>
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
      trig(){
        // 在事件总线中触发这个事件，并传递参数
        this.$bus.$emit('passInformation',this.name)
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