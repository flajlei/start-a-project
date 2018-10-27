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
