
/*
  String Challenge
  All Solutions Must Be In One Chain
  You Can Use Concatenate
*/

let a = "Elzero Web School";

// Include This Method In Your Solution [slice, charAt]

// first solution
//console.log(a.slice(-17 , 7).charAt(2) + a.slice(-17 , 7).charAt(3) + a.slice(-17 , 7).charAt(4) + a.slice(-17 , 7).charAt(5)); // Zero
// second solution
console.log(a.slice(-15, 6));
// 8 H
console.log("H".repeat(8)); // HHHHHHHH

// Return Array
console.log(a.split(" " , 1)); // ["Elzero"]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(a.substr(0 , 6) + " " + a.substr(11)); // Elzero School

// Solution Must Be Dynamic Because String May Changes

console.log(
  a.charAt(0).toLowerCase() + a.slice(1 , -1).toUpperCase() + a.slice(-1).toLowerCase()
); // eLZERO WEB SCHOOl