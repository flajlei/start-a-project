//接收上一页打乱顺序的数组通过-分离重组数组         完成
  var idCard = sessionStorage.getItem("idCard").split("-");
  var peopleNum = sessionStorage.getItem("peopleNum");
  var ghostNum = sessionStorage.getItem("ghostNum");
  if (sessionStorage.getItem("waterNum")) {
    var waterNum = sessionStorage.getItem("waterNum");
  } else {
    var waterNum = peopleNum - ghostNum;
  }
//根据人数数量确定显示多少个人物块            使用jq完成
  $(document).ready(function(){
    for (var i=0;i<18;i++){
      if (i < $(idCard).length) {
        $(card).eq(i).find('.body-user1').text($(idCard)[i]);
      } else {
        $(card).eq(i).hide();
      }
    }
  });
//为人员添加存活和死亡两个状态，在选择某人员并按下按钮后状态切换，死亡状态不能选择，对象所属的角色变量-1
var life = new StateMachine({
  init: 'live',
  transitions: [
    { name: 'kill', from: 'live',  to: 'die' },//杀
  ],
  methods: {
    onkill: function() {}
  }
});
//投票 index,查询当前点击元素在数组中第几个（从0计数）
$(document).ready(function() {
  $(card).click(function() {
    deadId = $(this).index()+1;
    deadCard = idCard[deadId-1];
    sessionStorage.setItem("deadId",deadId);
    sessionStorage.setItem("deadCard",deadCard);
  });
});
//将这个死亡顺序记录下来 点击按钮触发记录，避免点击时多次记录
if (sessionStorage.getItem("deadLineA")) {
  var deadLine = sessionStorage.getItem("deadLineA").split("-");
} else {
  var deadLine = new Array();//死亡身份顺序
};
if (sessionStorage.getItem("idLineA")) {
  var idLine = sessionStorage.getItem("idLineA").split("-");
} else {
  var idLine = new Array();//死亡号顺序
};
for (var j=0;j<idLine.length;j++){//已死亡的人改变颜色
  $(card).eq(idLine[j]-1).find(".body-user1").removeClass("bgcolor-yellow").addClass("dead");
};
//选人后点击按钮
$(document).ready(function() {
  $(".footer-btn").click(function() {
    //    window.location.href
    for(var k=0;k<idLine.length;k++) {//检测选中的人是否已死亡
      if(deadId == idLine[k]) {
        alert("该玩家已死亡");
        return false;
      }
    };
    if(deadCard == "幽灵") {//检测死亡身份并对应减1
      ghostNum = ghostNum - 1;
    } else {
      waterNum = waterNum - 1;
    }
    deadLine.push(deadCard);
    idLine.push(deadId);
    deadLineA = deadLine.join("-");
    idLineA = idLine.join("-");
    sessionStorage.setItem("deadLineA",deadLineA);
    sessionStorage.setItem("idLineA",idLineA);
    sessionStorage.setItem("ghostNum",ghostNum);
    sessionStorage.setItem("waterNum",waterNum);
    if (ghostNum = 0 || waterNum <= ghostNum) {
      window.location.href = "css13-2.html";
    } else {
      window.location.href = "js2-4.html";
    }
  });
});
//按下按钮后判断，如果满足结束条件，游戏结束，跳转到结算画面，未结束则继续
