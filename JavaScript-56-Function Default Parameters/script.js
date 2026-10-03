
function sayHello(userName  = "Unknown" , age = "Unknown"){
    // if(age == undefined){
    //     age = "Unknown";
    // }
    // age = age || "Unknown"; // same as above it but in modern way and also we can make it the default in the parameter
    return `Hello ${userName} and your age is ${age}`;
}

console.log(sayHello("Hamudy"));// default value for the parameter is undefined
console.log(sayHello("Hamudy" , 25));
console.log(sayHello());





