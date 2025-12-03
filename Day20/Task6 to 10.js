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
 //Cart Total (numbers + strings + conversion)
    const price1 = "120";    
    const price2 = "80";     

    const total = Number(price1) + Number(price2);

    console.log("Cart Total:", total);


    //Task - 8
    //Login Status (boolean → message)
     let isloggedin = false;

    if (isloggedin) {
        console.log("user is logged in");
    } else {
        console.log("user is not logged in");
    }

    isloggedin = true;
    console.log("updated login status:",isloggedin);


    //Task - 9
    //4. Large Number Calculator (BigInt)
    const big1 = 987654321987654321n;
    const big2 = 222222222222222222n;

    const result = big1 + big2;

    console.log("BigInt Calculation:", result);


    //Task - 10
    //5. Unique User IDs (Symbols)
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


