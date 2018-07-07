var ghostNum = sessionStorage.getItem("ghostNum");
var waterNum = sessionStorage.getItem("waterNum");
var day = sessionStorage.getItem("day");
var deadLine = sessionStorage.getItem("deadLineA").split("-");
var idLine = sessionStorage.getItem("idLineA").split("-");
//胜利 根据幽灵剩余人数判定ghostNum
  if (ghostNum == 0) {
    $(".body-reward").children().text("水民胜利");
  } else {
    $(".body-reward").children().text("幽灵胜利");
  };
//剩余人数 ghostNum和waterNum
$(".body-user").eq(0).children("span").text(ghostNum);
$(".body-user").eq(1).children("span").text(waterNum);
//死亡过程 idLIne和deadLine
for ( var i=0;i < day;i++) {
  $(".body-day").eq(i).removeClass("display-none");
  if (idLine[2*i]) {
    $(".deadInfo").children("div:even").eq(i).text("夜晚:"+idLine[2*i]+"号被幽灵杀死，"+idLine[2*i]+"号是"+deadLine[2*i]);//夜晚（偶数）
  } else {
    $(".deadInfo").children("div:even").eq(i).text();
    $(".body-day").eq(i).addClass("display-none");
  };
  if (idLine[2*i+1]) {
    $(".deadInfo").children("div:odd").eq(i).text("白天:"+idLine[2*i+1]+"号被全民投票投死，"+idLine[2*i+1]+"号是"+deadLine[2*i]);//白天（奇数） 
  } else {
    $(".deadInfo").children("div:even").eq(i).text();
  };
};