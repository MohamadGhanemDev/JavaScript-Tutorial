
var a = 11;
let b = 12;//same as const in this idea

// here a and b is a global scopes in can access them from any where
// inspect and type a or b and enter they return there values
// i can access them in function , if , for ....

console.log(`From Global ${a}`);
console.log(`From Global ${b}`);

function showText() {
    console.log(`Function - From Global ${a}`);
    console.log(`Function - From Global ${b}`);
    //here a and b considered as local
};
showText();