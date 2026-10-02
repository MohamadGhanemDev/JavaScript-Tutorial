console.log("---------------1---------------");

let myFriends = ["Mohammad" , "Ahmad" , "Fadi" , "Doureid" , "Abu Ghanem"];

// console.log(myFriends[0]);
// console.log(myFriends[1]);
// console.log(myFriends[2]);
// console.log(myFriends[3]);
// console.log(myFriends[4]);

//                          5
for(let i = 0 ; i < myFriends.length ; i++){
    // console.log(i);
    console.log(myFriends[i]);
}

console.log("---------------2---------------");

let familyName = [ 1 , 2 , "Ghanem" , "Zokra" , "Khazaal" , "Bayan" , "Flaha"];
let onlyNames= [];

for (let i = 0 ; i<familyName.length ; i++){
    if(typeof familyName[i] == 'string'){ // =='string' this is correct , ==String this is wrong
        onlyNames.push(familyName[i]);
    }
}
console.log(onlyNames);