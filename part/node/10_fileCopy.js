//将logo.jpg复制到logo1.jpg
const fs = require("fs");
const path = require("path");

let srcFile = path.join(__dirname, 'logo.jpg');
let distFile = path.join(__dirname, 'logo1.jpg');

let rs = fs.createReadStream(srcFile);
let ws = fs.createWriteStream(distFile); 

// rs.on('open',function(fd){
//     console.log('开始读取文件');
// })

// rs.on('close',function(){
//     console.log('读取结束');
// })

// rs.on('data', function(trunk) {
//     if(ws.write(trunk) === false){
//         //缓冲区已满，不可写入
//         //可读流暂停读取，写入流继续
//         rs.pause();
//     }
// });

// ws.on('drain', function() {
//     rs.resume();
// })

//使用管道ripe传递数据
rs.pipe(ws);