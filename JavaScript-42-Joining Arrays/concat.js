
/*
Array joining methods
    -concat(array , array)=> return a new array
    -join(Separator)
*/
let myFriends = [ "Doureid" , "Ahmad" , "Soulayman" , "Joe" , "Elie"];
let myNewFriends = ["Jamal" , "Ali"];
let schoolFriends = ["Isam" , "Ramy"];

console.log(myFriends);

let allFriends = myFriends.concat(myNewFriends);
    console.log(allFriends);
allFriends = myFriends.concat(myNewFriends , schoolFriends);
    console.log(allFriends);

allFriends = myFriends.concat(myNewFriends , schoolFriends , "Charbel");
    console.log(allFriends);

allFriends = myFriends.concat(myNewFriends , schoolFriends , "Charbel" , [1 , 2]);
    console.log(allFriends);

