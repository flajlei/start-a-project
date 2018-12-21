var login = new Vue({
    el:'#login',
    data:{
        user:{
            name:"",
            pwd:""
        },
        logining:"0",//重复登陆
        error:""//错误信息
    },
    methods:{
        loginBtn(){
            axios.post('/carrots-admin-ajax/a/login',this.user,{
                transformRequest:[
                    function(data){
                        let params='';
                        for(let index in data){
                            params+=index+'='+data[index]+'&';
                        }
                        params = params.substring(0,params.length - 1);//去除最后一个&
                        return params;
                    }
                ]
            })
            .then(res => {
                console.log(res.data.message);
                this.error = res.data.message;
            })
            .catch(err => {
                console.log('请求失败'+err.data);
            })
        }
    }
})
// sendGet(){
//     axios.get('server.php',{
//         params:{
//             name:'alice',
//             age:19
//         }
//     })
//     .then(resp => {
//         console.log(resp.data);
//     }).catch(err => {             //
//         console.log('请求失败：'+err.status+','+err.statusText);
//     });
// },

// methods:{
//     sendPost(){
//         axios.post('server.php',{
//                 name:'alice',
//                 age:19
//         }) 
           //该方式发送数据是一个Request Payload的数据格式，一般的数据格式是Form Data格式，所有发送不出去数据

//         axios.post('server.php','name=alice&age=20&') 
           //方式1通过字符串的方式发送数据
//         axios.post('server.php',this.user,{  //方式2通过transformRequest方法发送数据，本质还是将数据拼接成字符串
//             transformRequest:[
//                 function(data){
//                     let params='';
//                     for(let index in data){
//                         params+=index+'='+data[index]+'&';
//                     }
//                     return params;
//                 }
//             ]
//         })
//         .then(resp => {
//             console.log(resp.data);
//         }).catch(err => {
//             console.log('请求失败：'+err.status+','+err.statusText);
//         });
//     },
// }