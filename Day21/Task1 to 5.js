// 1.Print numbers 1–10 using a for loop.

for(let i=1; i<=10; i++){
    console.log(i);
}

// 2.Print even numbers using a while loop.

let num = 2;
while(num <=20){
    console.log(num);
    num +=2;
}


//3. Use a do…while to print 1 run even if condition is false

let count = 5;
do{
    console.log("This will print once even if condition is false");
}while(count < 5);


//4. Loop through an array using for…of

const fruits = ["apple", "banana", "cherry", "dates"];

for(const fruit of fruits){
    console.log(fruit);
}


//5. Loop through an object using for…in
const person = {
    name: "jawahar",
    age: 24,
    city: "chennai"
};
 for(const key in person){
    console.log(key + ": " + person[key]);
 }
 
