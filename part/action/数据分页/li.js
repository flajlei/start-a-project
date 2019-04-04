$(document).ready(function(){
    //infoSort();
    liActive();
})
//分页
function liActive (){
    var page=1;//初始页数;
    var shownum=8;//每页显示数
    var infonum=$(".page-list-li > li").length;//列表数据量
    var btnnum=Math.ceil(infonum/shownum);//分页数
    //页面加载完后显示对应页
    turnPage();
    function turnPage(){
        $(".page-list-li > li").attr("style","display:none");
        for(var i=shownum*(page-1);i<shownum*page;i++){
            $(".page-list-li > li").eq(i).attr("style","");
        }
    }
    //生成按钮
    $(".page-list-btn").append("<button>上一页</button>");
    $(".page-list-btn").append("<span style=\"display:none\" class='morebtn-skip'>...</span>");
    for(var j=1;j<=btnnum;j++){
        $(".page-list-btn").append("<button style=\"display:none\" class=\"numbtn\">"+j+"</button>");
    }
    $(".page-list-btn").append("<span style=\"display:none\" class='morebtn-skip'>...</span>");
    $(".page-list-btn").append("<button>下一页</button>");
    //显示初始按钮
    if(page == 1){
        $(".numbtn").eq(page-1).attr("style","");
        $(".numbtn").eq(page).attr("style","");
        $(".numbtn").eq(page+1).attr("style","");
    } else {
        $(".numbtn").eq(page-2).attr("style","");
        $(".numbtn").eq(page-1).attr("style","");
        $(".numbtn").eq(page).attr("style","");
    }
    if(page <=2){
        $(".morebtn-skip").eq(1).attr("style","");
    } else if(page >=btnnum-1){
        $(".morebtn-skip").eq(0).attr("style","");
    } else{
        $(".morebtn-skip").eq(0).attr("style","");
        $(".morebtn-skip").eq(1).attr("style","");
    }
    //给初始显示的btn添加active
    $(".page-list-btn > button").eq(page).addClass("active");
    //点击页数跳转,更改页数page
    $(".page-list-btn > button").click(function(){
        var i = $(this).text();
        //判断点击的是数字还是上下页按钮
        if(i == "上一页"){
            page--;
            if(page<1) page=1;
        } else if(i == "下一页"){
            page++;
            if(page>btnnum) page=btnnum;
        } else {
            page = i;
        }
        //对应按钮添加点击态
        $(".page-list-btn > button.active").removeClass("active");
        $(".page-list-btn > button").eq(page).addClass("active");
        //根据当前page转换显示的按钮
        $(".numbtn").attr("style","display:none");
        $(".morebtn-skip").attr("style","display:none");
        if(page == 1){
            $(".numbtn").eq(page-1).attr("style","");
            $(".numbtn").eq(page).attr("style","");
            $(".numbtn").eq(page+1).attr("style",""); 
        } else if(page == btnnum) {
            $(".numbtn").eq(page-3).attr("style","");
            $(".numbtn").eq(page-2).attr("style","");
            $(".numbtn").eq(page-1).attr("style","");
        } else {
            $(".numbtn").eq(page-2).attr("style","");
            $(".numbtn").eq(page-1).attr("style","");
            $(".numbtn").eq(page).attr("style","");
        }
        if(page <=2){
            $(".morebtn-skip").eq(1).attr("style","");
        } else if(page >=btnnum-1){
            $(".morebtn-skip").eq(0).attr("style","");
        } else{
            $(".morebtn-skip").eq(0).attr("style","");
            $(".morebtn-skip").eq(1).attr("style","");
        }
        turnPage();
    })
}
//获取数据并排序
function infoSort(){
    var data = [];
    for(var i=0;i<$(".page-list-li li").length;i++){
        data.push($(".page-list-li li").eq(i).text());
    }
    data.sort(function(x,y){
        return x-y;
    }); 
    for(i=0;i<$(".page-list-li li").length;i++){
        $(".page-list-li li").eq(i).text(data[i]);
    }
}