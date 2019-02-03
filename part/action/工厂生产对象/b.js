var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var mouse={x:0,y:0};
window.addEventListener("mousemove",function(event){
    mouse.x = event.x;
    mouse.y = event.y;
})
setCanvas(150);
function setCanvas(num){
    "use strict";
    //将画板动态铺满屏幕
    var ball = [],
    balla,
    timer,
    canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    //生成小球
    for(var i=0;i<num;i++){
        balla = BallFactory(canvas,2,5,3,5,3,5);
        ball.push(new Ball(balla[0],balla[1],balla[1],balla[2],balla[3],balla[4],balla[5]));
    }
    //绘制小球
    function drawBall(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        for(var prop in ball){
            ball[prop].brush();
        }
        timer = requestAnimationFrame(drawBall);
    }
    drawBall();
}
//随机运动小球的生成属性
/*
*参数
*生成范围          指定元素内
*最小体型              0.1px
*最大体型              0.1px
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
    maxspeedX = (Math.round(Math.random())==0?-0.1:0.1)*(Math.floor(Math.random()*(maxspeedX-minspeedX+1))+minspeedX);
    maxspeedY = (Math.round(Math.random())==0?-0.1:0.1)*(Math.floor(Math.random()*(maxspeedY-minspeedY+1))+minspeedY);
    X = Math.floor(Math.random()*(elm.clientWidth));
    Y = Math.floor(Math.random()*(elm.clientHeight));
    return [color,maxsize,maxspeedX,maxspeedY,X,Y];
}
//球属性
function Ball(color,size,size1,speedX,speedY,positionX,positionY){
    this.color = color;
    this.size = size;
    this.minsize = size1;
    this.speedX = speedX;
    this.speedY = speedY;
    this.positionX = positionX;
    this.positionY = positionY;
    Ball.prototype.draw = function(){
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.positionX,this.positionY,this.size,0,2*Math.PI,false);
        ctx.fill();
    }
    Ball.prototype.brush = function(){
        if(this.positionX<=0||this.positionX>=canvas.width) this.speedX=-this.speedX;
        if(this.positionY<=0||this.positionY>=canvas.height) this.speedY=-this.speedY;
        if(this.positionX-mouse.x<=50&&this.positionX-mouse.x>=-50&&this.positionY-mouse.y<=50&&this.positionY-mouse.y>=-50&&this.size<30){
            this.size += 0.7; 
        }
        if((this.positionX-mouse.x>50||this.positionX-mouse.x<-50)&&(this.positionY-mouse.y>50||this.positionY-mouse.y<-50)&&this.size>this.minsize){
            this.size -= 0.7;
        }
        this.positionX += this.speedX;
        this.positionY += this.speedY;
        this.draw();
    }
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