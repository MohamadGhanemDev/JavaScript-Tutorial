
let products = ["Keyboard" , "Mouse" , "Pen" , "Pad" , "Monitor" , "iPhone"];

let index = 0;

while ( index < 10){
    console.log(index); //if we run this code without increment the index its infinite loop
    index++;
    if(index === 3)
        break;
}

console.log("----------------------------------------");

while (true){
    console.log(index); //if we run this code without increment the index its infinite loop
    index++;
    if(index === 6){
    break;
    }
}

console.log("----------------------------------------");

index= 0;
while ( index < products.length){

    console.log(products[index]); //if we run this code without increment the index its infinite loop
    index++;
    if(index === 3)
        break;
}