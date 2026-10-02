

/*
    - + Unary Plus [Return Number If Its Not Number]
    - - Unary Negation [Return Number If Its Not Number + Negates It]
    Tests
    - Normal Number
    - String Number
    - String Negative Number
    - String Text
    - Float
    - Hexadecimal Numeral System => 0xFF
    - null
    - false
    - true
*/

// + unary negation

console.log(+100);
console.log("100");
console.log(+"100");// returned number 100 not string 100
console.log(+"-100");// returned number -100 not string -100
console.log(+"mhmd"); // NaN not a number
console.log(+"15.5");
console.log(+0xff); // 255 hexadecimal(0xff)
console.log(+null); // 0
console.log(+false); // 0
console.log(+true);// 1 

//---------------------------------------------------------
console.log("-------------------------------------");

// - unary negation

console.log(-100);
console.log(-"100");// returned number -100 not string 100
console.log(-"-100");// returned 100 not string -100
console.log(-"mhmd"); // NaN not a number
console.log(-"15.5");//return -15.5
console.log(-0xff); // 255 hexadecimal(0xff)
console.log(-null); // 0
console.log(-false); // 0
console.log(-true);// 1 

//change string to number
console.log(Number("100"));





