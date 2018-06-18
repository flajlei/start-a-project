function moveElement(elementID,finalx,finaly,interval) {
    if (!document.getElementById) return false;
    if (!document.getElementById(elementID)) return false;
    var elem = document.getElementById(elementID);
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    if (xpos == finalx && ypos == finaly) {
        return true;
    }
    if (xpos < finalx) {
    xpos++;
    }
    if (xpos > finalx) {
    xpos--;
    }
    if (ypos < finaly) {
    ypos++;
    }
    if (ypos > finaly) {
    ypos--;
    }
    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    var repeat = "moveElement('"+elementID+"',"+finalx+","+finaly+","+interval+")";
    movement = setTimeout(repeat,interval);
}