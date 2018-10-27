var imglist = 0;
var imglist2;
var rollTime;
$(document).ready(function(){
    //$(".roll-img").length如果当前图片不是最后一张
    setTimeout(function(){
        $(".roll-img.active").removeClass("active");
    },3000);
    rollTime = setInterval(function(){
        $(".roll-img").removeClass("left-in left-out right-in right-out");
        if(imglist<$(".roll-img").length-1){
            imglist2 = imglist + 1;
            $(".roll-img").eq(imglist).addClass("left-out");
            $(".roll-img").eq(imglist2).addClass("right-in");
            imglist++;
        } else {
            imglist2 = 0;
            $(".roll-img").eq(imglist).addClass("left-out");
            $(".roll-img").eq(imglist2).addClass("right-in");
            imglist = 0;
        }
    },3000)
})
/*从1号图开始轮播,从左向右,移出图片添加left-out,进入图片添加right-in
  读取轮播图个数，
  
*/