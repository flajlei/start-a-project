//添加事件代码
function addloadEvent(func){
  var oldonload = window.onload;
  if (typeof window.onload != 'function'){
    window.onload = func;
  }else{
    window.onload = function(){
        oldonload();
        func();
    }
  }
}
//在指定元素后添加新元素
function insertAfter(newElement,targetElement) {
  var parent = targetElement.parentNode; //定义目标元素父元素
  if (parent.lastChlid == targetElement) {//如果父元素的最后一个子元素是目标元素
    parent.appendChild(newElement);//直接插入
  }else{
    parent.insertBefore(newElement,targetElement.nextSibling);//插入到目标元素的下一个相邻元素的前边
  }
}
//获取下一个元素节点
function getNextElement(node) {
  if (node.nodeType == 1) {
    return node;
  }
  if (node.nextSibling) {
    return getNextElement(node.nextSibling);
  }
  return null;
}
//为元素节点添加class属性节点
function addClass(element,value) {
  if (!element.className) {
    element.className = value;
  } else {
    newClassName = element.className;
    newClassName+= " ";
    newClassName+= value;
    element.className = newClassName;
  }
}
//移动元素动画
function moveElement(elementID, finalx, finaly, interval) {
  if (!document.getElementById)
      return false;
  if (!document.getElementById(elementID))
      return false;
  var elem = document.getElementById(elementID);
  if (elem.movement) {
    clearTimeout(elem.movement);
  }
  if (!elem.style.left) {
    elem.style.left = "0px";
  }
  if (!elem.style.top) {
    elem.style.top = "0px";
  }
  var xpos = parseInt(elem.style.left);
  var ypos = parseInt(elem.style.top);
  if (xpos == finalx && ypos == finaly) {
    return true;
  }
  if (xpos < finalx) {
    var dist = Math.ceil((finalx - xpos)/10);
    xpos = xpos + dist;
  }
  if (xpos > finalx) {
    var dist = Math.ceil((xpos - finalx)/10);
    xpos = xpos - dist;
  }
  if (ypos < finaly) {
    var dist = Math.ceil((finaly - ypos)/10);
    xpos = dist + ypos;
  }
  if (ypos > finaly) {
    var dist = Math.ceil((ypos - finaly)/10);
    xpos = dist - ypos;
  }
  elem.style.left = xpos + "px";
  elem.style.top = ypos + "px";
  var repeat = "moveElement('" + elementID + "'," + finalx + "," + finaly + "," + interval + ")";
  movement = setTimeout(repeat, interval);
}
//Fisher–Yates Shuffle数组乱序
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
//获取url中的传参
function getQueryString(name) {
  var result = window.location.search.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));
  if (result == null || result.length < 1) {
      return "";
  }
  return result[1];
}