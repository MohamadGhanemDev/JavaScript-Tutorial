

let products =["Keyboard" , "Mouse" , "Pen" , "Pad" , "Monitor" , "iPhone"];

    // every thing inside is optional 
for(let i=0; i<products.length; i++){
    console.log(products[i]);
}


console.log("-------------------------------------");


let j=0;

for(; j<products.length; ){
    
        //here it will print mouse first and the last index will be undefined
    // j++;
    console.log(products[j]);
    // here it will print from index 0 , keyboard first
    j++;
}

