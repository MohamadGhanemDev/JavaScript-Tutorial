

document.getElementById("show").onclick = function(){
    console.log("Show");
}


// the function name as no meaning here 
document.getElementById("show").onclick = function balout(){
    console.log("Show");
}


//another example

//if i give a name or not it will print Good after two seconds so the name of the function has no meaning
setTimeout( function batouta(){// this code is a settimeout in async programming we understand it
    console.log("Good");
}, 2000);//after two seconds


function sayHello(){
    console.log("Hello Hello Hello");
}
document.getElementById("hello").onclick = sayHello;
