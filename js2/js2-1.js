function addPeopleNum() {
  if (!document.getElementById) return false;
  if (!document.createTextNode) return false;
  //提取按钮
  var nextBtn = document.getElementById("nextBtn");
  //获取鬼与水民输入位置
  var ghost = document.getElementById("ghost");
  var man = document.getElementById("man");
  //动态提取输入值并分配人数
  var people = document.getElementById("peopleNum");
  people.oninput = function peopleNum() {
    var peopleNum = people.value;
    if (peopleNum >= 4 && peopleNum <= 5) {
      var ghostNum = 1;
      var manNum = peopleNum - ghostNum;
    }
    else if (peopleNum >= 6 && peopleNum <= 8) {
      var ghostNum = 2;
      var manNum = peopleNum - ghostNum;
    }
    else if (peopleNum >= 9 && peopleNum <= 11) {
      var ghostNum = 3;
      var manNum = peopleNum - ghostNum;
    }
    else if (peopleNum >= 12 && peopleNum <= 15) {
      var ghostNum = 4;
      var manNum = peopleNum - ghostNum;
    }
    else if (peopleNum >= 16 && peopleNum <= 18) {
      var ghostNum = 5;
      var manNum = peopleNum - ghostNum;
    }
    else {
      var ghostNum = " ";
      var manNum = " ";
    }
    ghost.firstChild.nodeValue = ghostNum;
    man.firstChild.nodeValue = manNum;//在html中对应的text空间不能为空白（我在span里加了个空格）
  }
  //点击按钮跳转页面
  nextBtn.onclick = function() {
    //提取输入值
    peopleNum = people.value;
    ghostNum = ghost.firstChild.nodeValue;
    if (peopleNum >= 4 && peopleNum <= 18) {
      // sessionStorage.setItem("peopleNum",peopleNum);
      window.location.href = "js2-2.html"+"?"+"peopleNum"+"="+peopleNum+"&"+"ghostNum"+"="+ghostNum;
    } 
    else if (peopleNum < 4 || peopleNum > 18){
      var popup = document.getElementById("popup");
      popup.classList.add("display-block");
      popup.onclick = function() {
        popup.classList.remove("display-block");
      }
    }
  }
}
addloadEvent(addPeopleNum);