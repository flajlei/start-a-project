var imgl = $(".roll-img").length;
var autoroll;
$(document).ready(function(){
    auto(imgl);
})
function auto(i){
    //自动轮播部分
    autoroll = setInterval(function(){
        if(i<0){
            $(".roll-img").removeClass("active");
            i=$(".roll-img").length;
        }
        $(".roll-img").eq(i).addClass("active");
        i--;
    },2000)
    //手动按键
    
}
    clearInterval(autoroll);

//卡片从最后一个开始移动，逐个添加active
//所有卡片都有active后，全部删除并从头开始

//卡1     2
//卡2     2
//卡3     2
//卡4     2

//卡4     1
//卡1     2
//卡2     2
//卡3     2

//卡3     1
//卡4     1
//卡1     2
//卡2     2

//卡2     1
//卡3     1
//卡4     1
//卡1     2

