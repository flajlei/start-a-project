function displayAbbreviations() {
  if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false; 
  var abbreviations = document.getElementsByTagName("abbr");
  if (abbreviations.length < 1) return false;
  var defs = new Array();//创建defs为数组
  for (var i=0; i<abbreviations.length;i++) {
    if (abbreviations[i].childNodes.length < 1) continue;//解决ie6不识别abbr问题
    var definition = abbreviations[i].getAttribute("title");//title为缩略语全名
    var key = abbreviations[i].firstChild.nodeValue;//文本元素为缩略语
    defs[key] = definition;//缩略语为下标，右边为对应全名
    //defs[abbreviations[i].firstChild.nodeValue] = abbreviations[i].getAttribute("title");
  }
  //创建定义列表
  var dlist = document.createElement("dl");
  for (key in defs){
    var definition = defs[key];
    var dtitle = document.createElement("dt");
    var dtitle_text = document.createTextNode(key);//插入文本为var定义时不需要""
    dtitle.appendChild(dtitle_text);
    var ddesc = document.createElement("dd");
    var ddesc_text = document.createTextNode(definition);
    ddesc.appendChild(ddesc_text);
    dlist.appendChild(dtitle);
    dlist.appendChild(ddesc);
  }
  if (dlist.childNodes.length < 1) return false;//解决ie6不识别abbr问题
  var header = document.createElement("h2");
  var header_text = document.createTextNode("Abbreviations");
  header.appendChild(header_text);
  document.body.appendChild(header);
  document.body.appendChild(dlist);
}
addloadEvent(displayAbbreviations);//网页打开时启动

//文献来源 citation引用
function displayCitations() {
    var quotes = document.getElementsByTagName("blockquote");
    for (var i=0; i<quotes.length; i++) {
      if (!quotes[i].getAttribute("cite")) continue;
      //插入元素的内容
      var url = quotes[i].getAttribute("cite");
      var quoteChildren = quotes[i].getElementsByTagName("*");//quotes下的全部“元素节点”
      if (quoteChildren.length < 1) continue;
      //插入元素的位置
      var elem = quoteChildren[quoteChildren.length-1];//长度从1计算，数组从0计算,最后一个元素节点
      //创建链接
      var link = document.createElement("a");
      var link_text = document.createTextNode("source");
      link.appendChild(link_text);
      link.setAttribute("href",url);
      //插入链接
      var superscript = document.createElement("sup");
      superscript.appendChild(link);
      elem.appendChild(superscript);
    }
  }
  addloadEvent(displayCitations);
//奇偶单独显示
// function stripeTables() {
//   if (!document.getElementsByTagName) return false;
//   var tables = document.getElementsByTagName("table");
//   var odd, rows;
//   for (var i=0;i<tables.length; i++) {
//     obb = false;
//     rows = table[i].getElementsByTagName("tr");
//     for(var j=0;j<rows.length; j++) {
//       if (odd = true) {
//         addClass(rows[j],"odd");
//         odd = false;
//       }else {
//         odd = true;
//       }
//     }
//   }
// }


function positionMessage() {
  if (!document.getElementById) return false;
  if (!document.getElementById("element")) return false;
  var elem = document.getElementById("element");
  elem.style.position = "absolute";
  elem.style.left = "50px";
  elem.style.top = "100px";
  moveElement("element",200,200,10);
}
addloadEvent(positionMessage);
