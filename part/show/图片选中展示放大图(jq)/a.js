//鼠标进入指定元素时放大事件开始
//鼠标移出指定元素时放大事件结束
//show1
//show2
//show3
//
$(document).ready(function(){
    moveIn("#show1","#show2","#show3");
})
//图片放大的尺寸   a
//显示框的尺寸    b
//position的移动距离 -(a-b)*(鼠标与盒子左上的距离/盒子尺寸)
//z1:小图片 z2:放大图片放置框 z3:放大图片
function moveIn(z1,z2,z3){
    var zoomX,zoomY,a,b,X,Y;
    //获取小图片,显示框,放大图片的尺寸并计算放大比例
    // zoomX X轴缩放比例 (c1-b1)/a1
    zoomX = ($(z3).outerWidth() - $(z2).outerWidth())/$(z1).outerWidth();
    // zoomY Y轴缩放比例 (c2-b2)/a2
    zoomY = ($(z3).outerHeight() - $(z2).outerHeight())/$(z1).outerHeight();
    $(z1).mousemove(function(el){
        //鼠标移动后为放大图片添加top及left
        a = el.pageX-$(z1).offset().left;//左
        b = el.pageY-$(z1).offset().top;//上
        X = Math.round(-a*zoomX);
        Y = Math.round(-b*zoomY)
        $(".b").eq(0).text("鼠标与盒子左上距离:"+ Math.round(-a*zoomX)+"*"+Math.round(-a*zoomY));
        $(z3).css({"top":Y,"left":X})
    })
}