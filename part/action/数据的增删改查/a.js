/*
//删除对象
delete obj[prop];
//遍历对象
for(var prop in obj){
    if(obj.hasOwnProperty(prop)){
        console.log(obj[prop]);
/*/

//多实参传入
// function sum(...rest) {
//     let result = 0;
//     for(let i = 0;i<rest.length;i++) {
//       result += rest[i];
// }

//解构赋值{用对象属性赋值}
var person = {
    name: '小明',
    age: 20,
    gender: 'male',
    passport: 'G-12345678',
    school: 'No.4 middle school',
    address: {
        city: 'Beijing',
        street: 'No.1 Road',
        zipcode: '100001'
    }
};
//var {name,address:{city,zip}} = person; // 取name city
//let {name,passport:id} = person;//取值并赋值给不同名变量
//let {name,passport=123} = person;//设置默认值，如果没有则使用
//var x, y;
// 解构赋值:声明和赋值分开时需要用括号;
//({x, y} = { name, x:100, y: 200});
//快速获取当前页面的域名和路径：
//var {hostname:domain, pathname:path} = location;

//function buildDate({year, month, day, hour=0, minute=0, second=0}) {
//    return new Date(year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second);
//}

// function getAge() {
//     var y = new Date().getFullYear();
//     return y - this.birth;
// }

// var xiaoming = {
//     name: '小明',
//     birth: 1990,
//     age: getAge
// };

//map函数
//引用函数,从而大量处理数据
//map(此处写数据处理方式)
// var arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
// var b =  arr.map(Number); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(b);

// var arr = ['1', '2', '3'];
// var r;
// r = arr.map(e => parseInt(e));
// console.log(r);

///reduce 累积函数 (((x1*y1)*y2)*y3)
// function product(arr) {
//     return arr.reduce(function(x,y){return x*y});
// }

//filter 过滤
//引用函数，通过判断筛选
// var arr = [1, 2, 4, 5, 6, 9, 10, 15];
// var r = arr.filter(function (x) {
//     return x % 2 !== 0;
// });
 // [1, 5, 9, 15]
//filter的回调函数
//  var arr = ['A', 'B', 'C'];
//  var r = arr.filter(function (element, index, self) {
//      console.log(element); // 依次打印'A', 'B', 'C'
//      console.log(index); // 依次打印0, 1, 2
//      console.log(self); // self就是变量arr
//      return true;
//  });
//去除重复元素依靠的是indexOf总是返回第一个元素的位置，后续的重复元素位置与indexOf返回的位置不相等，因此被filter滤掉了
// r = arr.filter(function (element, index, self) {
//     return self.indexOf(element) === index;
// });

// var arr = [10, 20, 1, 2];
// arr.sort(function (x, y) {
//     if (x < y) {
//         return -1;
//     }
//     if (x > y) {
//         return 1;
//     }
//     return 0;
// });
// console.log(arr); // [1, 2, 10, 20]
var arr = [10, 20, 1, 2];
arr.sort((x, y) => x-y);
console.log(arr); // [1, 2, 10, 20]

//设置默认值
// function abc(a){
//     var x = a || 0;
// }

function count() {
    var arr = [];
    for (var i=1; i<=3; i++) {
        arr.push(function () {
            return i * i;
        });
    }
    console.log(arr);
    return arr;
}

var results = count();
var f1 = results[0];
var f2 = results[1];
var f3 = results[2];

//闭包前计算完毕
function count() {
    var arr = [];
    for (var i=1; i<=3; i++) {
        arr.push((function (i) {
            return i * i;
        })(i));
    }
    return arr;
}
var results = count();
var f1 = results[0];
var f2 = results[1];
var f3 = results[2];


function Animal(name){
    this.name = name;
    this.showName = function(){
          alert(this.name);    
      }    
  }
  function Cat(name){
    Animal.apply(this,[name]);
  }