//es5的定义类型
function Human(name,age){
    this.name = name;
    this.age = age;
}
//定义原型上的方法
Human.prototype.show = function() {
    console.log(this.name,this.age);
}

//创建实例
var h = new Human('flaj',27);
h.show();

//es5继承:通过原型进行继承(教程:老马前端系列-05)

//es6定义类型和继承的方式

class Student{
    //定义构造函数
    constructor(name,age) {
        //给实例添加属性
        this.name = name;
        this.age = age;
    }
    //在此定义方法都是在原型上,且不可遍历
    showStu() {
        console.log(this.age,this.name)
    }
}
//创建类型实例,通过class定义的类型，必须使用new来构造实例
let s = new Student('flaj',28);
s.showStu();

//立即执行的class
let person = new class{
    constructor(name) {
        this.name = name;
    }

    sayName() {
        console.log(this.name);
    }
}('张三');
person.sayName();
