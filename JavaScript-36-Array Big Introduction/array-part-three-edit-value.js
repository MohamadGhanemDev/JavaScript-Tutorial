


//                                                              nested array
let myFriends = ["Ahmad" , "Mohammad" , "Sarah" , "Doureid" , ["Alice" , "Joe"]];

console.log(`index zero is ${myFriends[0]}`);
console.log(myFriends);

myFriends[0]= "Jamal";
console.log(`index zero is ${myFriends[0]}`);
console.log(myFriends);

console.log(("------------------------------------------------------"));    

// change the array to element
myFriends[4] = "Fadi";
console.log(myFriends);

//change element to array
myFriends[4] = ["Selena" , "Elisa" , "Grace"];
console.log(myFriends);

console.log(typeof myFriends);
console.log(Array.isArray(myFriends));

let str = "Mhmd";
console.log(Array.isArray(str));

