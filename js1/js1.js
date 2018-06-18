function colorChange() {
  if (!document.getElementById) return false;
  if (!document.getElementsByTagName) return false;
  if (!document.getElementById("nine")) return false;
  //获取nine
  var nine = document.getElementById("nine");
  //遍历nine下的div
  var block = nine.getElementsByTagName("div");
  //开始前将所有div的颜色重置
  for (var j=0;j<9;j++) {
    block[j].style.backgroundColor = "#ffa500";
  }
  //取三个随机数(floor:向下舍入，random:0-1随机取数)
  var a = Math.floor(Math.random()*9);
  var b = Math.floor(Math.random()*9);
  var c = Math.floor(Math.random()*9);
  //第二个选项应该为不满足时跳出，所以要设置不能出现的条件
  for (var k=0;a == b || b == c || a == c;k++) {
    var a = Math.floor(Math.random()*9);
    var b = Math.floor(Math.random()*9);
    var c = Math.floor(Math.random()*9);
  };
  //随机获取三个颜色
  var colorA = "#";
  var colorB = "#";
  var colorC = "#";
  for (var i=0;i<6;i++) {
    colorA += (Math.random()*16 | 0).toString(16);
    colorB += (Math.random()*16 | 0).toString(16);
    colorC += (Math.random()*16 | 0).toString(16);
  }
  //赋予对应颜色
  block[a].style.backgroundColor = colorA;
  block[b].style.backgroundColor = colorB;
  block[c].style.backgroundColor = colorC;
}

function btn() {
  //启动按钮
  var start = document.getElementById("start");
  var a = false;
  var change;
  start.onclick = function() {
    if (a = false) {
      a = true;
      change = setInterval("colorChange()",1000);
    } else if (a =true) {
      clearInterval(change);
      change = setInterval("colorChange()",1000);
    }
  }
  //关闭按钮
  var nine = document.getElementById("nine");
  var block = nine.getElementsByTagName("div");
  var stop = document.getElementById("stop");
  stop.onclick =  function() {
    for (var j=0;j<9;j++) {
      block[j].style.backgroundColor = "#ffa500";
    }
    clearInterval(change);
  }
}
addloadEvent(btn);