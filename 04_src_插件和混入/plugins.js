export default {
    /*
    * 插件用于
    *   给Vue中添加全局方法和属性、自定义指令、过滤器、全局的实例方法和属性
    * */
    install(Vue,x){ // install的第一个参数是Vue构造函数，此后的参数是use中插件之后传入的参数
        // 定义全局的属性，可以通过Vue.访问，但不能通过this.访问，因为this.指向的是实例对象而非构造函数
        console.log(x)
        Vue.z = 10

        // 在插件中定义过滤器
        Vue.filter('mySlice',function (value) {
            return value.slice(0,3)
        })

        // 在插件中自定义指令
        Vue.directive(
            'f-bind',{
                bind(element,binding){

                    // 绑定后先赋值
                    element.value = binding.value
                },

                inserted(element){
                    // 展示在页面后再获取焦点
                    element.focus()
                },

                update(element,binding){
                    // 更新时赋值再获取焦点
                    element.value = binding.value
                    element.focus()
                }
            }
        )

        // 在插件中定义混入
        Vue.mixin({
            data(){
                return {
                    x:100,
                    y:200
                }
            }
        })

        // 在插件中给Vue的原型对象添加方法(属性)，即全局示例方法(属性)
        Vue.prototype.hello = function () {
            // alert('hello')
        }

    }
}