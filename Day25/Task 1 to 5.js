//1.Create an array of 5 colors and print the first and last color.

const colors = ["Red", "Green", "Blue", "Yellow", "Purple"];
console.log("First color:", colors[0]);
console.log("Last color:", colors[colors.length - 1]);


//2.Add and remove items using push, pop, shift, unshift.

colors.push("Orange");
console.log("After push:", colors);

colors.pop();
console.log("After pop:", colors);

colors.shift();
console.log("After shift:", colors);

colors.unshift("Pink");
console.log("After unshift:", colors);


//3.Create an array of numbers and print all using forEach().

const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
    console.log(number);
})


//4.Use map() to square all numbers.

const squareNumbers = numbers.map(function(number) {
    return number * number;
});
console.log("Squared Numbers:", squareNumbers);


//5.Use filter() to find numbers greater than 50.
const mixedNumbers = [10, 55, 23, 67, 89, 34,12]
const filteredNumbers = mixedNumbers.filter(function(number) {
    return number > 50;
});
console.log("Numbers greater than 50:", filteredNumbers);













