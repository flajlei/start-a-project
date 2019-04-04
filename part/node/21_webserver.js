const net = require('net');

//创建服务器对象
let server = net.createServer();

server.on('connection', client => {
    //client指向客户端的一个对象，可以通过client给客户端发送数据，可读，可写

    //读取客户端传来的数据
    client.on('data', chunk => {
        console.log(chunk.toString('utf8'));
    })

    //往客户端写入数据
    //es6中增加了`做多行字符定义的做法
    client.write(`HTTP/1.1 200 OK
Server: Apache
Content-Type: text/html

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
    <h1>这是来自服务器的内容</h1>
</body>
</html>
`);
    client.end();
})
//开始监听端口
server.listen(58888);