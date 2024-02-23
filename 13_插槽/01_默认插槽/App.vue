<script>
import Category from "@/components/Count.vue";

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

<!--
    不使用插槽，组件处理数据的方式永远是一致的，只是数据不同
    <category :data="foods" name="美食"></category>
    <category :data="games" name="游戏"></category>
    <category :data="films" name="电影"></category>-->

    <category name="美食">
<!--      这里使用了组件中的默认插槽，插槽只是规定了位置，结构和内容完全由父组件来决定-->

      <img src="./assets/food.png">
    </category>

    <category name="游戏">
      <ul>
<!--      插槽中使用的动态数据也是从父组件中获取，插槽中的内容先解析然后再放到子组件中  -->
        <li v-for="(item,key) in games" :key="key">{{item}}</li>
      </ul>
    </category>

    <category name="电影">
      <img src="./assets/films.png">
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