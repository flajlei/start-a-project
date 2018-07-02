//接收上一页打乱顺序的数组通过-分离重组数组         完成
  var idCard = sessionStorage.getItem("idCard").split("-");
//根据人数数量确定显示多少个人物块                 完成
  var bodyMain = document.getElementById("bodyMain");
  var card = getChildren(bodyMain);
  var id = document.getElementsByClassName("body-user1");
  for (var i=0;i<card.length;i++) {
    if (i > idCard.length-1) {
      card[i].classList.add("display-none");
    } else {
      var idText = document.createTextNode(idCard[i]);
      id[i].appendChild(idText);
    }
  }
//为天数增加状态，根据按钮使游戏进程按照1-2-下一天进行
  var day = new Object();

//为人员添加存活和死亡两个状态，在选择某人员并按下按钮后状态切换，死亡状态不能选择，对象所属的角色变量-1
//将这个死亡顺序记录下来
//按下按钮后判断，如果满足结束条件，游戏结束，跳转到结算画面，未结束则继续
//跳转结束画面时，将死亡顺序的变量传过去。

//变为法官查看按钮后，按钮的onclick改为跳转另一个界面
//将随机后的数组存放并传入下一个页面
//在进行步骤和选人界面，用状态机保持一个隐藏一个显示
//状态机
var menu = {
    //currentState当前状态
    　currentState: 'hide',
    // 绑定事件 initialize初始化
    　initialize: function() {
    　　var self = this;
    　　self.on("hover", self.transition);
    　},
    // 状态转换
    　transition: function(event){
    　　switch(this.currentState) {
    　　　case "hide":
    　　　　this.currentState = 'show';
    　　　　doSomething();
    　　　　break;
    　　  case "show":
    　　　　this.currentState = 'hide';
    　　　　doSomething();
    　　　　break;
    　　　default:
    　　　  console.log('Invalid State!');
    　　　　break;
    　　　}
    　　}
    };