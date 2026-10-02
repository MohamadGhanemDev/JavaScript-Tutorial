

let a = "This is a new website";


//              part of the string
console.log(a.substring(2));// its somehow similar to slice 
console.log(a.substring(1 , 4));// 1->4
//             makes swapping so it gives like above output
console.log(a.substring(4 , 1));



console.log(a.substring(-21));//  in slice start count from the end , here if we put any negative value less than zero , its start from the zero index to the end
console.log(a.substring(-21, 4));// 0 -->4 4 not included

console.log(a.length); //21
console.log(a.substring(21));// empty string ,  because the length is index+1
console.log(a.substring(a.length-1)); // we catch the last index
console.log(a.substring(a.length-5));// start count from b

//       cut the string from(start count from the ending of the string -1,-2,-3...) , at which character you want to start cutting , end ending where ? => ending+1
console.log(a.substring(a.length-5 , a.length-4));// if we want to catch bs this code is wrong because it not including end
console.log(a.substring(a.length-5 , a.length-3));// to take bs

console.log("-------------------------------------------------------------------------------");

// count how much character we need , here if we don't put the it will takes the full length
console.log(a.substr(0));// here there is no index, in meaning put the start and count how much character needed

// if i want from the string (this is a) , here when we put how much character we start count from 1
console.log(a.substr(0, 9));// start from index 0 and count 6 characters

console.log(a.substr(21));// if we put ending  equal or greater than the length it return empty string(but its not working) 

console.log(a.substr(-3));// the difference between substr and substring , substr start count from the end
console.log(a.substr(-7));

//  to make the same experiment in substring to take inly bs ,  we start counting from the end of the string -1,-2,-3... , how many characters we need to count? => we need 2 so put 2 it count 2 characters only not by index
console.log(a.substr(-5, 2));

//return true or false (includes this string or not?) , start searching from index 0
console.log(a.includes("new"));
// start searching from index 10
console.log(a.includes("new" ,10));
// start searching from index 11
console.log(a.includes("new" ,11));

console.log("-------------------------------------------------------------------------------");

//                  is it starts with char t? the searching start from index 0 from the beginning if the string
console.log(a.startsWith("t"));//index 0
console.log(a.startsWith("T"));

// let a = "This is a new website";
console.log(a.startsWith("t" , 2));// index 2
console.log(a.startsWith("i" , 2));
console.log(a.startsWith("is" , 2));
console.log(a.startsWith("isi" , 2));
console.log(a.startsWith("is i" , 2));


console.log("-------------------------------------------------------------------------------");

// it take the full length and search , is string a ends with i? no it ends with e
console.log(a.endsWith("i"));

//                           LENGTH NOT INDEX , (count 6 characters and see if its end with i)
console.log(a.endsWith("i" , 6));// THE ENDING LENGTH 6 IS I?  , IN LENGTH WE START COUNTING FROM 1 NOT ZERO LIKE INDEX  

console.log(a.endsWith("si" , 6));
console.log(a.endsWith("s i" , 6));
console.log(a.endsWith(" i" , 6));
console.log(a.endsWith("s i" , 6));

console.log(a.endsWith("e"));



