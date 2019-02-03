var keyword={'citytradelist': [['Zone651', '中关村、五道口'], ['Zone31', '天安门、王府井地区'], ['Zone44', '首都机场、新国展地区'], ['Zone767', '国贸地区'], ['Zone133', '东直门、工体、雍和宫地区'], ['Zone138', '亚运村、奥体中心地区'], ['Zone37', '燕莎、三里屯商业区'], ['Zone41', '西单、金融街地区'], ['Zone40', '西直门及北京展览馆地区'], ['Zone32', '前门、崇文门商贸区']], 'cityadministrativelist': [['Location92', '西城区'], ['Location93', '东城区'], ['Location94', '朝阳区'], ['Location95', '房山区'], ['Location96', '海淀区'], ['Location97', '石景山区'], ['Location98', '顺义区'], ['Location101', '丰台区'], ['Location102', '怀柔区'], ['Location103', '密云区'], ['Location104', '昌平区'], ['Location105', '大兴区'], ['Location106', '平谷区'], ['Location108', '通州区'], ['Location109', '延庆区'], ['Location130', '门头沟区'], ['Location1005', '燕郊']], 'cityairporttrainlist': [['Airport1833065', '南苑机场'], ['Airport1833066', '首都国际机场'], ['RailwayStation2467476', '北京火车站'], ['RailwayStation2467480', '北京西站'], ['RailwayStation2467493', '北京南站'], ['RailwayStation2467495', '北京北站']], 'citymetrolist': [['Metro1', '1号线'], ['Metro2', '2号线'], ['Metro3', '4号线大兴线'], ['Metro4', '5号线'], ['Metro16', '6号线'], ['Metro18', '7号线'], ['Metro5', '8号线'], ['Metro15', '9号线'], ['Metro6', '10号线'], ['Metro7', '13号线'], ['Metro17', '14号线西'], ['Metro19', '14号线东'], ['Metro10', '15号线'], ['Metro20', '16号线'], ['Metro8', '八通线'], ['Metro12', '亦庄线'], ['Metro14', '房山线'], ['Metro21', '燕房线'], ['Metro22', 'S1线'], ['Metro23', '西郊线'], ['Metro9', '机场快轨'], ['Metro11', '昌平线']]
}
function inputKey(){
    var input = $(".searchkey-input");
    var list = 0;
    $(".searchkey-input").click(function(){
        if($(".winbox-list").length==0){
            $(".searchkey-winbox").prepend("<h4 style='margin:5px 0;'>热门商圈</h4><div class='winbox-list' style='text-algin:center'></div><h4 style='margin:5px 0;'>行政区</h4><div class='winbox-list' style='text-algin:center'></div><h4 style='margin:5px 0;'>机场火车站</h4><div class='winbox-list' style='text-algin:center'></div><h4 style='margin:5px 0;'>地铁线</h4><div class='winbox-list' style='text-algin:center'></div>")
            for(prop in keyword){
                for(var i=0;i<keyword[prop].length;i++){
                    $(".winbox-list").eq(list).prepend("<span style='padding:0 5px;cursor:pointer' value='"+keyword[prop][i][0]+"'>"+keyword[prop][i][1]+"</span>")
                }
                list++;
            }
            list = 0;
        }
        $(".searchkey-winbox").css("display","block");
    })
    $(".searchkey-winbox").mouseleave(function(){
        $(".searchkey-winbox").empty();
        $(".searchkey-winbox").css("display","none");
    })
    $(".searchkey-winbox").on("mouseenter",function(){
        console.log("1");
        $(".searchkey-winbox span").mouseenter(function(){
            $(this).prop("style").backgroundColor = '#2F79DB';
            $(this).prop("style").color = '#fff';
        })
        $(".searchkey-winbox span").mouseleave(function(){
            $(this).prop("style").backgroundColor = '#fff';
            $(this).prop("style").color = '#000';
        })
        $(".searchkey-winbox span").click(function(){
            var text =  $(this).text();
            var textid =  $(this).attr("value");
            $(".searchkey-input").val(text);
            $(".searchkey-winbox").empty();
            $(".searchkey-winbox").css("display","none");
        })
    })
}
inputKey();