
var btn = {
  // 当前状态
  currentState: 'hide',
  // 绑定事件.initialize初始化
  initialize: function () {
    var self = this;
    self.on("hover", self.transition);//鼠标放在目标元素上，开始转换
  },
  // 状态转换
  transition: function (event) {
    switch (this.currentState) {//判断当前状态
      case "hide"://如果为hide
        this.currentState = 'show';//转换为show
        doSomething();//自己的执行代码
        break;//跳出代码
      case "show":
        this.currentState = 'hide';
        doSomething();
        break;
      default://都不是（报错）
        console.log('Invalid State!');//未知状态
        break;
    }
  }
};