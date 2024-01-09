<script>
import MyItem from "@/components/MyItem.vue";
export default {
  name: "MyList",
  components: {MyItem},
  props:{
    Todos:Array,
    removeTodo:Function
  }


}
</script>

<template>

  <ul class="todo-main">
<!--      要动态的获取数据就要使用 : -->
      <my-item v-for="todo in Todos"
               :key="todo.id"
               :todoObj="todo"
               :removeTodo="removeTodo"
      ></my-item>

  </ul>
</template>

<style scoped>
    /*main*/
    .todo-main {
      margin-left: 0px;
      border: 1px solid #ddd;
      border-radius: 2px;
      padding: 0px;
    }

    .todo-empty {
      height: 40px;
      line-height: 40px;
      border: 1px solid #ddd;
      border-radius: 2px;
      padding-left: 5px;
      margin-top: 10px;
    }
</style>