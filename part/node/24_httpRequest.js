const http = require('http');

//发送一个get请求
// http.get('http://aicoder.com', res => {
//     res.on('data', trunk => {
//         console.log(trunk.toString('utf8'));
//     })
// })

//post 通用httpRequest对象发送请求
let baidu = http.request({
    protocol: 'http:', //请求协议
    host: 'baidu.com',  //请求的host
    port: 80,  //端口
    method: 'POST',  //POST请求
    timeout: 2000, //超时时间
    path: '/'  //请求路径
}, res => {
    res.on('data', trunk => {
        console.log(trunk.toString('utf8'));
    })
})

baidu.end();//此时上方请求才会发送