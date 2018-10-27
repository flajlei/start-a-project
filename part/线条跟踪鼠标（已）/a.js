var all = document.getElementById('all');
var line = document.getElementById('line');
all.onmousemove=function (e){
    moveLine(e);
}
//线条跟踪鼠标
function moveLine (e){
    var de = Math.atan((e.clientY-line.offsetTop)/(e.clientX-line.offsetLeft))*180/Math.PI;
    de = Number(de.toFixed(2));//保留两位小数
    var x0 = e.clientX - line.offsetLeft;
    le = de+180;
    // console.log("linex"+line.offsetLeft);
    // console.log("liney"+line.offsetTop);
    // console.log("鼠标x"+e.clientX);
    // console.log("鼠标y"+e.clientY);
    if(x0 >= 0){
        line.setAttribute("style","transform:rotateZ("+de+"deg)");
    } else {
        line.setAttribute("style","transform:rotateZ("+le+"deg)");
    }
}