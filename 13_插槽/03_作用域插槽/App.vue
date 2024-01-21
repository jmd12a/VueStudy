<script>
import Category from "@/components/Category.vue";

export default {

  components:{
    // eslint-disable-next-line vue/no-unused-components
    Category:Category
  },

  methods: {},

  data(){
    return{

    }
  }

}
</script>

<template>
  <div class="container">

    <category name="游戏" >
<!--      默认插槽或者具名插槽传递了数据就是作用域插槽
          作用域插槽是子组件向父组件中传递数据,并由父组件决定如何使用
          作用域插槽中传递的数据可以不接受不使用

          v-slot为使用插槽的指令，a为具名插槽的名字(default指默认插槽)，slotProps为接受数据的对象名
          v-slot:a="slotProps"

          如果使用了template, 那么所有使用插槽a的结构都要定义在template中，否则将不生效
-->
      <template v-slot:a="slotProps">
        <ul>
          <li v-for="(item,key) in slotProps.games" :key="key">{{item}}</li>
        </ul>
        <h5>欢迎来玩游戏</h5>
      </template>




    </category>

    <category name="游戏">

<!--    scope加上接受数据的对象名也可以,不过是过时写法  -->
      <template slot="a" scope="slotProps">
        <ol>
          <li v-for="(item,key) in slotProps.games" :key="key">{{item}}</li>
        </ol>
      </template>

    </category>

    <category name="游戏">

<!--      支持es6中的结构赋值,使用一个对象来接收值,对象中定义属性,在下面直接使用这些属性-->
      <template v-slot:a="{games,msg}">
          <h5 v-for="(item,key) in games" :key="key">{{item}}</h5>
          <h5>{{msg}}</h5>
      </template>

     \\

    </category>

  </div>
</template>

<style lang="css" scoped>
    .container{
      display: flex;
      justify-content: space-around;
    }
    video {
      width: 100%;
    }
    img{
      width: 100%;
    }
</style>