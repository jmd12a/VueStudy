<!-- 网页的布局结构 -->
<template>

    <div class="demo2">



        <my-school></my-school>
        <br>
        <my-student></my-student>
    </div>
</template>

<script>

import MySchool from './components/MySchool.vue'
import MyStudent from "@/components/MyStudent.vue";
import Pubsub from "pubsub-js";

export default {
    
    name: 'App',
    
    components:{
        MySchool:MySchool,
        MyStudent:MyStudent
    },

    data(){
      return{
        studentName:''
      }
    },

    methods:{
    },


    mounted() {
      this.pubId = Pubsub.subscribe('passName',(messageName,data) =>{
        console.log(messageName,data)
      })
    }
}
</script>

<style >
    .demo2{
      background-color: gray;
      padding: 50px;
    }
</style>
