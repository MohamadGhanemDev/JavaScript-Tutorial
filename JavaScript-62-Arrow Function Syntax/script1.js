//Normal Functions
function print0(){//print make real print :)
    return 10;
}
console.log(print0());

let print2 = function (){
    return 20;
}
console.log(print2());

// // arrow functions

let print3 =  () => 30; /* if we have only one statement this example like the above one  */
console.log(print3());

let print4 =  _ => 40; // if we dont have parameter we can put under score
console.log(print4());


//if we have more than one line we cant remove the curly braces and  return
let print5 =  () =>{
    let a = 50;
    return a;
}
console.log(print5());

