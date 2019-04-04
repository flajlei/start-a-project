const fs = require("fs");
const path = require("path");

//同步读取文件，只适合小文件
// let fileContent = fs.readFileSync(__filename, {
//     encoding: 'utf8'
// });

// console.log(fileContent);

//异步 //dirname当前文件路径
//只适合读取小文件;
let mainJSFileName = path.join(__dirname,'main.js');
fs.readFile(mainJSFileName,{
    encoding:'utf8'
},function(err,data){
    console.log("读取完毕");
    if(err) {
        console.log('异常: ',err);
        return;
    }
    console.log(data);
});
console.log("主线程继续执行");