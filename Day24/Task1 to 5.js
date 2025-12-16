//1.Create an object book with title, author, and pages.
const book = {
    title : "The Great Gatsby",
    author : "F. scott Fitzgerald",
    pages : 180
}
console.log(book);

//2.Add a method describe() that prints the book details.

book.describe = function () {
    console.log(`${this.title} by ${this.author}, ${this.pages} pages`);
};
book.describe();

//3.Use object Destructuring to extract the title and author.

const {title, author} = book;
console.log(`Titile: ${title}, Author: ${author}`);

//4.Create a class Employee with name and salary — add a method to display info.

class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }   
    dispalyInfo() {
        console.log(`name; ${this.name}, salaray: ${this.salary}`);
    } 
}
const emp1 = new Employee("John Doe", 50000);
emp1.dispalyInfo();


//5.Create another class Manager that inherits from Employee and adds a department.

class Manager extends Employee {
    constructor(name, salary, department){
        super (name, salary);
        this.department = department;
    }
    dispalyInfo(){
        super.dispalyInfo();
        console.log(`Department: $ {this.department}`);
    }
}
 const mgr1 = new Manager("jane smith", 80000, "sales");
    mgr1.dispalyInfo();


