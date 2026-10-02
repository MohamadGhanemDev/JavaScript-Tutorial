
/*
Arrays Methods [Slicing]
    - slice(Start [Opt], End [Opt] Not Including End)
    --- slice() => All Array
    --- If Start Is Undefined => 0
    --- Negative Count From End
    --- If End Is Undefined || > Indexes => Slice To The End Array.length
    --- Return New Array
    - splice(Start [Mand], DeleteCount [Opt] [0 No Remove], The Items To Add [Opt])
    --- If Negative => Start From The End
*/

let lastNames = ["Ghanem" , "Ramadan" , "Hlayhel" , "Ghanem" , "Assidi" , "Shall"];

console.log(lastNames);
//slice return new array not edit on the main array it self
console.log(lastNames.slice());
console.log(lastNames.slice(1));// from index 1(start) to the array.length
console.log(lastNames.slice(1 , 3)); // 1->2 not including end(3)
console.log(lastNames.slice(0 , 3));
console.log(lastNames.slice(-3));
console.log(lastNames.slice(1 , -2));//ramadan -> assidi & assidi not including
console.log(lastNames.slice(-4 , -2));

console.log(lastNames);
