<template>
    <!-- 网页的布局结构 -->
    <!-- template组件使用引入的新组件vue-template-compiler进行解析   -->
    <div>
            <h3>学生姓名:{{name}}</h3>
            <h3>学生年龄:{{age}}</h3>
    
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
        }
    
}
</script>