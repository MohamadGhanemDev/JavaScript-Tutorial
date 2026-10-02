

/*
  Number Challenge
*/

let a = 100;
let b = 2_00.5;
let c = 1e2;
let d = 2.3;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(Math.ceil(d));

// Find Smallest Number In All Variables And Return Integer

//      remove decimal , what ever decimal is increase it in meaning Math.ceil(0.1) => 1 , Math.ceil(0.5) => 1
console.log(Math.round(Math.ceil(Math.min(a , b , c , d))));

// Use Variables a + d One Time To Get The Needed Output
console.log( (a * 50) * ( Math.floor(d) ) ); // 10000

// Get Integer "2" From d Variable With 4 Methods
console.log(Math.floor(d));
console.log(Math.round(d));
console.log(Math.trunc(d));
console.log(parseInt(d));

// Use Variables b + d To Get This Values
console.log( ((Math.floor(b) / Math.ceil(d)).toFixed(2)).toString()); // 66.67 => String
console.log( Math.round(b/ Math.ceil(d))); // 67 => Number



