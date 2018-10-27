function start(){
  var x,y,k=1,t;
  //x是水平方向移动路径；y是垂直方向的；k记录次数，可与0.1相乘得时间；t记录setInterval的返回id，用于clearInterval
  t = setInterval(function(){
    //S(x)=S(0)+t*V(x)，100是自定义的米到px转换数
    //0.1*k表示时间,4为速度,100将计算结果换算为像素距离
    x = 30+0.1*k*4*100;
    //S(y)=S(0)+1/2*g*t*t
    //匀加速运动:初始y+0.5*加速度9.8*时间的平方  也可以切换成其他公式？
    y = 30+1/2*9.8*0.1*k*0.1*k*100;
    var j = document.getElementById("ball");
    //通过修改小球的top和left，修改小球的位置
    //修改移动位置的另一种方法translate(x,y)
    j.style.top = y;
    j.style.left = x;
    //每次调用，k自增，简化计算
    k++;
    //小球达到边界时，清除setInterval，高度宽度自行设置
    if(x>480||y>480){
      clearInterval(t);
    }
  },100);//每0.1s调用一次setInterval的function
}1