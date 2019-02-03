function setTime(){
    //判断天数是否正常,计算日期(注:结果为差距天数:如2号到4号差两天)
    var a = $("#starttime").val().split("-");
    var b = $("#endtime").val().split("-");
    var year = b[0]-a[0];//年份差值
    var month = b[1]-a[1];//月份差值
    var day = b[2]-a[2];//天数差值
    var all = 0;
    if(year*12+month<0){
        console.log("月份不够");
        return false;
    }
    if(year*12+month == 0&&day<0){
        console.log("天数不够");
        return false;
    }
    //计算月份起始月份a[1],结束月份b[1],该日期为起始月份和终止月份所在年内的包含天数
    //如果同年起始月份小于终止月份/同年同月 如果同年且起始月份等于终止月份/不同隔年计算月份
    if(year == 0&&Number(a[1])<Number(b[1])){
        for(var i=Number(a[1]);i<Number(b[1]);i++){
            console.log("1",monthDay(Number(a[0]),i));
            all += monthDay(Number(a[0]),i);
        }
        all = all-Number(a[2])+Number(b[2]);
    } else if (year == 0&&Number(a[1]) == Number(b[1])){
        all = day;
    } else {
        for(var i=Number(a[1]);i<Number(b[1])+12;i++){
            if(i<=12){
                all += monthDay(Number(a[0]),i);
            } else {
                all += monthDay(Number(b[0]),i-12);
            }
        }
        all = all-Number(a[2])+Number(b[2]);
        //如果年份差值大于1,添加整年的天数
        if(year > 1){
            for(var j=Number(a[0])+1;j<Number(b[0]);j++){
                all += Number(yearDay(j));
            }
        }
    }
    return all;
    //判断月份天数
    function monthDay(year,month){
        if(month==1||month==3||month==5||month==7||month==8||month==10||month==12){
            return 31;
        }
        if(month==4||month==6||month==9||month==11){
            return 30;
        }
        if(month==2){
            if(year%4==0&&year%100!=0||year%400==0){
                return 29;
            } else {
                return 28;
            }
        }
    }
    function yearDay(year){
        if(year%4==0&&year%100!=0||year%400==0){
            return 366;
        } else {
            return 365;
        }
    }
}
//js有自带的计算天数的function


//0星期天
var selectday = "2019-2-22",
back = "2019-1-22";
//起始天selectday
//返回天back
var start = new Date(selectday);
var end = new Date(back);
//天数差,时间戳版 将时间转换为时间戳  new Date().getTime()
var num = end-start;
var backday = new Date().getTime()+num;
//转回时间字符
backday = new Date(backday)
//天数差
var num = (end-start)/(1000*3600*24);