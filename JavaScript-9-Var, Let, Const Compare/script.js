

var a = 1;// declare
var a = 5;// redeclare allowed NO ERROR
//let a = 10; // error redeclaration

let b =10;
//let b = 50;//error redeclaration

const c = 10;
// const c = 50;// redeclaration error 

// console.log(a);

//console.log(b);

//console.log(c);

// ----------------------------------------------------------------------------------

console.log(z);// no output and no error
var z = "zzz"; 

// console.log(x); // initialization error
// let x = "xyz";

// console.log(m); // initialization error
// let m = "xyz";



// var scope

var aabb =2; // this make variable scope drama , how? => when we declare it like this as an var then go to inspect => consol => WRITE IN CONSOLE => window SO we find the variable there "stored in window object", i can access it directly by type aabb in console also by window.aabb

const abbaaa =2 ; // no variable scope drama (not stored in window object) , but we can access it from consol because its a global scope
let aaabbbaaaccc =233;

