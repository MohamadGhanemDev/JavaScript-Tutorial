//this first example if i know or im sure about the number of parameters
function calcExampleOne(num1 , num2 , num3) {
    return num1+num2+num3;
}

// trigger or calling the function
console.log(calcExampleOne(10,20,10));


console.log("---------------------------------------------");

//this second example if i don't know or im not sure about the number of parameters we use rest parameters, what is rest parameter its a normal parameter but we add before triple dots => ...number is array of arguments.
// Note: Only one rest argument array is allowed this is a must, i cant put more than one triple dots param , and its fine to but normal variable before but the triple dots must be positioned at the end of the params
function calcExampleTwo(...numbers) {
    console.log(typeof numbers);//object
    console.log(Array.isArray(numbers));//true
    // return num1+num2+num3;
    let result = 0;
    for(let i = 0 ; i<numbers.length ; i++){
        console.log(numbers[i]);
        result += numbers[i] ;
    }
    // return result;
    return `Final Result Is ${result}`;
}

// trigger or calling the function
console.log(calcExampleTwo(10,20,10,5,50,100,5)); 