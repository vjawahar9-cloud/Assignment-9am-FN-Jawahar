//1. Iterate list items for DOM manipulation

const items = ["Home", "About", "services", "contact"];
const list = document.getElementById("nav-list");

for(const item of items){
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
}


//2. Build menus, tables, and lists automatically
 const products = [
    { name: "Laptop", price: 60000 },
    { name: "Smartphone", price: 30000 },
 ]

    const table = document.getElementById("product-table");

    for(const product of products){
        const row = document.createElement("tr");
        row.innerHTML = `<td>${product.name}</td><td>${product.price}</td>`;
        table.appendChild(row);
    }



    //3. Process arrays (product lists, users, messages)
    const messages = [
        "Welcome to our website!",
        "Your order has been shipped.",
        "New message from support."
    ];

    for(const message of messages){
        console.log("Message:", message); 
    }


    //4. Validate repeated input
     let age;

    do{
        age = 25; 
    }
    while(isNaN(age) || age <=0);
    console.log("Valid age entered:", age);



    //5. Perform calculations repeatedly
    const marks = [85, 90, 78, 92, 88];
    let total = 0;

    for(const mark of marks){
        total += mark;
    }
    console.log("Total marks:", total);
    

