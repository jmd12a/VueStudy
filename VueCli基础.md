

##### 一. Vue项目目录结构

```
├─public		   
│      favicon.ico
│      index.html
│      
└─src
    │  App.vue		   // 所有组件的最上级组件
    │  main.js	           // 程序的入口
    │  
    ├─assets		   // 存放静态资源的文件
    │      logo.png
    │      
    └─components	   // 存放组件的文件
            MySchool.vue
            MyStudent.vue
│  .gitignore
│  babel.config.js	   // babel配置文件
│  jsconfig.json	   // 配置文件
│  package-lock.json	   // 控制引入依赖的版本
│  package.json		   // 依赖配置文件
│  vue.config.js	   // vuecli的配置文件
│  webpack.config.js       // 输出的所有项目配置文件
```

##### 二. vue项目配置

1. 使用vue insject > xxx.config.js将项目配置输出到一个文件中
2. 可以在vue.config.js文件中更改项目配置，具体配置项：https://cli.vuejs.org/zh/config/

##### 三. ref属性

1. 被用来该给页面元素或子组件注册引用信息

2. 应用在html标签上获取真实的DOM元素，应用在组件标签上获取的是组件实例对象（VueComponent）

3. 使用方式：

   ​		打标识：

   ```html
   <h1 ref="xxx">...</h1>  <!--   html标签   -->
   <School ref="xxx"></School> <!--   组件标签   -->
   ```

   ​		获取(在打标签的页面的vm中获取)：

   ```javascript
    this.$refs.xxx
   ```

   

​				

##### 四. props属性

- prop的数据类型：

  ​		prop 的类型包括 String（字符串）、Number（数字）、Boolean（布尔值）、Array（数组）、Object（对象）、Date（日期对象）、Function（函数）和 Symbol（ES6 引入的唯一且不可变的数据类型）

- 关于父组件往子组件传值

           1. 如果不使用v-bind来传递，即使指定了类型，接受的也是字符串
           2. 使用v-bind指令，vue会判断传入的值的类型，并把转换后的类型交给prop
           3. 因此如果要把其他类型的当作string类型穿入，那么就不能使用v-bind指令，否则即使指定了string类型接收的依然不是String

        <MyStudent name="王东明" :age="16" :hobbies="['编程','睡觉']"></MyStudent>-->

 - 几种声明的方式

   ```javascript
   
   // 简单声明接受
   
   props:['name','age','hobbies'],
   
   // 声明类型接受
       
   props:{
      name:String,
      age:Number,
      hobbies: Array
    },
   
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
       default: function fac(){
         return ['学习','睡觉']
       },
   
       // 简写版
       default: () => ['学习','睡觉'],
   
       validator: function (value) {
         // 这个值必须匹配某个条件
         return value.length >= 2
       }
     }
   },
   ```

   
