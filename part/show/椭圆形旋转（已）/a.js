//鼠标接触触发事件
$(document).ready(function(){
  var a = $(".rota");
  a.mouseenter(function(){
    a.removeClass("rota");
  })
  a.mouseleave(function(){
    a.addClass("rota");
  })
})