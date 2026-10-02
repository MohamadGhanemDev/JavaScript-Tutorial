let lastNames = ["Ghanem" , "Ramadan" , "Hlayhel" , "Ghanem" , "Assidi" , "Shall"];

console.log(lastNames);
//splice edit on the main array and return it

 // splice(start , delete count , "addElement" , "addAnotherElement")
// lastNames.splice(0, 0 ,"Gomez" , "Oghlo");
    // lastNames.splice(0, 1 ,"Gomez" , "Oghlo");
    // lastNames.splice(0, 2 ,"Gomez" , "Oghlo");

    //start from index 1 ignore index 0 and delete the index 1 and 2 values and replace them by the given values
    lastNames.splice(1, 2 ,"Gomez" , "Oghlo");
console.log(lastNames);