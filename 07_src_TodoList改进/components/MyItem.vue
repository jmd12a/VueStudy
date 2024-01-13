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

    handlerDelete(){
      this.$emit('delete',this.todoObj.id)
    },

    modifyEditStatus(){
      if (this.todoObj.hasOwnProperty.call('edit')){
        this.todoObj.edit=true
      }else this.$set(this.todoObj,'edit',true)

      // 获取焦点，但如果直接这么写，虚拟dom还没有解析并挂载到页面上，不起作用
      // this.$refs.inputName.focus()

      /*
      * $nextTick在下一次dom更新结束后执行其回调函数
      * 用于根据修改后的数据对页面执行一些操作时
      * */
      this.$nextTick( () =>{
        this.$refs.inputName.focus()
      })
    },

    handlerBlur(event,todo){
        todo.edit = false
        if (!event.target.value.trim())
          return alert('输入不能为空')
        this.$bus.$emit('updateTodoName', todo.id, event.target.value)


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
      <input type="checkbox" v-model="todoObj.completed" v-show="!todoObj.edit">

      <span v-show="!todoObj.edit">{{todoObj.name}}</span>

      <input type="text"
             v-show="todoObj.edit"
             :value="todoObj.name"
             @blur="handlerBlur($event,todoObj)"
             ref="inputName"
      />

    </label>
    <button class="btn btn-danger" @click="handlerDelete()">删除</button>
    <button class="btn btn-edit" @click="modifyEditStatus" v-show="!todoObj.edit">编辑</button>
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