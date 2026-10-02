

// let price = 100;
//console.log(`The price is ${price}`);


let price; // undefined
console.log(`The price is ${price}`);
price = 0; // false value better to put free
console.log(`The price is ${price}`);
price = false;
console.log(`The price is ${price}`);
price = "";
console.log(`The price is ${price}`);
price = null; // null
console.log(`The price is ${price}`);

console.log("---------------------------------------------")

// how to put the alternative thing of undefined,null,0,"", false
price = "";
console.log(`The price is ${price || 200}`); // if there is null , undefined or any falsy value it return the alternative value after logical or ||

console.log(Boolean(100));
console.log(Boolean(-100));
console.log(Boolean(0));// falsy value
console.log(Boolean(1));
console.log(Boolean(""));// falsy value
console.log(Boolean(null));//falsy value

console.log("---------------------------------------------")
// Nullish Coalescing operator ?? => not responsible for falsy value , its only work with null and undefined value

price = "";// try: false, 0 , null , undefined
console.log(`The price is ${price ?? 200}`);
