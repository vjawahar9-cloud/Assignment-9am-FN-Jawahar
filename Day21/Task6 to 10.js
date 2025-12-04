//1. Multiplication Table Generator

const number = 7;
console.log(`multiplication table for ${number}:`);
for(let i=1; i<=10; i++){
    console.log(`${number} * ${i} = ${number * i}`);
}


//2. Array Search Program

const colors = ["red", "blue", "green", "yellow", "purple"];
const searchcolor = "green";
let found = false;

for(const color of colors){
    if(color === searchcolor){
        found = true;
        break;
    }
}

 if(found){
    console.log(`${searchcolor} is found in the array.`);
 } else {
    console.log(`${searchcolor} is not found in the array.`);
 }


 //3. Password Retries (do…while)

 const correctpassword = "secure123";
 let userinput = "";
 let attempts = 0;
    do{
        userinput = "secure123";
    }
    while(userinput !== correctpassword);
    console.log("Access granted.");



    //4. Cart Total Calculator
    const cartitems = [
        { name: "Shirt", price: 1500 },
        { name: "Jeans", price: 2500 },
        { name: "Shoes", price: 3000 }  
    ]
    let total = 0;
    for(const item of cartitems){
        total += item.price;
    }
    console.log("Total cart value:", total);



    //5. Attendance Checker
    const attendance = {
        "joe": true,
        "john": false,
        "jane": true,
        "jill": false   
    }
    for(const student in attendance){
        const status = attendance[student] ? "present" : "absent";
        console.log(`${student} is ${status}`);
    }


