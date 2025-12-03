// 1.Accept user input (strings)
   let username = prompt("Enter your usename:");
   console.log("Welcome, ", username);

   // 2.Store Numeric Values
   let userage = Number(prompt("Enter your age:"));
   console.log("Your age is:", userage);

   // 3.Manage Arrays of Items
  let subjects = ["Math", "Science", "English"];
  console.log(subjects[0]); 

  // 4.Build Objects for Tasks
  const student = {
    name: username,
    age: userage,
    subjects: subjects
  };
  console.log(student);



  const product = {
    name: "Laptop",
    price: 75000,
    tax: 0.18
  };



  // 5.Use Booleans for UI States
  let isdarkmode = false;

  let isloggedin = true;

  let isvisible = true;
  