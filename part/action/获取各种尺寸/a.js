$(document).ready(function(){
    scrollIn(".box");
    moveIn(".box");
})
//窗口滚动事件window.onscroll
//$(document).scroll(function () {})
//窗口滚动时获取
//$div.width(); //元素宽度，不包括padding和border
//$div.height(); //元素高度，不包括padding和border
//$div.innerWidth(); //元素内宽度，包括padding，不包括border
//$div.innerHeight(); //元素内高度，包括padding，不包括border
//$div.outerWidth(); //元素可见宽度，包括padding和border
//$div.outerHeight(); //元素可见高度，包括padding和border
//$div.outerWidth(true); //元素全部宽度，包括padding、border和margin
//$div.outerHeight(true); //元素全部高度，包括padding、border和margin

function scrollIn(z){
    var a,b,c,d1,d2,e,f,g;
    window.onscroll = function(){
        a = $(z).offset().top;
        b = $(z).offset().left;
        c = $(window).scrollTop();
        d1 = $(window).width();
        d2 = $(window).height();
        e = $(z).outerWidth();
        f = $(z).outerHeight();
        g = a-c;
        $(".aa").eq(1).text("div与页面顶端的初始距离:"+a+"*"+b);
        $(".aa").eq(2).text("当前窗口左上与顶端距离:"+c);
        $(".aa").eq(3).text("当前窗口尺寸:"+d1+"*"+d2);
        $(".aa").eq(4).text("当前盒子尺寸:"+e+"*"+f);
        $(".aa").eq(5).text("当前盒子与窗口左上距离:"+g);
    }
}
//鼠标事件
//$(z).mouseover( function(){} )    穿过指定元素及其子元素时触发 
//$(z).mouseenter( function(){} )   仅穿过指定元素时触发 
//$(z).mouseout( function(){} )     离开指定元素及离开指定元素的子元素时都会触发 
//$(z).mouseleave( function(){} )   仅离开指定元素时触发 
//mousedown 按下鼠标时
//mouseup 按下后松开鼠标时
//mousemove 鼠标移动时
//$("html").mouseenter(function(){}) 类似于弹窗消失后触发事件(注意:鼠标移出页面再移回也会触发)
//给新建元素添加动作()
// $(document).on("mouseenter",'.people-list > button',function(){
//     peopleClick();
// });
//event.stopPropagation()用于阻止事件冒泡，但不阻止事件执行

function moveIn(z1){
    var a,b,c,d;
    $(z1).mousemove(function(z2){
        a = z2.pageY;//鼠标与页面左上距离
        b = z2.pageX;
        c = a-$(z1).offset().top;
        d = b-$(z1).offset().left;
        $(".bb").eq(1).text("鼠标与页面左上距离:"+a+"*"+b);
        $(".bb").eq(2).text("鼠标与盒子左上距离:"+c+"*"+d);
    })
}

//  var x = event.clientX;
//  var y = event.clientY;
//  var say = document.all("coords");
//  say.innerHTML = "X:"+x+" Y:"+y;
//  say.style.position = "absolute";
//  say.style.left = x + 30;
//  say.style.top = y;

//屏幕窗口大小
//window.innerHeight 标准浏览器及IE9+ ||
//document.documentElement.clientHeight 标准浏览器及低版本IE标准模式 ||
//document.body.clientHeight  低版本混杂模式
//滚轮距离页面高度
//window.pageYOffset 标准浏览器及IE9+ ||
//document.documentElement.scrollTop 兼容ie低版本的标准模式 ||
//document.body.scrollTop 兼容混杂模式;
//元素尺寸
// $(o).width() = o.style.width;
// $(o).innerWidth() = o.style.width+o.style.padding;
// $(o).outerWidth() = o.offsetWidth = o.style.width+o.style.padding+o.style.border；
// $(o).outerWidth(true) = o.style.width+o.style.padding+o.style.border+o.style.margin；