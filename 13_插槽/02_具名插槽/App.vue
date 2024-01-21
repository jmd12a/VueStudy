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
      foods:['火锅','烧烤','小龙虾','牛排'],
      games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
      films:['《教父》','《拆弹专家》','《你好，李焕英》','《尚硅谷》']
    }
  }

}
</script>

<template>
  <div class="container">


    <category name="美食">
<!--      父组件在使用插槽时，可以通过slot属性来指定使用那个插槽, 当没有指定时就会使用默认插槽

          当有多个结构指定同一个插槽时，会按照先后顺序放到这个插槽中
-->
      <img slot="a" src="./assets/food.png">

<!--      所有未被指定的都会按照先后放到默认插槽中-->
      <h5>test1</h5>
      <h5>test2</h5>
    </category>

    <category name="游戏">
      <ul>
<!--      插槽中使用的动态数据也是从父组件中获取，插槽中的内容先解析然后再放到子组件中  -->
        <li v-for="(item,key) in games" :key="key">{{item}}</li>
      </ul>
    </category>

    <category name="电影">
      <template v-slot:a>
        <img src="./assets/films.png">
        <h5>欢迎前来观影</h5>
      </template>

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