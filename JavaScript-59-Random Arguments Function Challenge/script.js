/*
  Function - Random Argument Challenge
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => Status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator
*/

//First way its correct but not dynamic 
function showDetails1(name , age , status){
    name === "Osama" && age === 38 && status === true
    ? console.log(`Hello ${name}, Your age is ${age} , You Are Available For Hire`)
    :name === "Osama" && age === true && status === 38
    ? console.log(`Hello ${name}, Your age is ${status} , You Are Available For Hire`)
    : name === 38 && age === "Osama" && status === true
    ? console.log(`Hello ${age}, Your age is ${name} , You Are Available For Hire`)
    :name === 38 && age === true && status === "Osama"
    ? console.log(`Hello ${status}, Your age is ${name} , You Are Available For Hire`)
    :name === true && age === "Osama" && status === 38 
    ? console.log(`Hello ${age}, Your age is ${status} , You Are Available For Hire`)
    :name === true && age === 38 && status === "Osama"
    ? console.log(`Hello ${status}, Your age is ${age} , You Are Available For Hire`)
    :name === "Osama" && age === 38 && status === false  
    ? console.log(`Hello ${name}, Your age is ${age} , You Are Not Available For Hire`)
    :name === "Osama" && age === false && status ===  38
    ? console.log(`Hello ${name}, Your age is ${status} , You Are Not Available For Hire`)
    : name === 38 && age === "Osama" && status === false 
    ? console.log(`Hello ${age}, Your age is ${name} , You Are Not Available For Hire`)
    :name === 38 && age === false && status === "Osama"
    ? console.log(`Hello ${status}, Your age is ${name} , You Are Not Available For Hire`)
    :name === false && age === "Osama" && status === 38
    ?console.log(`Hello ${age}, Your age is ${status} , You Are Not Available For Hire`)
    :name === false && age === 38 && status === "Osama"
    ?console.log(`Hello ${status}, Your age is ${age} , You Are Not Available For Hire`)
    :console.log("Invalid DATA");
}

function showDetails(a, b, c) {
  let name   = typeof a === "string"  ? a : typeof b === "string"  ? b : c;
  let age    = typeof a === "number"  ? a : typeof b === "number"  ? b : c;
  let status = typeof a === "boolean" ? a : typeof b === "boolean" ? b : c;
                                                          //if status is true take "" else "No "
  console.log(`Hello ${name}, Your Age Is ${age}, You Are ${status ? "" : "Not "}Available For Hire`);
}
// let name;
// if (typeof a === "string") {
//   name = a;
// } else if (typeof b === "string") {
//   name = b;
// } else {
//   name = c;
// }

showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"






// my first solution i have a bug in the else at the end this makes the code broke
// function showDetails(name , age , status){
//     name === "Osama" && age === 38 && status === true
//     ? console.log(`Hello ${name}, Your age is ${age} , You Are Available For Hire`)
//     :name === "Osama" && age === true && status === 38
//     ? console.log(`Hello ${name}, Your age is ${status} , You Are Available For Hire`)
//     : name === 38 && age === "Osama" && status === true
//     ? console.log(`Hello ${age}, Your age is ${name} , You Are Available For Hire`)
//     :name === 38 && age === true && status === "Osama"
//     ? console.log(`Hello ${status}, Your age is ${name} , You Are Available For Hire`)
//     :name === true && age === "Osama" && status === 38 
//     ? console.log(`Hello ${age}, Your age is ${status} , You Are Available For Hire`)
//     :name === true && age === 38 && status === "Osama"
//     ? console.log(`Hello ${status}, Your age is ${age} , You Are Available For Hire`)
    
    
//     :name === "Osama" && age === 38 && status === false  
//     ? console.log(`Hello ${name}, Your age is ${age} , You Are Not Available For Hire`)

//     :name === "Osama" && age === false && status ===  38
//     ? console.log(`Hello ${name}, Your age is ${status} , You Are Not Available For Hire`)

//     : name === 38 && age === "Osama" && status === false 
//     ? console.log(`Hello ${age}, Your age is ${name} , You Are Not Available For Hire`)

//     :name === 38 && age === false && status === "Osama"
//     ? console.log(`Hello ${status}, Your age is ${name} , You Are Not Available For Hire`)

//     :name === false && age === "Osama" && status === 38
//     ?console.log(`Hello ${age}, Your age is ${status} , You Are Not Available For Hire`)

//     :name === false && age === 38 && status === "Osama"
//   console.log(`Hello ${status}, Your age is ${age} , You Are Not Available For Hire`)
    
// }