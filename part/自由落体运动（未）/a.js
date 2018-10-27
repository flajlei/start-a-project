$(document).ready(function(){
  drop(10,0.5)
})
function drop(g,down){
  var t=0
  var v=0;//初始速度
  var h = parseInt($(".ball").css('bottom'));//初始高度
  setInterval(function(){
    t=t+0.1;
    if(h>0){
      v=(g-down)*t;
      h=h-(0.5*(g-down)*t*t);
      console.log(v,h);
      $(".ball").css('bottom',h+'px')
    } else if(h<0){
      v=v-(g+down)*t;
      h=h-(0.5*(g+down)*t*t);
      console.log(v,h);
    }
  },100)
}
//回弹(匀加速运动)
/*公式
v=v0+a*t
h=v0*t+(0.5*a*t*t)
重力加速度g
x轴时速度v0
阻力减速度down
*/
//分为四个阶段
//下落,h>0,v向下为正,加速度为g-down
//下落,h<0,v向下为正,加速度为-g-down
//回滚,h<0,v向上为负,加速度为g-down
//回滚,h>0,v向上为负,加速度为-g-down
//判断依据，h正负和v正负