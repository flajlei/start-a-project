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
  //在指定元素后添加新元素
  function insertAfter(newElement,targetElement) {
    var parent = targetElement.parentNode; //定义目标元素父元素
    if (parent.lastChlid == targetElement) {//如果父元素的最后一个子元素是目标元素
      parent.appendChild(newElement);//直接插入
    }else{
      parent.insertBefore(newElement,targetElement.nextSibling);//插入到目标元素的下一个相邻元素的前边
    }
  }