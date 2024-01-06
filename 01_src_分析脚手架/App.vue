<template>
    <!-- 网页的布局结构 -->
    <div>
        <img src='./assets/logo.png' alt='logo'>
        <my-school></my-school>
    </div>
</template>

<script>

import MySchool from './components/MySchool.vue'

export default {
    
    name: 'App',
    
    components:{
        MySchool:MySchool
    }
}
</script>

