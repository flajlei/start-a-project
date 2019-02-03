var first = new Vue({
    //挂载元素选择器 --- String|HtmlElement
    el : '#app',
    //代理数据 --- Object|Function
    data: {
        url: "www.baidu.com",
        use: true,
        message:"123",
        value: "<span>我是一个span标签</span>"
    },
    //methods：定义方法 --- Object
    methods: {
        details: function(){
            return this.site + "12121";
        },
        rese: function(){
            this.message = this.message.split('').reverse().join('');
            this.use = this.use?false:true;
        }
    },
    //计算属性
    computed:{

    }
})
//vm.$data 查看数据
/*
v-bind：动态绑定数据。简写为“:” 。=> 以后的:class="{red:boolean}"
v-on ：绑定时间监听器。简写为“@”，例：@click="xxx"；
v-text ：更新数据，会覆盖已有结构。类似{{ msg }} ；
v-show ：根据值的真假，切换元素的display属性；
v-if ：根据值的真假，切换元素会被销毁、重建； => 在dom中已消失
v-else-if ：多条件判断，为真则渲染；
v-else ：条件都不符合时渲染；
v-for ：基于源数据多次渲染元素或模块；
v-model ：在表单控件元素（input等）上创建双向数据绑定（数据源）；
v-pre ：跳过元素和子元素的编译过程；
v-once ：只渲染一次，随后数据更新也不重新渲染；
v-cloak ：隐藏未编译的Mustache语法，在css中设置[v-cloak]{display:none;}
v-html:其值会作为html属性渲染

作者：datura_lj
链接：https://www.jianshu.com/p/98b8a8fb00e6
來源：简书
简书著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。
*/
var app2 = new Vue({
    el:'#app2',
    template:'#tem'
})
/*
render 函数
class: {},  =>  绑定class，和v-bind:class一样的API
style: {},  =>  绑定样式，和v-bind:style一样的API
attrs: {},  =>  添加行间属性
domProps: {},  =>   DOM元素属性
on: {},  =>  绑定事件
nativeOn: {},  =>  监听原生事件
directives: {},  =>  自定义指令
scopedSlots: {},  =>   slot作用域
slot: {},  =>   定义slot名称  和组件有关系，插曹
key: "key",  =>   给元素添加唯一标识
ref: "ref",  =>   引用信息
*/
var app3 = new Vue({
    el:'#app3',
    data:{
        use:true
    },
    render(createrElement){
        return createrElement(
            "ul",{
                class:{color:this.use},
                style:{backgroundColor:"aqua"},//大写字母的属性会转换为-c
                attrs:{name:"a"},
                domProps:{
                    innerHTML:"<li>我是html</li>"//这个权重高，写了这个下面创建的li就都无效了
                },
                on:{
                    click(){
                        this.use = this.use?false:true;
                    }
                }
            },
            [
                createrElement("li",1),
                createrElement("li",2)
            ]
        );
    },
})

var app4 = new Vue({
    el:'#app4',
    data:{
        num:1
    },
    computed:{
        myData:{
            //影响mydata数值的变量改变时获取
            get:function(){
                console.log('get');
                return this.num+1;
            },
            //当mydata要改变时执行
            set:function(){
                console.log('set');
                this.num=1;
            }
        }
    },
    methods: {
        change() {
            this.num++;
        },
        change2() {
            this.myData++;
        }
    }

})
//app5
//全局注册
Vue.component('myComponent',{
    template:'<div>全局组件</div>'
})
//局部注册
var child ={
    template:'<h3>我是局部组件child</h3>'
}
var common = {
    template:'<p>第二个局部组件common{{message}}</p>',//只可单行
    //组件的数据需要单独写
    data(){
        return {
            message:"123"
        }
    }
}
//
var part1 = {
    template:'#part1'
}
var app5 = new Vue({
    el:'.app5',
    data:{
        message:'12121'
    },
    //拼装组件
    components:{
        myComponent:child,//局部组件不设置时默认加载全局组件
        common:common,
        part1:part1
    }
})