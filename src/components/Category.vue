<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Category",
  data(){
    return{
      foods:['火锅','烧烤','小龙虾','牛排'],
      games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
      films:['《教父》','《拆弹专家》','《你好，李焕英》','《尚硅谷》'],
      str:'欢迎来玩'
    }
  },
  props:{
    name:String
  }
}
</script>

<template>
  <div class="category">

    <h3>{{name}}</h3>

<!--   默认插槽和具名插槽都可以向父组件传递数据，一旦传递了数据，这个插槽就被称为作用域插槽-->

<!--   作用域插槽传递数据时，使用 :数据名 来传递数据。
       与父组件通过prop向子组件传递数据不同，即使是String类型的，也需要: -->
    <slot name="a" :games="games" :msg="str"></slot>

<!--    <slot>我是默认插槽的默认值，当插槽没有被使用时，将被展示</slot>-->
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