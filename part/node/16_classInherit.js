class Human {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    show(){
        console.log('name: %s,age: %d',this.name,this.age);
    }
}

class Student extends Human {
    constructor(name,age,classNum){
        super(name,age);//调用父类的构造函数
        this.classNum = classNum;
    }

    stuShow() {
        console.log('name: %s,age: %d, classNum: %s',this.name,this.age,this.classNum);
    }
}

let s = new Student('flajlei',28,'一班');
s.stuShow();
s.show();