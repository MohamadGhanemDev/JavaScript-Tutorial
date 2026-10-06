
// function calc(num1, num2){
//     return num1+num2;
// }

// console.log(calc(10,20));


console.log(calc(10,20)); //this also work as the above
function calc(num1, num2){
    return num1+num2;
}

// here we store the function in a variable then we can access this function in var name, the function has no name this is called anonymous function

// console.log(calculator(10,20));//initializing error
let calculator = function(num1, num2){
    return num1+num2;
}
console.log(calculator(10,20));

// let calculator1 = function calc2(num1, num2){
//     return num1+num2;
// }
// console.log(calc2(10,20));//error not defined , but this is useful if i have eror i can put it between the lines of code to know where the error


