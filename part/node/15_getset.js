// function Stu(name) {
//     this._name = name;
// }

// Stu.prototype = {
//     //这是一个属性。
//     get Name() {
//         return this._name;
//     },
//     set Name(val) {
//         if(val){
//             this._name = val;
//         }
//     }
// };
// var s = new Stu('老马');
// console.log(s.Name);
// s.Name = 'sss';
// console.log(s.Name);
// s.Name = '';
// console.log(s.Name);


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
    //使用方法时
    get Name() {
        return this.name;
    }
    //设置方法时
    set Name(val) {
        if(val){
            this.name = val;
        }
    }
    //不会被实例继承的方法
    static Add(a,b){
        return a+b;
    }
}
//创建类型实例,通过class定义的类型，必须使用new来构造实例
let s = new Student('flaj',28);
s.showStu();
s.Name = 'sss'
s.showStu();
s.Name = '';
s.showStu();
console.log(Student.Add(100,1));