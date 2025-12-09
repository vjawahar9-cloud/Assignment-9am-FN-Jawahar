// 6. Create a User class with name, email, login() method.

class user {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    login() {
        console.log(`${this.name} has logged in.`);
    }
}  
const user1 = new user("Jawahar", "vjawahar9@gmail.com");
user1.login();


// 7.Make a BankAccount class with deposit & withdraw methods.

class BankAccount {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited: $${amount}. New balance: $${this.balance}`);
    }
}
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds");
        } else {
            this.balance -= amount;
            console.log(`Withdrew: $${amount}. New balance: $${this.balance}`);
        }       
    }

const myAccount = new BankAccount("123456789", 500);
myAccount.deposit(200);
myAccount.withdraw(100);
myAccount.withdraw(700);      


// 8. Build a prototype chain: Vehicle → Car → ElectricCar.

function Vehicle(make, model) {
    this.make = make;
    this.model = model;
}
 Vehicle.prototype.start = function() {
    console.log("Vehicle started");
};

function Car(make, model, doors) {
    Vehicle.call(this, make, model);
    this.doors = doors;
}
 Car.prototype = Object.create(Vehicle.prototype);
 Car.prototype.Constructor = Car;
Car.prototype.honk = function() {
    console.log("Car honked");

 };
function ElectricCar(make, model, doors, batteryCapacity) {
    Car.call(this, make, model, doors);
    this.batteryCapacity = batteryCapacity;
}

    ElectricCar.prototype = Object.create(Car.prototype);
    ElectricCar.prototype.constructor = ElectricCar;
    ElectricCar.prototype.charge = function() {
        console.log("Electric car charging");
    };
const myElectricCar = new ElectricCar("Tesla", "Model S", 4, "100 kWh");
myElectricCar.start();
myElectricCar.honk();
myElectricCar.charge();



// 9. Create a product list using objects + destructuring.

const product1 = {
    name: "Laptop",
    price: 1200,
    category: "Electronics"
};
const product2 = {
    name: "Phone",
    price: 800,
    category: "Electronics"
};
const product3 = {
    name: "Shirt",
    price: 50,
    category: "Apparel" 
}
const products = [product1, product2, product3];

products.forEach(({ name, price, category }) => {
    console.log(`Product: ${name}, Price: $${price}, Category: ${category}`);
}); 



// 10. Create a Student Management System using classes.

class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }   
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }   

}
const student1 = new Student("Bob", 20, "A");
console.log(student1.getDetails());








