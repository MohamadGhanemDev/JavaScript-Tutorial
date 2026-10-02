let products = ["Keyboard" , "Mouse" , 10 , 30 , "Pen" , 30 , 40 , "Pad" , "Monitor"];
let colors = ["Red" , "Green" , "Black"];

// if we need to print strings only 
for(let i = 0; i<products.length ; i++){
    // console.log(products[i]); this print the value then check it and that is wrong we need to check first
        if(typeof products[i] == "number"){
            continue;// ignore or skip it if its type number (exclude the current iteration)
            }
    console.log(products[i]);// this print only the checked array elements
} 