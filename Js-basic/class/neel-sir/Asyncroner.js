class person{
            constructor(name){
                this.name = name;
            }
        }

        var obj = new person("dashrat");
        console.log(obj);

class student extends person{
    constructor(name,rollno){
        super(name);
        this.rollno = rollno
    }
}        
        var obj2 = new student("Dashrat",122)
        console.log(obj2)


        class user {
            constructor(userName){
                this.userName = userName;
            }
        }
        var obj3 = new user("dashrat_007");
        console.log(obj3);

        class employee extends user{
            constructor(userName,employeeld){
                super(userName);
                this.employeeld = employeeld;
            }
        }

        var obj4 = new employee("hanuman-007","No");
        console.log(obj4);

        class department extends employee{
            constructor(userName,employeeld,departments){
                super(userName,employeeld);
                this.departments = departments;
            }
        }

        var obj5 = new department("hanuman-007","Yes","CSE");
        console.log(obj5);


        class Manager extends department{
            
            
        }


        