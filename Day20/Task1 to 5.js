//Task - 1
  //Primitive data type: 1(string)
  let mystring = "Hello, Jawahar!";

  //primitive data type: 2(number)
  let mynumber = 42;

  //primitive data type: 3(boolean)
  let myboolean = true;

  //Primitive data type: 4(null)
  let mynull = null;

  //Primitive data type: 5(undefined)
  let myundefined = undefined;

  //primitive data type: 6(symbol)
  let mysymbol = Symbol("uniqueid");

  //primitive data type: 7(bigint)
  let myBigint = 9007199254741991n +1n;


  //Task - 2
  //Check each variable's type with typeof.

    console.log("type of mystring:", typeof mystring);
    console.log("type of mynumber:", typeof mynumber);
    console.log("type of myboolean:", typeof myboolean);
    console.log("type of undefined:", typeof myundefined);
    console.log("type of mysymbol:", typeof mysymbol);
    console.log("type of myBigint:", typeof myBigint);


    //Task - 3
    //Create an object with 3 properties and print them.

    let car = {
        brand: "toyota",
        model: "corolla",
        year: 2020
    };

    console.log("car object:");
    console.log("brand:", car.brand);
    console.log("model:",car.model);
    console.log(year:", car.year);
        
        
    //Task - 4
    //Convert "100" to a number.

    let str = "100";
    let num = number(str);
    console.log("converted number:", num);
    console.log("type of converted number:", typeof num);


    //Task - 5
    //Convert false to a string.

    let bool = false;
    let strbool = string(bool);
    console.log("converted string:", strbool);
    console.log("type of converted string:", typeof strbool);
