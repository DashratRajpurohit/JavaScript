// Q1

class student{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    hello(){
    console.log("method")
    }
    get_name(){
        console.log(this.name);
    }
    get_age(){
        console.log(this.age);
    }
    
}


var s1 = new student("Dashrat",18);
var s2 = new student("Hanuman",22);
console.log("Q1.student Details= ")
s1.hello();
s1.get_name();
s1.get_age();
console.log(" ");
console.log(s1);
console.log(s2);
 
// Q2
class car{
    constructor(brand,price){
        this.brand = brand;
        this.price = price;
    }
}
class owner extends car{
    constructor(brand,price,name){
        super(brand,price)
        this.name = name;
    }
}

// var c1 = new car("Volvo",52+" lac.");
// var owner1 = new owner("Hanuman");
// var c2 = new car("BMW-M5",1.2+" Cr.");
// var owner2 = new owner("Dashrat");
console.log("Q2.car & Owner Details= ")
// console.log(c1);
// console.log(owner1);
// console.log(c2);
// console.log(owner2);


var owner_Car = new owner("Bmw-m4", 1.2+" cr","Dashrat" )
console.log(owner_Car)
console.log(" "); 
// Q3

class mobile extends owner{
    constructor(name3,member,price3,brand,price,name){
        super(brand,price,name)
        this.name3 = name3;
        this.member = member;
        this.price3 = price3
    }
}

// var m1 = new mobile("Iphone X","Dashrat",109999);
// var m2 = new mobile("Iphone 12 pro","Hanuman",65000);
// var m3 = new mobile("Iphone 17 Air","john",165000);
var m4 = new mobile("Iphone 17 Air","john",165000,"BMW-M4","1.2.cr","Dashrat");
console.log("Q3.Mobile Details = ")
// console.log(m1);
// console.log(m2);
// console.log(m3);
console.log(m4);
console.log(" ");

//Q4

class Teacher {
  constructor(name4) {
    this.name = name4;
  }
}

class Subject extends Teacher{
  constructor(sub,name4) {
    super(name4);
    this.sub = sub;
  }
}

class Classroom extends Subject {
  constructor(rNo,sub,name4) {
    super(sub,name4)
    this.rNo = rNo;
  }
}

const teacher = new Teacher("Sumit Jha");
const subject = new Subject("HTML-CSS");
const classroom = new Classroom(702);
console.log("Q4.Teacher & sub Details = ")
console.log("Teacher:", teacher.name);
console.log("Subject:", subject.sub);
console.log("Classroom:", classroom.rNo);
