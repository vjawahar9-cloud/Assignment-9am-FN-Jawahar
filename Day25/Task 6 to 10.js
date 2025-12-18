//6.Use reduce() to find the total of numbers [10, 20, 30, 40].

const nums = [10, 20, 30, 40];
const total = nums.reduce(function(accumulator, currentvalue) {
    return accumulator + currentvalue;
}, 0);
 console.log("Total:", total);


 //7.Create an array of students’ ages and find only adults (≥18).

    const ages = [15, 22, 17, 19, 30, 16, 25];
    const adults = ages.filter(function(age) {
        return age >= 18;
    })
    console.log("Adult ages:", adults);


    //8.Build a 2D array of names and marks — print each student's data.

    const students = [
        ["Alice", 85],
        ["Bob", 92],
        ["Charlie", 78],
        ["David", 90]
    ];
    students.forEach(function(student) {
        console.log(`Name: ${student[0]}, Marks: ${student[1]}`);

    })


    //9.Combine two arrays using concat() or spread syntax [...a, ...b].

    const array1 = [1, 2, 3];
    const array2 = [4, 5, 6];

    const combined1 = array1.concat(array2);
    console.log("Combined using concat():", combined1);

    const combined2 = [...array1, ...array2];
    console.log("Combined using spread syntax:", combined2);


    //10.Create an array of products and display all names dynamically using forEach() in HTML.

    const products = [
        {name: "Laptop", price: 1000},
        {name: "Phone", price: 500},
        {name: "Tablet", price: 300}
    ];
    products.forEach(function(product) {
        const p = document.createElement("p");
        p.textContent = `Product Name: ${product.name}`;
        document.body.appendChild(p);
    }
    );

    










