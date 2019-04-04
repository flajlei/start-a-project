const express = require('express');
const path = require('path');
//express 兼容connect用法
let app = express();

//根目录托管地址 //让当前文件目录可以像根目录一样访问
app.use(express.static(path.join(__dirname,'../','htmlpage'),{
    index: '1.html'//默认指向文件
}));
//兼容connect写法
// app.use(function(req,res,next){
//     console.log('1');
//     next();
// })
// app.use(function(req,res){
//     console.log('2');
//     res.end();
// })

app.get('*', function(req,res,next){
    console.log(req.param('id'));
    console.log(path.join(__dirname,'../','htmlpage'));
    res.send('124');
    next();
});
app.get('/api', function(req,res){
    console.log('/api');
    //同一个中间件中send只能发送一次；
    // res.send('api');
    res.end();
});

app.listen(58889);