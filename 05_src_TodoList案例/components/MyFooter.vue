<script>
export default {
  name: "MyFooter",
  props:{
    todos:Array,
    removalsCompleted:Function
  },

  computed:{
      completedNum(){
      // return  this.todos.filter(todo => todo.completed).length
      // pre是上次返回的值，第一次循环是第二个参数; cur是当前的对象

        return this.todos.reduce(((pre,cur) => {
          return pre + (cur.completed ? 1:0) // 三目运算符
        }),0)
      },

      total(){
        return this.todos.length
      },

      // get和set都要写的话，这里要写为一个对象
      isCompletedAll:{
        get(){
          return this.total === this.completedNum && this.total > 0
        }
        ,
        set(value){
          this.todos.forEach(todo => todo.completed = value)
        }

      }
  },

  methods:{
    /*mod(e){ // e.target是这个dom元素
      this.todos.forEach(todo => todo.completed = e.target.checked)
    },*/
    removals() {
      this.removalsCompleted()
    }
  }


}
</script>

<template>
  <div class="todo-footer">
    <label>
<!--      checkbox绑定了一个属性，并且它的改变会该属性的变化，可以使用双向数据绑定-->
<!--      <input type="checkbox" :checked="isCompletedAll" @change="mod"/>-->
      <input type="checkbox" v-model="isCompletedAll" />
    </label>
    <span>
      <span>已完成{{ completedNum }}</span> / {{ todos.length }}
    </span>
    <button class="btn btn-danger" @click="removals">清除已完成任务</button>
  </div>
</template>

<style scoped>
    /*footer*/
    .todo-footer {
      height: 40px;
      line-height: 40px;
      padding-left: 6px;
      margin-top: 5px;
    }

    .todo-footer label {
      display: inline-block;
      margin-right: 20px;
      cursor: pointer;
    }

    .todo-footer label input {
      position: relative;
      top: -1px;
      vertical-align: middle;
      margin-right: 5px;
    }

    .todo-footer button {
      float: right;
      margin-top: 5px;
    }
</style>