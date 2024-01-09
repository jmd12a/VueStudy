<script>
import {nanoid} from "nanoid";

export default {
  name: "MyHeader",
  props:{
    todos:Array
  },
  data(){
    return{
      title:''
    }
  },

  methods:{
    add(){
      if (this.title.trim() === '') return
      const obj = {id:nanoid(), name:this.title, completed:false}
      // this.todos = []
      this.todos.unshift(obj) // 通过props传入的属性不能直接操作赋值，因为不能直接改变内存地址，但是可以对这个值本身进行一些操作
      this.title=''
    }
  }
}
</script>

<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称 按回车键确认" v-model="title" @keyup.enter="add"/>
  </div>
</template>

<style scoped>
    /*header*/
    .todo-header input {
      width: 560px;
      height: 28px;
      font-size: 14px;
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 4px 7px;
    }

    .todo-header input:focus {
      outline: none;
      border-color: rgba(82, 168, 236, 0.8);
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
    }
</style>