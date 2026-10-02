/*
  Array Challenge
*/

let zero = 0;

let counter = 3;
//           0        1        2        3        4        5
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

console.log("-----------------Problem Number 1------------------------");

// Write Code Here console.log();  ["Osama", "Elham", "Mazero", "Ahmed"];
    
//  first way
// console.log(my.slice(zero , ++counter).reverse()); 

//  second way
//  this removes elements before osama
// my.splice(++counter);
//  this make copy and reverse it
// let result = my.slice(zero).reverse();
// console.log(result);

//  third way
// trim elements before osama
// let subArray = my.slice(zero , ++counter)

// 1- we can use splice on subArray to remove elements or reverse the sequence
// my = subArray.reverse();
// console.log(my);

//2- or here we use splice directly with my array using spread operator
my.splice(zero , my.length , ...my.slice(zero , ++counter).reverse())
console.log(my);

console.log("-----------------Problem Number 2------------------------");

//counter now is 4
//                    0+1        4-1
console.log(my.slice(++zero , --counter)); // ["Elham", "Mazero"]

console.log("-----------------Problem Number 3------------------------");
//console.log(???); //Elzero
// first way
//     my[1]=>Elham  slice(     0      ,   2          )    my[2]=>Mazero        slice(2) 
console.log(my[zero].slice(zero - zero , counter - zero) + my[counter - zero].slice(counter - zero));



// second way
// my.splice(0, my.length, "Elzero");
// console.log(my[0]); // "Elzero"

console.log("-----------------Problem Number 4------------------------");

// console.log(my.slice("")); // "rO"


console.log(
  my[counter - zero][counter + zero] + my[zero - zero][zero - zero]
);