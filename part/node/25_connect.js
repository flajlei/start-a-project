const connect = require('connect');

let app = connect();

app.use(function(req,res,next){
    console.log('1');
    next();
});

app.use((req,res,next) => {
    console.log('2');
    next();
});
//从127.0.0.1开始请求，反馈1，2，4
//从127.0.0.1/api ，反馈1，2，3，4
app.use('/api',function(req,res,next){
    console.log('3');
    next();
});

app.use((req,res) => {
    console.log('4');
    res.write('4');
    res.end();
});

app.use((err,req,res,next)=>{
    //出错时会跳到这里
})

app.listen(58889, () => {
    console.log('服务器运行');
})