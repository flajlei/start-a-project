//接收上一页打乱顺序的数组通过-分离重组数组         完成
  var idCard = sessionStorage.getItem("idCard").split("-");
//根据人数数量确定显示多少个人物块               jq完成
// var bodyMain = document.getElementById("bodyMain");
// var card = getChildren(bodyMain);
// var id = document.getElementsByClassName("body-user1");
// for (var i=0;i<card.length;i++) {
//   if (i > idCard.length-1) {
//     card[i].classList.add("display-none");
//   } else {
//     var idText = document.createTextNode(idCard[i]);
//     id[i].appendChild(idText);
//   }
// }
$(document).ready(function(){
  for (var i=0;i<18;i++){
    if (i < $(idCard).length) {
      $(card).eq(i).find('.body-user1').text($(idCard)[i]);
    } else {
      $(card).eq(i).hide();
    }
  }
});