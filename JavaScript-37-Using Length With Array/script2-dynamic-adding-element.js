
// dynamic adding value


let myFriends = ["Alice" , "Joe" , "Selena" , "Margret" , "Osama"];
console.log(myFriends.length);//4

myFriends[myFriends.length]= "Aisha";// this adds element with its value at the end of the array
console.log(myFriends);
console.log(myFriends.length); 

console.log(("-----------------------------------------------------"));

//update the last value in the array

console.log(myFriends);
myFriends[myFriends.length-1]= "Samira";// Aisha updated to samira
console.log(myFriends);

console.log(("-----------------------------------------------------"));

//length allow us to manage the number of elements of the array
myFriends.length= 3;
console.log(myFriends);


myFriends.length= 2;
console.log(myFriends);