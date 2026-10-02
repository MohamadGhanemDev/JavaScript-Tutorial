/*
Array Methods => Add , Remove
    -unshift("" , ""); Add element at the beginning
    -push("" , ""); Add element at the end
    -shift(); Remove first element from array
    -pop(); remove the last element from array
*/

let names = ["Mohammad" , "Hamudy" , "Ahmad" , "Samira"];
console.log(names);

names.unshift("Morci" , "Alaa");
console.log(names);


names.push("Fayez" , "Fayza");
console.log(names);


//names.shift(); //remove the first element and (((return it)))
let firstRemovedStoredName = names.shift();
console.log(names);
console.log(`the Removed and stored first element is ${firstRemovedStoredName}`)


let lastRemovedStoredName = names.pop(); //remove the last element and (((return it)))
console.log(names);
console.log(`the Removed and stored last element is ${lastRemovedStoredName}`)