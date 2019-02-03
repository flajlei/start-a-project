var a = [1,2,2,4,5,4,2,3,6,8,45,1,2,53,4,8,0,1,2,11];

function sameClear(e){
    var b = [];
    for (var i=0;i<e.length;i++){
        if(b.indexOf(e[i]) == -1){
            b.push(e[i]);
        }
    }
    console.log(b);
    return b;
}
window.onload=function() {
    sameClear(a);
}