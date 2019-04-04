const fs = require("fs");
//启动监听
let watcher = fs.watch(__dirname);
//监听改变的事件
watcher.on("change", function (eventType, filename) {
    console.log("change: ",eventType, filename)
});
//关闭监听
setTimeout(function(){
    watcher.close();
},10000);