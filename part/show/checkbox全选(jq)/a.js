$(document).ready(function(){
    //全选 全不选
    allcheck();
})
function allcheck(){
    $(".allcheck").click(function(){
        $(".check").prop("checked",$(this).prop("checked"));
    })
}
function linktype(){
    $('.btn-primary').click(function(){
        var text=[];
        for(var i=0;i<$(".linktype:checked").length;i++){
            text.push($(".linktype:checked").eq(i).val());
        }
        console.log(text);
    });
}
linktype();
