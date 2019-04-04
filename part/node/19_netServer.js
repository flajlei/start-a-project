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
    client.write('hello!from server');
    client.end('连接结束');
})
//开始监听端口
server.listen(58888);