var imglist = 0;
var imglist2;
var rollTime;
$(document).ready(function(){
    //$(".roll-img").length如果当前图片不是最后一张
    setTimeout(function(){
        $(".roll-img.active").removeClass("active");
    },10000);
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
    },10000)
})