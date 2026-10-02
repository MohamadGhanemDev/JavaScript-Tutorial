

let day = 0;

switch(day){
    case 0: 
        console.log("Sunday");
        // break;
    case 0: 
        console.log("Monday");
}
console.log("-----------------------------");

// let day1 = "0";  the value type must be the same of case type
switch(day){
    case 0: 
        console.log("Sunday");
        break;
    case 1: 
        console.log("Monday");
        break;
    case 2: 
    case 3:// multiple cases gives the same out put or work on the same block of code
        console.log("Tuesday");
        break;
    default:
        console.log("Unknown day");
        break;
}


// switch(day){
//     case 0: 
//         console.log("Sunday");
//         break;
//     case 1: 
//         console.log("Monday");
//         break;
//     case 2: 
//         console.log("Tuesday");
//         break;
//     case 3: 
//         console.log("Wednesday");
//         break;
//     case 4: 
//         console.log("Thursday");
//         break;
//     case 5: 
//         console.log("Friday");
//         break;
//     case 6: 
//         console.log("Saturday"); 
//         break;
//     default:
//         console.log("Not day of the week");
//         break;
// }
