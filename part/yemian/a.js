var imglist = 0; //当前图片
var imglist2;    //要切换的图片
var rollTime;    //自动轮播计时器
$(document).ready(function(){
    setTimeout(function(){
        $(".roll-img.active").removeClass("active");
    },3000);
    rollImg();
})

//自动轮播
function rollImg(){
    rollTime = setInterval(function(){
        //此处决定自动轮播方向
        rollRight();
    //轮播时间间隔
    },3000)
}
$(".left-caret").click(function(){
    clearInterval(rollTime);
    rollLeft();
    rollImg();
})
$(".right-caret").click(function(){
    clearInterval(rollTime);
    rollRight();
    rollImg();
})
$(".point").click(function(){
    clearInterval(rollTime);
    imglist2 = $(this).index();
    rollJump();
    rollImg();
})



//向左轮播
//点击按钮时
//移出图片添加right-out,进入图片添加left-in;
function rollLeft(){
    $(".roll-img").removeClass("left-in left-out right-in right-out");
    if(imglist>0){
        imglist2 = imglist - 1;
        $(".roll-img").eq(imglist).addClass("right-out");
        $(".roll-img").eq(imglist2).addClass("left-in");
        rollPoint()
        imglist--;
    } else {
        //当前图片为第一张.imglist为0;
        imglist2 = $(".roll-img").length-1;
        $(".roll-img").eq(imglist).addClass("right-out");
        $(".roll-img").eq(imglist2).addClass("left-in");
        rollPoint()
        imglist = $(".roll-img").length-1;
    }
}
//向右轮播
function rollRight(){
    $(".roll-img").removeClass("left-in left-out right-in right-out");
    if(imglist<$(".roll-img").length-1){
        imglist2 = imglist + 1;
        $(".roll-img").eq(imglist).addClass("left-out");
        $(".roll-img").eq(imglist2).addClass("right-in");
        rollPoint()
        imglist++;
    } else {
        imglist2 = 0;
        $(".roll-img").eq(imglist).addClass("left-out");
        $(".roll-img").eq(imglist2).addClass("right-in");
        rollPoint()
        imglist = 0;
    }
}
//自由跳转
function rollJump(){
    $(".roll-img").removeClass("left-in left-out right-in right-out");
    if(imglist2 > imglist){
        $(".roll-img").eq(imglist).addClass("left-out");
        $(".roll-img").eq(imglist2).addClass("right-in");
    } else {
        $(".roll-img").eq(imglist).addClass("right-out");
        $(".roll-img").eq(imglist2).addClass("left-in");
    }
    rollPoint();
    imglist = imglist2;
}
//下方原点转换
function rollPoint(){
    $(".point").removeClass("active");
    $(".point").eq(imglist2).addClass("active");
}
/*从1号图开始轮播,从左向右,移出图片添加left-out,进入图片添加right-in
  读取轮播图个数，
  
*/