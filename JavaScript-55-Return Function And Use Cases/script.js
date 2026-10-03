
function sayHello(userName){
    return `Hello ${userName}`;
}

// console.log(sayHello("Hamudy"));

let result = sayHello("Hamudy");
console.log(result);

console.log("----------------------------------------");

function calc(num1 , num2) {
    return num1+num2; // return stop the execution of the block of code also we cant put num1+num2; under return keyword
    let x =1; // unreachable code
}

let sum = (calc(5,5));
// console.log(sum +100);//nan if we put the num1+num2; under the return
console.log(sum);

console.log("----------------------------------------");

//also return used to interrupt the code

function generate(start ,  end){
    for(let i =start ; i<=end ; i++){
        console.log(i);
            if(i===5){
                return `Interrupting`;
            }
    }
}

generate(1,10);