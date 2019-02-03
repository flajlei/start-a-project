//-x=r*cos(角度)，-y=r*sin(角度)
//Math中的sin和cos使用弧度计算
//弧度=弧长/半径 弧长2πr，1°弧长=2πr/360,1°弧度=2π/360
var canvas=document.getElementById("box-c");//获取canvas
    var ctx = canvas.getContext("2d");
    var width = canvas.width;  //获取画板宽高
    var height = canvas.height;
    var r = width/2;  

window.onload=function(){
    draw();
    setInterval(function(){
        draw();
    },1000);
}


function drawBg(){
    //将绘制原点放在画板中心
    ctx.save();
    ctx.translate(r,r);
    //外圈
    ctx.beginPath();
    ctx.lineWidth=8;
    ctx.arc(0,0,r-5,0,2*Math.PI,true);
    ctx.stroke();
    //绘制小时数，arc计算右侧为0所以从3开始算
    var hour = [3,4,5,6,7,8,9,10,11,12,1,2];
    //item为内容，index下标
    hour.forEach(function(item,index){
        var rad = 2*Math.PI/12*index//一圈12等分
        var x = Math.cos(rad)*(r-30);
        var y = Math.sin(rad)*(r-30);
        ctx.font = "18px sans-serif";
        ctx.textAlign="center";
        ctx.textBaseline="middle";
        ctx.fillText(item,x,y)
    })
    //绘制刻度
    for(var i=0;i<60;i++) {
        var rad = 2*Math.PI/60*i;
        var x = Math.cos(rad)*(r-18);
        var y = Math.sin(rad)*(r-18);

        ctx.beginPath();
        if(i%5 == 0){
          ctx.fillStyle = "#000";
          ctx.arc(x,y,2,0,2*Math.PI,true);
        } else{
          ctx.fillStyle = "#bbb";
          ctx.arc(x,y,2,0,2*Math.PI,true);
        }
        ctx.fill();
    }
}
//时针
function drawHour(hour,minute) {
    ctx.save();//保存绘图环境，每次时间变动时重置到画时针前
    var rad = 2*Math.PI/12*hour + 2*Math.PI/12*minute/60;
    ctx.beginPath();
    ctx.rotate(rad);
    ctx.moveTo(0,15);
    ctx.lineTo(0,-r/2);
    ctx.lineWidth=5;
    ctx.lineCap="round";
    ctx.stroke();
    ctx.restore();//重置
}
//分针，秒针，中心点函数
function drawMinute(minute) {
    ctx.save();
    var rad = 2*Math.PI/60*minute;
    ctx.beginPath();
    ctx.rotate(rad);
    ctx.moveTo(0,18);
    ctx.lineTo(0,-r+40);
    ctx.lineWidth=3;
    ctx.lineCap="round";
    ctx.stroke();
    ctx.restore();
}
function drawSecond(second) {
    ctx.save();
    var rad = 2*Math.PI/60*second;
    ctx.beginPath();
    ctx.rotate(rad);
    ctx.moveTo(0,25);
    ctx.lineTo(2,25);
    ctx.lineTo(-2,25);
    ctx.lineTo(-1,-r+25);
    ctx.lineTo(1,-r+25);
    ctx.lineTo(2,25);
    ctx.lineWidth=1;
    ctx.fillStyle="#f00";
    ctx.fill();
    ctx.restore();
}
function drawDot() {
    ctx.beginPath();
    ctx.arc(0,0,4,0,2*Math.PI,true);
    ctx.fillStyle="#fff";
    ctx.fill();
    
}

function draw() {
    ctx.clearRect(0, 0, width, height);
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    drawBg();
    drawHour(hour,minute);
    drawMinute(minute);
    drawSecond(second);
    drawDot();
    ctx.restore();
}