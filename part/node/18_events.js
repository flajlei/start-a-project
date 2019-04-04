const EventEmitter = require('events');

class DemoEmitter extends EventEmitter {
    constructor(opt) {
        super(opt);
    }

    ini() {
        console.log('init ...');
        //emit触发事件init
        this.emit('init','1234');
    }

    close() {
        console.log('close...');
        this.emit('close');
    }
}

let d = new DemoEmitter();
//设置开始监听事件init
d.on('init',param => {
    console.log('init触发'+param)
})

d.once('close',() => console.log('close'));

//全局错误抛出监听，防止程序崩溃
process.on('uncaughtException',(err) => {
    console.log('有错误'+err);
});

//程序触发错误
d.emit('error',new Error('whooo'));


d.ini();//触发

d.close();

