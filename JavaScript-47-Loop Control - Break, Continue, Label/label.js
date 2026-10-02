let products = ["Keyboard" , "Mouse" , "Pen" , "Pad" , "Monitor"];
let colors = ["Red" , "Green" , "Black"];

// if we need to stop the loop at specific iteration

//mainLoop and nestedLoop is called label or identifier

mainLoop: for(let i = 0; i<products.length ; i++){
            console.log(products[i]);
                nestedLoop: for(let j = 0; j<colors.length ; j++){
                            console.log(`- ${colors[j]}`);
                }
} 

console.log("------------------------------------------------------------");
console.log("------------------------------------------------------------");
console.log("------------------------------------------------------------");

mainLoop: for(let i = 0; i<products.length ; i++){
            console.log(products[i]);
                nestedLoop: for(let j = 0; j<colors.length ; j++){// j<colors.length i put this by wrong and i have unidentified infinite loop
                            console.log(`- ${colors[j]}`);
                                if(colors[j] === 'Green'){
                                // break; or we can use the same
                                break nestedLoop;
                                }
                }
} 

console.log("------------------------------------------------------------");
console.log("------------------------------------------------------------");
console.log("------------------------------------------------------------");

mainLoop: for(let i = 0; i<products.length ; i++){
            console.log(products[i]);
                nestedLoop: for(let j = 0; j<colors.length ; j++){
                            console.log(`- ${colors[j]}`);
                                if(colors[j] === 'Green'){
                                // break; or we can use the same
                                break mainLoop;
                                }
                }
} 
