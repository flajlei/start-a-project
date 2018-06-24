//使用临时存储参数sessionStorage
// var peopleNum = sessionStorage.getItem("peopleNum");
var peopleNum = getQueryString("peopleNum");//从url读取传递参数
var ghostNum = getQueryString("ghostNum");
var manNum = peopleNum - ghostNum;
var idCard = new Array();
//根据人数分配鬼和水民
for (var i=0; i<peopleNum; i++) {
  if (i<ghostNum) {
  idCard[i] = "幽灵";
  } else if (i >= ghostNum) {
  idCard[i] = "水民";
  }
}
//将排序打乱                             完成
// var a = idCard;
// for (var i = a.length - 1;i >= 0; i--) {
//   var j = Math.floor(Math.random()*(i + 1));
//   var temp = a[i];
//   a[i] = a[j]
//   a[j] = temp;
// }
addloadEvent(shuffle(idCard));
alert(idCard);
//点击按钮触发事件
//根据cardId是否有display-none属性来判断当前进度
//根据idcard数组决定要删除哪个牌面的none属性使其显示出来
//修改按钮
function card() {
  //获取序号，牌面，按钮
  if (!document.getElementById) return false;
  var cardId = document.getElementById("cardId");
  var cardBack = document.getElementById("cardBack");
  var cardMan = document.getElementById("cardMan");
  var cardGhost = document.getElementById("cardGhost");
  var next = document.getElementById("next");
  //页面初始设置
  var i=0;
  var peopleID = i+1;
  cardId.firstChild.nodeValue = peopleID;
  next.firstChild.nodeValue = "查看"+peopleID+"号身份"
  //点击按钮触发事件
  next.onclick = function cardChange() {

  }
}
addloadEvent(card);