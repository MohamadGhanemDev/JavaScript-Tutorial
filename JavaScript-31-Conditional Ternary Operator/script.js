/*
Conditional (Ternary) operator
*/

let theName = "Mona";
let theGender = "Female";
let theAge = 30;

if(theGender === "Male"){
    console.log("Mr.");
} else{
    console.log("Mrs.");
}

// Condition ? if true : else false

theGender === "Male" ? console.log("Mr") : console.log("Mrs");
let result = theGender === "Male" ? "Mr" : "Mrs";
document.write(result);

console.log(theGender === "Male" ? "Mr" : "Mrs");
//                                    if         else
console.log(`Hello ${theGender === "Male" ? "Mr" : "Mrs"} ${theName}`);

theAge < 20  // condition 1   if
    ? console.log(20) // the true of condition 1  
    : theAge > 20 && theAge < 60 // condition 2  elseif
    ? console.log("20 to 60")// true of condition 2
    : theAge > 60 // condition 3  elseif
    ? console.log("Larger than 60")// true of condition 3
    : console.log("Unknown"); //else
