var i = 0;
var a = $(".fly.active").attr("alt");
$(document).ready(function(){
  //初始标题
  $(".name").text(a);
  setTimeout("auto()",3000);
  $(".list").mouseenter(function(){
    //点击时清除自动播放，并清除所有activeout，activein和active;
    $(".fly.activeout").removeClass("activeout");
    $(".fly.activein").removeClass("activein");
    $(".fly.active").removeClass("active");
    $(".down").children().removeClass("active");
    //获取点击的id数
    a = $(this).attr("alt");
    b = $(".fly").eq(a-1).attr("theme")
    $(".fly").eq(a-2).addClass("activeout");
    $(".fly").eq(a-1).addClass("activein");
    $(".fly").eq(a-1).addClass("active");
    $(".name").text(b);
    $(".down").children().eq(a-2).removeClass("active");
    $(".down").children().eq(a-1).addClass("active");
  })
});
//自动播放
function auto(){
  if (a == 6) {
    a=0;
  }
  //顺序
  //右侧显示是因为out还在，block还在，需要每一次都清除所有的activeout再给当前的div添加activeout，
  $(".fly.activeout").removeClass("activeout");
  //出去的增加activeout,删除activein和active
  $(".fly").eq(a-1).addClass("activeout");
  $(".fly").eq(a-1).removeClass("activein"); 
  $(".fly").eq(a-1).removeClass("active"); 
  //进入的增加activein和active
  $(".fly").eq(a).addClass("activein");
  $(".fly").eq(a).addClass("active");
  b = $(".fly").eq(a).attr("theme")
  $(".name").text(b);
  $(".down").children().eq(a-1).removeClass("active");
  $(".down").children().eq(a).addClass("active");
  if(a<$(".fly").length-1) {
      a++;
    } else {
      a=0;
  }
  setTimeout("auto()",3000);
}
//轮播图的动画由css带动，而js带动active的切换