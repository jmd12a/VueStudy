<script>
export default {
  name: "MyItem",
  props:{
    todoObj:Object
  },
  methods:{
    /*removeTodo(todoObj){
      // 不能直接改变父组件传进来的值(即不能将值的内存地址指向其他地方)，但可以改变传进来的值的子属性的值，违反了单向数据流原则暂时这样用
      todoObj.completed= !todoObj.completed
    }*/

    handlerDelete(id){
      this.$emit('delete',this.todoObj.id)
    }
  }
}
</script>

<template>
  <li>
    <label>
<!--      : + 标签名，后面的值为布尔值，来动态的决定便签属性-->
<!--      <input type="checkbox" :checked="todoObj.completed" @change="removeTodo(todoObj)"/>-->
<!--      在这里，v-model绑定todoObj的completed-属性，实现了双向数据绑定，completed决定了这个输入框是否显示 并且当我们改变数据框的状态时
          会反过来影响todoObj的completed属性，todoOb在app中存储，但这里通过引用修改了在app中它的属性的值
-->
      <input type="checkbox" v-model="todoObj.completed">
      <span>{{todoObj.name}}</span>
    </label>
    <button class="btn btn-danger" @click="handlerDelete()">删除</button>
  </li>

</template>

<style scoped>
    /*item*/
    li {
      list-style: none;
      height: 36px;
      line-height: 36px;
      padding: 0 5px;
      border-bottom: 1px solid #ddd;
    }

    li label {
      float: left;
      cursor: pointer;
    }

    li label li input {
      vertical-align: middle;
      margin-right: 6px;
      position: relative;
      top: -1px;
    }

    li button {
      float: right;
      display: none;
      margin-top: 3px;
    }

    li:before {
      content: initial;
    }

    li:last-child {
      border-bottom: none;
    }

    li:hover{
      background-color: #ddd;
    }

    li:hover button{
      display: block;
    }
</style>