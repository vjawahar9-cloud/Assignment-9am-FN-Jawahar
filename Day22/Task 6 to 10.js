 //1. Calculator Functions

    function add(a, b){
        return a + b;
    }

    function subtract(a, b){
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


    //2. Greeting Program

    function greetuser(name){
        console.log("Hello,", name + "!");
    }
    greetuser("Alice");


    //3. Grade Checker

    function checkgrade(marks){
        if(marks >= 90){
            return "A";
        } else if(marks >= 80){
            return "B";
        } else if(marks >= 70){
            return "C"; 
        } else if(marks >= 60){
            return "D";
        } else {
            return "F"; 
        }
    }

     //4. Area Calculator (Rectangle)

     function calculatearea(length, width){
        return length * width;
     }


     //5. Login Function

       function login(username, password) {
        const validusername = "admin";
        const validpassword = "password123";

          if username === validusername && password === validpassword {
            console.log("Login successful");
          } else {
            console.log("Invalid username or password");
          }

       }
       


