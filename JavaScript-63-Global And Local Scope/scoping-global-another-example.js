
//here if we comment those and we call them from 
// var a = 11;
// let b = 12;


function showText2() {
    var a = 10;
    let b = 20;
    console.log(`Function - From Local ${a}`);
    console.log(`Function - From Local ${b}`);
};

console.log(`Function - From Local ${a}`);// here it makes error because from here i cant access variables inside the function , reference error
console.log(`Function - From Local ${b}`);

showText2();