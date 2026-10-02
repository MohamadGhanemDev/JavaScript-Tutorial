
/*
Array search methods
    - indexOf(NEEDED Element , from Index[Optional]);
    - lastIndexOf(Needed element , from Index[Optional]);
    - includes(valueToFind , fromIndex[Optional] [ES7])
*/
//                  0           1           2           3         4          5
let lastNames = ["Ghanem" , "Ramadan" , "Hlayhel" , "Ghanem" , "Assidi" , "Shall"];
//                 -6          -5          -4          -3        -2         -1
console.log(lastNames);

// if we don't give it the index of starting search it start searching from the beginning and take the first one found
console.log(lastNames.indexOf("Ghanem"));

console.log(lastNames.indexOf("Ghanem" , 1));// start counting the index from index zero , start searching from index 1 in meaning it ignores the value of index 0

console.log("-----------------------");

// same as indexOf but lastIndexOf start searching from right to left , end to start
console.log(lastNames.lastIndexOf("Ghanem"));// first ghanem found from right to left
console.log(lastNames.lastIndexOf("Ghanem" , -4));

// indexOf and lastIndexOf return INDEX

// includes Condition => true false

console.log(lastNames.includes("Ghanem"));
console.log(lastNames.includes("Ghanem" , 2));
console.log(lastNames.includes("Ghanem" , 3));
console.log(lastNames.includes("Ghanem" , 4));

if(lastNames.indexOf("Ghanem") === -1 ){
    console.log("Not Found");
}
if(lastNames.indexOf("Bayan") === -1 ){
    console.log("Not Found");
}
console.log(lastNames.indexOf("Bayan")); // if value not found it returns -1
console.log(lastNames.lastIndexOf("Bayan")); 
console.log(lastNames.includes("Bayan"));




