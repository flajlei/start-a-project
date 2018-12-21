window.onload = function(){
    var oBox = document.getElementsByClassName('oBox')[0];
    oBox.onmousedown = function (e1){
        
        var disX = e1.clientX - oBox.offsetLeft;
        var disY = e1.clientY - oBox.offsetTop;

        document.onmousemove = function (e2){
            //div offsetLeft offsetTop
            //mouse clientX clientY
            var nowX = e2.clientX;
            var nowY = e2.clientY;
            
    
            oBox.style.left = nowX - disX + 'px';
            oBox.style.top = nowY - disY + 'px';
    
            document.onmouseup = function (){
                document.onmousemove = function (){
                    return false;
                }
            }
        }
    }
}

//div和页面顶端间的距离
//$(".aboutus").offset().top
//document.getElementsByClassName('aboutus')[0].offsetTop
//document.getelementbyid("ddhdh").innerHTML
//document.getElementById(“text”).textContent 用于火狐

//窗口滚动时当前窗口左上与页面顶端距离
//$(window).scrollTop()
//当前页面高度
//$(window).height()