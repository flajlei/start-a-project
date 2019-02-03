// $(document).ready(function(){
//     oneSelect(".box-list1");
//     oneSelect(".box-list2");
// })

// //同元素单选
// function oneSelect(e){
//     $(e).click(function(){
//         var a = $(e).index(this);//let 在ie7不支持。
//         $(e).removeClass("active");
//         $(e).eq(a).addClass("active");
//     })
// }
var tabBox,tabBtn;

window.onload = function(){
    tabBox = document.getElementsByClassName("box1")[0];
    tabBtn = tabBox.getElementsByClassName("box-list");
    var classlist = tabBtn[0].className;
    for(var i=0;i<tabBtn.length;i++){
        tabBtn[i].index = i;
        tabBtn[i].onclick=function(){
            console.log(this.index);

        }
    }
    // for(var i=0;i<tabBtn.length;i++){
    //     tabBtn[i].index = i;
    //     tabBtn[i].onclick==function(){
    //         console.log(this);
    //     }
    // }
}


// window.onload=function(){
//                  var tabBox = document.getElementById('tabBox');
//                  var tabBtn = tabBox.getElementsByTagName('input');
//                  var tabDiv = tabBox.getElementsByTagName('div');
//                  
//                  for(var i=0;i<tabBtn.length;i++){
//                      tabBtn[i].index = i;
//                      tabBtn[i].onclick = function (){
//                          for(var j=0;j<tabBtn.length;j++){
//                              tabBtn[j].className='';
//                              tabDiv[j].style.display='none';
//                          }
//                          this.className='active';
//                          tabDiv[this.index].style.display='block';
//                      };
//                  }