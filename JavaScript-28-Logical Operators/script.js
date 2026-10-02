

console.log(true);
// ( ! change the value)
console.log(!true);

console.log(false);
console.log(!false);

console.log( 10 == "10");// true
console.log( !(10 == "10") );// false

//              true          true
console.log( 10 == "10" && 10 > 8 );// true

//             true          true       true
console.log( 10 == "10" && 10 > 8 && 10 >= 10 ); //true

//             true        true       false
console.log( 10 == "10" && 10 > 8 && 10 > 50 ); // false

//             true        true       false
console.log( 10 == "10" || 10 > 8 || 10 > 50 ); // true

//             true        false       false
console.log( 10 == "10" || 10 > 80 || 10 > 50 ); // true

//             false        false       false
console.log( 10 == "100" || 10 > 80 || 10 > 50 ); // false







