<script>

export default {
  name: "MyStudent",

  /*
  * prop的数据类型：
  *       prop 的类型包括 String（字符串）、Number（数字）、Boolean（布尔值）、Array（数组）、
  *       Object（对象）、Date（日期对象）、Function（函数）和 Symbol（ES6 引入的唯一且不可变的数据类型）
  * */




  /*  关于父组件往子组件传值
  *     1.如果不使用v-bind来传递，即使指定了类型，接受的也是字符串
        2.使用v-bind指令，vue会判断传入的值的类型，并把转换后的类型交给prop
        3.因此如果要把其他类型的当作string类型穿入，那么就不能使用v-bind指令，否则即使指定了string类型接收的依然不是String

        <MyStudent name="王东明" :age="16" :hobbies="['编程','睡觉']"></MyStudent>-->
  *
  * */

  // 简单声明接受
  // eslint-disable-next-line vue/no-dupe-keys
  // props:['name','age','hobbies'],

  // 声明类型接受
  /* props:{
     name:String,
     age:Number,
     hobbies: Array
   },*/

  // 声明具体接受
  // prop是不能修改的，如果有修改的需求，可以定义一个data属性，去接收prop的值，然后修改这个data;如果需要对prop计算得出值，可以使用计算属性
  props: {
    name: {
      type: String,        // 类型为字符串
      required: true,      // 这是一个必需的 prop
      // default: 'Hello',    // 默认值为 'Hello' 一般required为true时，无需默认属性
    },

    age: {
      type: Number,
      required: true,
      validator: function (value) {
        // 这个值必须匹配某个条件
        return value >= 16
      }
    },

    hobbies: {
      type: Array,
      required: false,
      // 数组和对象设置默认值时，必须使用一个函数返回，这是为了保证每个函数都有一个独立的副本
      /*default: function fac(){
        return ['学习','睡觉']
      },*/

      // 简写版
      default: () => ['学习','睡觉'],

      validator: function (value) {
        // 这个值必须匹配某个条件
        return value.length >= 2
      }
    }
  },

  data(){
    return{
      myAge:this.age
    }
  },

  computed: {
    appellation(){
      return '学生: '+ this.name
    }
  },

  methods: {
    tip() {
      alert("努力学习，天天向上")
    },

    addAge(){
      this.myAge++
    }

  }
}
</script>

<template>
  <div>
    <h3 v-text="appellation"></h3>
    <h3 >学生年龄: {{myAge}}</h3>
    <ul>
      <li v-for="(hobby,index) in hobbies" :key="index">{{hobby}}</li>
    </ul>

    <button @click="addAge">学生成长</button>


  </div>
</template>

<style scoped>

</style>