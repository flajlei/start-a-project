//获取画板及其宽高
var canvas = document.getElementById("loading");
var ctx = canvas.getContext("2d");
var width = canvas.width;
var height = canvas.height;
var r = width/2;

window.onload=function(){
    var j = 0;
    drawload(j);
    setInterval(function(){
        if(j>=8){
          j=0;
        }
        j++;
        drawload(j);
    },100);
}

function drawload(j){
    j=j%8;
    ctx.clearRect(0, 0, width, height);
    ctx.save();
    ctx.translate(r,r);
    //移动作图点
    ctx.beginPath();
    // ctx.arc(0,0,3,0,2*Math.PI,true);
    // ctx.fillStyle="#000";
    // ctx.fill();
    var rad = j*2*Math.PI/8;
    ctx.lineWidth=5;
    ctx.beginPath();
    ctx.rotate(rad);
    ctx.moveTo(0,30);
    ctx.lineTo(0,20);
    ctx.stroke();
    ctx.rotate(-2*Math.PI/8);
    ctx.moveTo(0,30);
    ctx.lineTo(0,20);
    ctx.stroke();
    ctx.rotate(-2*Math.PI/8);
    ctx.moveTo(0,30);
    ctx.lineTo(0,20);
    ctx.stroke();
    ctx.restore();
}