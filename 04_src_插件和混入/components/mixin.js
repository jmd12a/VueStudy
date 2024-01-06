/*
* 1. mixin 是在js文件中进行书写，需要定义变量名方便引入
* 2. mixin 是一个独立的对象，其中可以书写组件中的各种属性
* 3. 将其引入到组件中后，mixin中的各种属性方法等会被添加到组件的相应部分，如果有同名则组建本身的优先级更高
* */
export const mixin1 = {

    data(){
        return {
            test: '1'
        }
    },

    methods:{
        showName(){
            alert(this.name)
        }
    },

    mounted() { // 将虚拟dom挂载到页面上时执行

        // 插件中在原型对象上定义了hello()方法，当这里的内容被定义到挂载钩子上时，组件对象同样可以调用
        this.hello()
    }
}