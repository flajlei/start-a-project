const fs = require("fs");
const path = require("path");

//读取路径，返回路径下所有文件和文件夹名称。
fs.readdir(__dirname, function(err,files) {
    files.forEach(function(item, index){
        //stat用于显示目录下文件的信息，stat.isFile()返回true则表示是文件
        fs.stat(path.join(__dirname,item),function(err,stat){
            stat.isFile() ? console.log('file: ',item):console.log('dir:',item);
        })
    })
})