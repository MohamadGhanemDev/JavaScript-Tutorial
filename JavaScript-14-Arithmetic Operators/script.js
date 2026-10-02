

console.log( 10 + 20);
console.log( 10 + "Mhmd"); // concatenate them like i put "10"

console.log( 10 - 20);
console.log( 10 - "Mhd");// there is no + to think its concat so 
                        //  it will act as a mathematical operation and the output is NaN NOT A NUMBER

// weird thing that NaN is considered typeof number
console.log(typeof NaN);

console.log(10*20);
console.log(6/2);
console.log(20/2);
console.log(20/3);

//          power
console.log(2 ** 4); /*same as */ console.log(2 * 2 * 2 * 2);  

console.log(10/2);
console.log(11/2);

console.log(10%2);
console.log(11%2);

let num = 1;
num++; //post increment => print the old value first then increment it without printing the new value 
console.log("num is: " + num);
                                  // try pre and post increment in console to see the difference
let num2= 1;                     
++num2; // pre increment => increment it first then print the new value directly
console.log("num is: " + num2);            

// and the same for the decrement

