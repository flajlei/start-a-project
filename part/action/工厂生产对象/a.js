function setCanvas(num){
    //将画板动态铺满屏幕
    var ball = {},
    timer,
    canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    //生成小球
    for(var i=0;i<num;i++){
        ball[i] = BallFactory(canvas,2,5,1,2,1,2);
    }
    //绘制小球
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    function drawBall(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        for(var prop in ball){
            if(ball.hasOwnProperty(prop)){
                ctx.beginPath();
                ctx.fillStyle = ball[prop][0];
                ctx.arc(ball[prop][4],ball[prop][5],ball[prop][1],0,2*Math.PI,false);
                ctx.fill();
                if(ball[prop][4]<=0||ball[prop][4]>=canvas.width) ball[prop][2]=-ball[prop][2];
                if(ball[prop][5]<=0||ball[prop][5]>=canvas.height) ball[prop][3]=-ball[prop][3];
                ball[prop][4] += ball[prop][2];
                ball[prop][5] += ball[prop][3];
            }
        }
        timer = requestAnimationFrame(drawBall);
    }
    timer = requestAnimationFrame(drawBall);
}
setCanvas(60);
//随机运动小球的生成属性
/*
*参数
*生成范围          指定元素内
*最小体型              px
*最大体型              px
*最小运动速度X      px/17ms
*最大运动速度X      px/17ms
*最小运动速度Y      px/17ms
*最大运动速度Y      px/17ms
*返回值 
*颜色0 体型1 速度X2 速度Y3 起始位置X4 起始位置Y5;
*/
function BallFactory(elm,minsize,maxsize,minspeedX,maxspeedX,minspeedY,maxspeedY){
    var X,Y,a=1,color = "#";
    for(var i=0;i<6;i++){
        color += (Math.floor(Math.random()*16)).toString(16);
    }
    maxsize = Math.floor(Math.random()*(maxsize-minsize))+minsize;
    maxspeedX = (Math.round(Math.random())==0?-1:1)*(Math.floor(Math.random()*(maxspeedX-minspeedX))+minspeedX);
    maxspeedY = (Math.round(Math.random())==0?-1:1)*(Math.floor(Math.random()*(maxspeedY-minspeedY))+minspeedY);
    X = Math.floor(Math.random()*(elm.clientWidth));
    Y = Math.floor(Math.random()*(elm.clientHeight));
    return [color,maxsize,maxspeedX,maxspeedY,X,Y];
}
//定时器兼容
if(!window.requestAnimationFrame){
    var lastTime = 0;
    window.requestAnimationFrame = function(callback){
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0,16.7-(currTime - lastTime));
        var id  = window.setTimeout(function(){
            callback(currTime + timeToCall);
        },timeToCall);
        lastTime = currTime + timeToCall;
        return id;
    }
}