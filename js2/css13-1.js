function simplePage() {
  var simple = document.getElementById("simple");
  simple.onclick = function() {
    window.location.href = "js2-1.html";//当前页面跳转
  }
}
addloadEvent(simplePage);
//window.history.back(-1)   返回上一页