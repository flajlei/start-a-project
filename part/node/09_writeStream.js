const fs = require('fs');
const path = require('path');

let aFileName = path.join(__dirname, 'a.text');

let stream = fs.createWriteStream(aFileName,{
    flags:'w'
});
//开始读取
stream.on("open", function(fd) {
    console.log('可写流打开: ',fd);
})
//读取结束
stream.on('close',function(){
    console.log('可写流关闭')
});
//写入数据
for(let i = 0;i < 30; i++){
    stream.write('数据流写入'+i+'\r\n');
}
//数据写入结束时，写入内容
stream.end("结束");