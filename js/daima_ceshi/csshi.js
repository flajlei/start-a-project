function ceshi() {
    var a = Math.floor(Math.random()*9);
    var b = Math.floor(Math.random()*9);
    var c = Math.floor(Math.random()*9);
    for (var k=0;a == b && b == c && a == c;k++) {
      var a = Math.floor(Math.random()*9);
      var b = Math.floor(Math.random()*9);
      var c = Math.floor(Math.random()*9);
    };
}
addloadEvent(ceshi);