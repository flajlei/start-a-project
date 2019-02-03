//0星期天
var selectday = "2019-02-22",
back = "2019-2-25";

daylist(selectday,back);
function daylist(selectday,back){
    var today = new Date(),
    year = today.getFullYear(),
    month = today.getMonth()+1,
    day = today.getDate(),
    week = today.getDay(),
    list=[];//日期流
    if(back !== void 0){
        //计算对应返程天数
        var start = new Date(selectday),
        end = new Date(back),
        daynum = end-start,
        back = new Date().getTime()+daynum,
        back = new Date(back),
        backyear = back.getFullYear(),
        backmonth = back.getMonth()+1,
        backday = back.getDate(),
        backweek = back.getDay();
    }
    //创建div
    for(var i=0;i<53;i++){
        $(".year-box").prepend("<div class='week-box'></div>");
        for(var j=0;j<7;j++){
            $(".year-box > .week-box").eq(0).append("<div class='day-box' year='"+ year +"'><div class='day-num'>"+ month + "/" + day +"星期"+ week +"</div><div class='day-week' backyear='"+ backyear +"'>"+ backmonth + "/" + backday +"星期"+ backweek +"</div></div>");
            list.push(year+"-"+month+"-"+day);
            dayadd();
        }
    }
    if(backday === void 0){
        $(".day-week").css("display","none");
        $(".day-num").css("padding","29px 10px");
    }else{
        $(".day-week").css("display","block");
        $(".day-num").css("padding","12px 10px");
    }
    //根据选择的日期显示初始页,并给当前天数添加active;
    selectday = new Date(selectday);
    var a = list.indexOf(selectday.getFullYear()+"-"+(selectday.getMonth()+1)+"-"+selectday.getDate());
    var b = a%7;
    var weekpage = Math.floor(a/7);
    if(a>0){
        for(var k=0;k<weekpage;k++){
            $(".week-box").eq($(".week-box").length-1-k).css("left","-630px");
        }
    }
    $(".week-box").eq($(".week-box").length-1-weekpage).children().eq(b).addClass("active");
    //day-box切换active
    $(".day-box").click(function(){
        $(".day-box.active").removeClass("active");
        $(this).addClass("active");
    })
    //天数增加
    function dayadd(){
        day++;
        week++;
        backday++;
        backweek++;
        //31天进位1,3,5,7,8,10,12
        if(month==1||month==3||month==5||month==7||month==8||month==10||month==12){
            if(day == 32){
                day = 1;
                month++;
            }
        }
        //30天进位4,6,9,11
        else if(month==4||month==6||month==9||month==11&&day==31){
            if(day == 31){
                day = 1;
                month++;
            }
        }
        //二月进位2 28 2 29
        else if(month==2){
            if(year%4==0&&year%100!=0||year%400==0){
                if(day == 30){
                    day = 1;
                    month++;
                }
            } else {
                if(day == 29){
                    day = 1;
                    month++;
                }
            }
        }
        //月份进位
        if(month == 13){
            month = 1;
            year++;
        }
        //星期转换
        if(week == 8){
            week = 1;
        }
        //返程31天进位1,3,5,7,8,10,12
        if(backmonth==1||backmonth==3||backmonth==5||backmonth==7||backmonth==8||backmonth==10||backmonth==12){
            if(backday == 32){
                backday = 1;
                backmonth++;
            }
        }
        //返程30天进位4,6,9,11
        else if(backmonth==4||backmonth==6||backmonth==9||backmonth==11&&backday==31){
            if(backday == 31){
                backday = 1;
                backmonth++;
            }
        }
        //返程二月进位2 28 2 29
        else if(backmonth==2){
            if(backyear%4==0&&backyear%100!=0||backyear%400==0){
                if(backday == 30){
                    backday = 1;
                    backmonth++;
                }
            } else {
                if(backday == 29){
                    backday = 1;
                    backmonth++;
                }
            }
        }
        //返程月份进位
        if(backmonth == 13){
            backmonth = 1;
            backyear++;
        }
        //返程星期转换
        if(backweek == 8){
            backweek = 1;
        }
    }
    //周翻页
    function weekchange(){
        var i=weekpage+1,change=0;
        $(".lastweek-btn").click(function(){
            if(i>1&&change==0){
                i--;
                $(".week-box").eq($(".week-box").length-i).css("left","0px");
                change=1;
                setTimeout(function(){change=0;},900);
            }
        })
        $(".nextweek-btn").click(function(){
            if(i<52&&change==0){
                i++;
                $(".week-box").eq($(".week-box").length-i+1).css("left","-630px");
                change=1;
                setTimeout(function(){change=0;},900);
            };
        })
    }
    weekchange();
}