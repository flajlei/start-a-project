//------------------添加事件代码
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
addloadEvent(prepareGallery);
addloadEvent(preparePlaceholder);
//在指定元素后添加新元素
function insertAfter(newElement,targetElement) {
  var parent = targetElement.parentNode; //定义目标元素父元素
  if (parent.lastChlid == targetElement) {//如果父元素的最后一个子元素是目标元素
    parent.appendChild(newElement);//直接插入
  }else{
    parent.insertBefore(newElement,targetElement.nextSibling);//插入到目标元素的下一个相邻元素的前边
  }
}
//------------------运行
function showPic(whichPic) {
    if (!document.getElementById("placeholder")) return false;//替换失败，返回flase
    var source = whichPic.getAttribute("href");
    var place = document.getElementById("placeholder");
    place.setAttribute("src",source);
    if (document.getElementById("description")){
    var theme = whichPic.getAttribute("title") ? whichPic.getAttribute("title"):"";//三元操作符
    var description = document.getElementById("description");
    description.firstChild.nodeValue = theme;    
    }
    return true;//如果正常替换，返回true
}

//------------------事件
function prepareGallery(){
    //判断是否支持
    if (!document.getElementById) return false;
    if (!document.getElementsByTagName) return false;
    //判断是否有对应id
    if (!document.getElementById("imageGallery")) return false;
    var gallery = document.getElementById("imageGallery");
    var link = gallery.getElementsByTagName("a");
    for ( var i=0;i < link.length;i++){
        link[i].onclick = function(){
          return !showPic(this);
        }
    }
}
function preparePlaceholder(){
  if (!document.createElement) return false;
  if (!document.createTextNode) return false;
  if (!document.getElementById) return false;
  if (!document.getElementById("imageGallery")) return false;
  var placeholder = document.createElement("img");
  placeholder.setAttribute("id","placeholder");
  placeholder.setAttribute("src","back2.png");
  placeholder.setAttribute("alt","选择图片");
  var description = document.createElement("p");
  description.setAttribute("id","description");
  var desctext = document.createTextNode("选择");
  description.appendChild(desctext);
  var gallery = document.getElementById("imageGallery");
  insertAfter(placeholder,gallery);
  insertAfter(description,placeholder);
}