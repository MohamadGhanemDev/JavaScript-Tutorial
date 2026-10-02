

let theName = "Mohamad";// char sequence 
// let theList =[1, 2 , 3 , 4 , 5 , 6 , 7 ]; this array have sequence of data like the name above that  have sequence of characters (index) 

console.log(theName); // prints the var 

// javascript is zero based indexing => index count from 0
console.log(theName[0]);
console.log(theName[1]);
// charAt Method or character at position
console.log(theName.charAt(1));// works index

console.log(theName[7]);// return undefined
console.log(theName.charAt(7)); // return empty string 

console.log("------------------------");

let newName =     "  ahmed  ";

console.log(newName.length);// in indexing we start count from 0 , from length we start from 1

console.log(newName[1]);
console.log(newName.charAt(5));

console.log(newName.trim()); // to remove spaces

console.log(newName.toUpperCase()); 
console.log(newName.toLowerCase()); 

// chan methods      we don't start count from space we trim it so index zero is A now 
console.log(newName.trim().charAt(2).toUpperCase());