

let a = "Mohammad Web Company";

//                   mandatory value , option value if this value not found it works with the default value
console.log(a.indexOf("Web"));// start searching from 0 index

//                           optional value DEFAULT VALUE 0 INDEX
console.log(a.indexOf("Web" , 10)); // start searching from index 7 and IF ITS NOT FOUNT IT RETURN -1



console.log(a.lastIndexOf("Web"));// start searching from the end to the start from left
console.log(a.lastIndexOf("Web" , 10));


console.log(a.indexOf("o"));// 1 => start searching from the beginning
console.log(a.lastIndexOf("o"));// 14  => start searching from the end and give the index , search from the end but count index from the beginning
//and if the value not found it return -1
console.log("-----------------------------------")

//                 start from which index
console.log(a.slice(0))// return all the string
console.log(a.slice(2))
//                   start , end , and end not included
console.log(a.slice(2,  8)); // not including the space
console.log(a.slice(2,  9)); // including the space
console.log(a.slice(2,  10));
console.log(a.slice(9,  12)); // Web


// if want to count from end to start we use negative value
console.log(a.slice(-2));// ny
console.log(a.slice(-7));
//                  
console.log(a.slice(-7 , -4));//Com


console.log(a.repeat(5));

console.log(a.split()); // return the string as array

//                 separator
console.log(a.split(""));// cut all the characters

//                 start split from each space
console.log(a.split(" "));


let b = "this1|this2|this3|this4";
//                   | => pipeline
console.log(b.split("|"));
//                      we give limit cut only 2
console.log(b.split("|", 2));// cut only two (not counting by index start count from 1 not 0)
//                  letters
console.log(b.split("", 2));
console.log(a.split("", 8));//(not counting by index start count from 1 not 0)

