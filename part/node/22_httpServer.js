//用http模块创建一个web服务器端
const http = require('http');
const path = require('path');
const fs = require('fs');

//创建一个服务器端对象
let server = http.createServer();

//监听客户端请求数据和发送响应报文
server.on('request', (req, res) => {
    // //req: 请求报文的封装
    // console.log(req.headers);
    // console.log('url='+req.url);
    // console.log('method='+req.method);//请求的方法
    // //res: 响应的封装
    // res.write('hi');
    // res.end();
    
    let conType = 'text/plain';
    
    //url全路径
    // ../会从当前路径返回上一个路径
    let fileName = path.join(__dirname, '../', req.url);

    switch(path.extname(fileName)){
        case '.png':
            conType = 'image/png';
            break;
        case '.jpeg':
        case '.jpg':
            conType = 'image/jpeg';
            break;
        case '.gif':
            conType = 'image/gif';
            break;
        case '.html':
            conType = 'text/html';
            break;
        case '.css':
            conType = 'text/css';
            break;
        default :
            conType = 'text/plain';
    }
    

    //设置响应文件的类型和状态码
    res.writeHead(200,{
        'Content-Type':conType
    });
    //创建可读并建立管道
    let reader = fs.createReadStream(fileName);
    reader.pipe(res);
})

server.listen(58889, () => {
    console.log('开始监听');
})

