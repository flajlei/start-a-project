var login = {
    template: '#login',
    data(){
        return{
            user:'',
            password:'',
            error:'无此账号'
        }
    },
    methods:{
        login(){
            this.user = "123";
            console.log("1");
        }
    }
};
//路由
// const routes = [
//     {
//         path:'/',
//         component:login
//     }
// ]
// //实例化
// const router = new VueRouter({
//     routes
// });
//挂载
const vm = new Vue({
    el:'.app',
    components:{
        login:login,//局部组件不设置时默认加载全局组件
    },
});