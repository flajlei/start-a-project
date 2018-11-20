function Foo(){
    getName = function(){console.log("1")};
    return this;
}
Foo.getName = function(){console.log("2")};
Foo.prototype.getName = function(){console.log("3")}; //给对象添加属性
var getName = function(){console.log("4")};
function getName(){console.log("5")};

// window.onload(function(){
//     console.log(Foo.getName());
//     console.log(getName());
//     console.log(Foo().getName());
//     console.log(getName());
//     console.log(new Foo.getName());
//     console.log(new Foo().getName());
//     console.log(new new Foo().getName());
// })

window.onload= function(){
var int = 2;
var n = parseInt(window.prompt("input"));
if(n<0) return false;
for(;--n;){
    int=int*2
  };
  document.write(int); 
}



//关于检索
//自带检索方式 正则 slice indexOf
//将被检索内容全部分为单个字符保存，检索内容也拆分为单个字符
//将检索内容第一位与被检索对象对照，记录被检索对象内相同内容的位置，然后+1保存至新数组
//将被检索对象按数组位置与检索内容第二位对照，记录相同内容的位置，+1保存
//重复上述直到找到相同内容或中途无内容退出

/* <img id="myimage" onclick="changeImage()" src="/images/pic_bulboff.gif" width="100" height="180"></img>
element=document.getElementById('myimage')
    if (element.src.match("bulbon")) */

//    以上实例中代码element.src.match("bulbon")的作用意思是：检索 element 的src 属性有没有包含 bulbon 这个字符串
