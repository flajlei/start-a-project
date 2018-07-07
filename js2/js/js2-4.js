//接收上一页打乱顺序的数组通过-分离重组数组         完成
  var idCard = sessionStorage.getItem("idCard").split("-");
//读取游戏进度
  if (sessionStorage.getItem("dayState")) {
    var dayState = sessionStorage.getItem("dayState");
  } else {//从头开始
    var dayState = "one";
  }
//开始天数为1
if (sessionStorage.getItem("day")) {
  var day = sessionStorage.getItem("day");
} else {
  var day = 1;
};
for (var i=0;i < day;i++) {
  $(".body-day").eq(i).show();
}
//读取被杀死的人的人的数据，有则显示deadInfo
if (sessionStorage.getItem("deadId",deadId)) {
  var deadId = sessionStorage.getItem("deadId",deadId);
  var deadCard = sessionStorage.getItem("deadCard",deadCard);
};
//根据进度改变div颜色
$(document).ready(function() {
  if (dayLine.state == "two") {
    $text.eq(0).addClass("color-end");
    $(".caret").eq(0).css("border-right-color","#92b7a5");
    $("#deadInfo").show().text(deadId+"号被杀手杀死,真实身份是"+deadCard);
    $(".sun").css("top","+=55px")
  };
});
//为进程增加状态，根据按钮使游戏进程按照1-2-3-4-下一天进行
//(状态机设置状态为独立变量，与其他变量不相关，只是用来作为判断条件确认下一步的执行步骤)

var dayLine = new StateMachine({
  init: dayState,
  //状态转换指令dayLine.killSay()
  transitions: [
    { name: 'killSay',   from: 'one',  to: 'two' },  //杀手发言
    { name: 'deadSay',   from: 'two',  to: 'three' },//亡灵发表遗言
    { name: 'peopleSay', from: 'three',to: 'four' }, //全民依次发言
    { name: 'Select',    from: 'four', to: 'one' }   //全民投票
  ],
  methods: {
    onKillSay:   function() {},
    onDeadSay:   function() {confirm('死者发言')},
    onPeopleSay: function() {alert('轮流发言')},
    onSelect:    function() {day++}
  }
});
var $text = $(".text").not("#deadInfo");//右侧四选项
var $deadInfo = $("#deadInfo");//死亡信息
$(document).ready(function() {
  //杀手杀人
  $text.eq(0).click(function() {
    if (dayLine.state == "one") {
      dayLine.killSay();
      sessionStorage.setItem("dayState",dayLine.state);//存储状态机状态
      sessionStorage.setItem("day",day);               //存储天数
      window.location.href = "js2-5.html";
    } else {
      alert("请按顺序操作");
    }
  });
  //亡灵发表遗言
  $text.eq(1).click(function() {
    if (dayLine.state == "two") {
      dayLine.deadSay();
      $text.eq(1).addClass("color-end");
      $(".caret").eq(1).css("border-right-color","#92b7a5");
    } else {
      alert("请按顺序操作");
    }
  });
  //全民发表遗言
  $text.eq(2).click(function() {
    if (dayLine.state == "three") {
      dayLine.peopleSay();
      $text.eq(2).addClass("color-end");
      $(".caret").eq(2).css("border-right-color","#92b7a5");
    } else {
      alert("请按顺序操作");
    }
  });
  //全民投票
  $text.eq(3).click(function() {
    if (dayLine.state == "four") {
      dayLine.select();
      sessionStorage.setItem("dayState",dayLine.state);
      sessionStorage.setItem("day",day);
      window.location.href = "js2-5.html";
    } else {
      alert("请按顺序操作");
    }
  });
});