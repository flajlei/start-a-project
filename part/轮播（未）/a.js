//1.读取滚动窗窗口的高度和宽度
var $winwidth = $(".rollwin").width();
var $winheight = $(".rollwin").height();
var $imgint = $(".photo").length;
$(document).ready(function(){
  main();

})
//设置滚动盒子的宽高和滚动图片的宽高
//自动播放
function main(){
    console.log($imgint);
    $(".rollbox").width($winwidth*$imgint);
    $(".rollbox").height($winheight);
    $(".photo").width($winwidth);
    $(".photo").height($winheight);
    var int = 0;
    var t = setInterval(function(){ 
        // int = int-$winwidth;
        // if(int==-$winwidth*$imgint){
        // int = 0;
        // }
        // $(".rollbox").css('transform','translateX('+int+'px)');
        //当自动播放到头的时候
        $(".rollbox").append($(".photo:first"));
    },2000)
}
//点击左右
//点击小点
//鼠标左右滑动
//transform: translateX(420px);