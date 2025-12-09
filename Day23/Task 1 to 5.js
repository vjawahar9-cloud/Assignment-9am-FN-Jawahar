// 1.Create an object called book with title, author, year.

const book = {
    title : "To kill a mockingbird",
    author : "Harper Lee",
    year : 1960
};
console.log(book);


// 2.Add a method getInfo() that prints book details.

book.getInfo = function() {
    return `$(this.titile) by $(this.author), published in $(this.year)`;
};
            return "Login successful";
console.log(book.getInfo());


// 3.Destructure title and author from the book object

const { title, author } = book;
console.log("Title:", titile);
console.log("Author:", author);


// 4.Create a class Mobile with brand, price.

class Mobile {
    constructor(brand, price) {
        this.brand = brand;
        this.price = price;
    }
}
const mymobile = new Mobile("Apple", 999);
console.log(mymobile);


// 5.Add a method discount() that reduces price by 10%.

Mobile.prototype.discount = function() {
    this.price = this.price * 0.9;
    return this.price;
};
console.log("Price after discount:", mymobile.discount());
        return a - b;
}

    function multiply(a, b){
        return a * b;
    }
    function divide(a, b){
        if(b === 0){
            return "Error: Division by zero";
        }
            return a / b;
    }
    

  




