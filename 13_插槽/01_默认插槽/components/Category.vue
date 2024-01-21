<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Category",
  props:{
    name:String
  }
}
</script>

<template>
  <div class="category">
    <h3>{{name}}</h3>
<!--
    插槽是在模板中指定一个位置，父组件使用子组件时，可以在这个位置展示任意的结构和内容
    插槽可以增加组件的灵活性，在组件中的特定位置添加任意的结构，增强组件的可定制性
-->
    <slot>我是插槽的默认值，当插槽没有被使用时，将被展示</slot>
  </div>
</template>

<style scoped>
    .category{
      background: skyblue;
      width: 200px;
      height: 300px;
    }
    h3{
      text-align: center;
      background: orange;
    }
    img{
      width: 100%;
    }
</style>