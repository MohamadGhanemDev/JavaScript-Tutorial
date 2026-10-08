var a = 11;
let b = 12;//same as const in this idea

// here a and b is a global scopes in can access them from any where
// inspect and type a or b and enter they return there values
// i can access them in function , if , for ....

console.log(`From Global ${a}`);
console.log(`From Global ${b}`);

// function showText() {
//     console.log(`Function - From Global ${a}`);
//     console.log(`Function - From Global ${b}`);
//     //until here a and b considered as local if a and c is declared after this line or above they considered local but here there is an error of initialization
//     var a = 11;
//     let b = 12;
// };
// showText();


function showText2() {
    var a = 10;//local
    let b = 20;//local if i delete var a and b from here the function start searching on them  from the global
    console.log(`Function - From Local ${a}`);
    console.log(`Function - From Local ${b}`);
};
showText2();