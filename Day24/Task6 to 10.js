//6.Create another class Manager that inherits from Employee and adds a department.
class Manager extends Employee {
    constructor(name, salary, department){
        super (name, salary);
        this.department = department;
    }
    dispalyInfo(){
        super.dispalyInfo();
        console.log(`Department: ${this.department}`);
    }
}
    const mgr1 = new Manager("Jane Smith", 80000, "Sales");
    mgr1.dispalyInfo();


    //7.Build an object user with login and logout methods.

    const user = {
        Login : function () {
            console.log("User Logged In");
        },
        Logout : function () {
            console.log("user Logged out");
        };
    };

    user.Login():
    user.Logout();



    //8.Create a class Student with constructor and display() method — make 3 students.

    class student {
        constructor(name, age){
            this.name = name;
            this.age = age;
        }
        display() {
            console.log(`Name: ${this.name}, Age: ${this.age}`);
        }
    }
    const student1 = new student("Alice", 20);
    const student2 = new student("Bob", 22);
    const student3 = new student("Charlie", 19);

    student1.display();
    student2.display();
    student3.display();

    //9.Create a base class Shape and a subclass Circle that calculates area.


    class Shape {
        constructor(color) {
            this.color = color;
        }
        describe() {
            console.log(`This is a ${this.color} shape.`);
        }
    }
    class Circle extends Shape {
        constructor(color, radius) {
            super(color);

            this.radius = radius;
        }
        area() {
            return Math.PI * this.radius * this.radius;
        }
        describe() {
            super.describe();
            console.log(`It is a circle with radius ${this.radius} and area ${this.area().toFixed(2)}.`);
        }
    }
    const circle1 = new Circle("red", 5);
    circle1.describe();
    

    //10.Use prototypes to add a new method to all Student objects dynamically.


    student.prototype.greet = function() {
        console.log(`Hello, my name is ${this.name}.`);
    };
    student1.greet();
    student2.greet();
    student3.greet();

    





    

