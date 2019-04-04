const fs = require("fs");
const path = require("path");

let aFilePath = path.join(__dirname,'a.txt');

//异步
fs.writeFile(aFilePath,'nihao,12222',function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log("success");
})
//同步
fs.writeFileSync(aFilePath,'你好2',{
    flag:'a'//指向后添加而不是替换
})