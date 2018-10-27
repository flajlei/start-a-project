//翻卡数
var card = 0;
var photo = new Array();
//抽选图片photoId
var photoId = new Array();
for(var i=0;i<28;i++){
  photoId.push([i+1]);
}
//位置打乱cardId
var cardId = new Array();
for(var j=0;j<16;j++){
  cardId.push([j+1]);
}
shuffle(photoId);
shuffle(cardId);
var list = new Array();
for(var k=0;k<16;k++){
  var l;
  if(k<8){
    l = k;
  } else {
    l = k-8;
  }
  list[cardId[k]-1] = photoId[l];
}
$(document).ready(function(){
  //根据打乱的顺序放置卡片
  for(var m=0;m<16;m++){
    $(".face").eq(m).css("background-image","url(../text1/photo/"+list[m]+".gif)");
  };
  //点击卡片的翻转动画
  $(".card").click(function(){
    //判断翻转的牌<2,则正常反转 获取css属性。
    if(card<2){
      $(this).children().eq(0).addClass("out");
      a = $(this).attr("alt");
      setTimeout("rollin()",500);
      card++;
    } else {
      if($(".face.in").eq(0).css("background-image") == $(".face.in").eq(1).css("background-image")) {
        console.log("相同")
        card = 0;
      } else{
        console.log("不同");
        card = 0;
        $(".back.out").removeClass("out").addClass("in");
        $(".face.in").removeClass("in").addClass("out");
      }
    }
    //>2时，判断两张是否相同/
    //相同时添加背景
    //不同时反向动画。。
    
  });
});
//背面添加in
function rollin() {
  $(".card").eq(a-1).children().eq(1).addClass("in");
};
//洗牌
function shuffle(array) {
  var a = array;
    for (var i = a.length - 1;i >= 0; i--) {
      var j = Math.floor(Math.random()*(i + 1));
      var temp = a[i];
      a[i] = a[j]
      a[j] = temp;
    }
  return a;
}