

let a = "this is a new website";


//              part of the string
console.log(a.substring(2));
console.log(a.substring(5 , 7));
//             makes swapping so it gives like above output
console.log(a.substring(5 , 7));

console.log(a.substring(-10));
console.log(a.substring(-10, 4));// 0 -->4 4 not included

console.log(a.length); //21
console.log(a.substring(21));
console.log(a.substring(a.length-1)); // we take the last index

console.log(a.substring(a.length-6 , a.length-5));// not including end
console.log(a.substring(a.length-6 , a.length-4));// to take eb

// count how much character we need
console.log(a.substring(0));
// start from index 0 and count 6 characters
console.log(a.substr(0, 6));
console.log(a.substr(22));
console.log(a.substr(-3));
console.log(a.substr(-7));
// start from -7 and count 2 characters
console.log(a.substr(-7, 2));
