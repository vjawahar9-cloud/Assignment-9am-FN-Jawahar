//1. Form Validation (String + Number Check)
  let nameinput = "joe";
  let ageinput = "25";

  let age = Number(ageinput);

  if(nameinput.length>0 && age >0){
    console.log("form is valid");

  } else {
    console.log("form is invalid");
  }


  //2. User Login System (Boolean Flags)
  let isloggedin = false;

  if(isloggedin) {
    console.log("welcome back user!");

  } else {
    console.log("please log in to continue.");
  }


  isloggedin = true;
  console.log("login status:", isloggedin);



  //3. Product Catalog (Objects + Arrays)
   const products = [
    { name: "Laptop", price: 60000 },
    { name: "Smartphone", price: 30000 },
    { name: "Tablet", price: 20000 }
   ];

   console.log("All products:", products);

   console.log("selected product:", products[1].name);


   //4. Financial App Calculations (Number + BigInt)
   let salary = 75000;
   let taxRate = 0.18;

   let afterTax = salary - (salary * taxRate);
   console.log("after tax salary:", afterTax);

   const bigSalary = 9007199254741991n;
   const bigBonus = 1234567890123456n;

   console.log("total big salary:", bigSalary + bigBonus);


   //5. Interactive UI State (State Object + Booleans)
    const uiState = {
        isDarkMode: false,
        isLoggedIn: true,
        isSidebarVisible: true
    };
    console.log("UI State:", uiState);

    uiState.isDarkMode = true;
    console.log("updated UI State:", uiState);
    