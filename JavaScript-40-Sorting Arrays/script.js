

/*
Sorting Methods
    -sort(Function[optional])
    -reverse
*/


let names = [ 2000 , 10 , 9000 , "B-NameOne" , 10000 , "A-NameTwo" , "90" , 1000 , 100 , 20 , "10" , -20 , -10];
console.log(names); 
console.log(names.reverse());

console.log(names.sort());
// first put the negative numbers then the positive numbers
// -10 -20 10 "10" 100 1000 10000 20 2000 "90" 9000 A-NameOne B-NameOne  (here the sorting according to the first char from smaller to grater and from A to Z)

// reverse the sorted one not the original
console.log(names.reverse());

//chan 
console.log(names.sort().reverse());