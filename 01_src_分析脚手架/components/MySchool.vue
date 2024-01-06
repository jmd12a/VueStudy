<template>
    <!-- 网页的布局结构 -->
    <div class='demo'>
            <h3>学校名称:{{name}}</h3>
            <h3>学校地址:{{address}}</h3>
            <br>
            <my-student></my-student>
    </div>
</template>

<script>
// 网页的动态和交互

import MyStudent from './MyStudent.vue'

// export default是默认暴露
export default {
    
    name: 'MySchool',

    data(){
        return{
            name:'新中',
            address:'方城县文化路附近'
        }
    },

    components:{
        MyStudent:MyStudent
    }


    
}
</script>

<style>
 /* 网页的样式 */
    .demo{
        background-color: yellow;
    }
</style>
