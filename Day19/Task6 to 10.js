 //Task 6
 //Student Profile (object + strings + numbers).

 const studentprofile = {
    name: "Jawahar",
    age: 24,
    course: "B.com",
    grade: 9.3
 };

 console.log("student profile:");
 console.log("name:", studentprofile.name);
 console.log("age:", studentprofile.age);
 console.log("course:", studentprofile.course);
 console.log("grade:", studentprofile.grade);



 //Task - 7
 //Product Price Calculator (number + string conversion).

 const price = "499";
 const taxRate = 0.18;

 let finalprice = Number(price) + (Number(price) * taxRate);

 console.log("Final price:", finalprice);



 //Task - 8
 //Login Status Indicator (boolean usage).

    let isloggedin = false;

    if (isloggedin) {
        console.log("user is logged in");
    } else {
        console.log("user is not logged in");
    }

    isloggedin = true;
    console.log("updated login status:",isloggedin);


    //Task - 9
    //BigInt large number addition example.

    let largeNumber1 = 9007199254741991n;
    let largeNumber2 = 1234567890123456n;

    let bigintsum = largeNumber1 + largeNumber2;

    console.log("sum of large numbers (BigInt):", bigintsum);


    //Task - 10
    //Create 3 users with unique symbol IDs.

   const user1 = {
    id: Symbol("user1"),
    name: "joe"
   };

   const user2 = {
    id: Symbol("user2"),
    name: "raina"
   };

   const user3 = {
    id: Symbol("user3"),
    name: "dhoni"
   };

   console.log("users with unique ssymbol IDs:");
    console.log("user1:", user1.name, "ID:", user1.id);
    console.log("user2:", user2.name, "ID:", user2.id);
    console.log("user3:", user3.name, "ID:", user3.id);
    

