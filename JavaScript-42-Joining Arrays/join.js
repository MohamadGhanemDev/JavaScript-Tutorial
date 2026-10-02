

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

// join => joins the array elements together and return string separated by a separator we choose it
console.log(allFriends.join()); // this prints all the string and put between the values comma (comma is default)

console.log(allFriends.join(""));// one string all elements
console.log(allFriends.join("@"));  
console.log(allFriends.join(" @ "));
console.log(allFriends.join("|"));   
console.log(allFriends.join(" + ").toUpperCase());