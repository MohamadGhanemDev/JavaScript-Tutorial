

/*
Type coercion (type casting)

    +
    -
    "" - 2
    true false
*/

let a = "10";
let b = 20;
let c = true;
let d = "Mhd";

console.log(a + b);  //concat
console.log(+a + b); // no concat , a is now Number not String 
console.log(Number(a) + b);

console.log(a - b ); // output -10, no concat output is number not string
console.log(d - b ); // NaN
console.log(b - a );// 10 

console.log("" - 2 );  /* output -2 , same as */console.log(0 - 2 );
console.log(+""); // output 0

//            0   -   1
console.log(false - true ); 
//              0   -   1
console.log(+false - +true ); 

//          20 + 1
console.log( b + c);

//                                                true here generated to string by force
console.log(a + b + c);// output string + number + true => 1020true

console.log(+a + b + c); // 10+20+1 = 31
