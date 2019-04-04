const fs = require("fs");
const path = require("path");

let fileName = path.join(__dirname,'logo.jpg');
//创建流
let stream = fs.createReadStream(fileName,{
    encoding:'utf8'
});
//建立管道，并打开的时候，触发open时间
stream.on('open', function(fd){
    console.log('管道建立，并打开:fd: ',fd);
});

stream.on("data",function(trunk){
    console.log("流  "+trunk);
})

stream.on("end", function() {
    console.log('数据读取完毕');
})