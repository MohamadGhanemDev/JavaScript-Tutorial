let products = ["Keyboard" , "Mouse" , "Pen" , "Pad" , "Monitor"];
let colors = ["Red" , "Green" , "Black"];

//print all elements from the beginning to Pen

// for(let i = 0; i<3 ; i++){
//     console.log(products[i]);
// } not dynamic solution because the array may be have more elements


for(let i = 0; i<products.length ; i++){
    console.log(products[i]);
    if(products[i] == "Pen"){
        break;
    }
    // console.log(products[i]);  this place is wrong if we need to print pen because its checked but breaked
} 