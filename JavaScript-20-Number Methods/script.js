
console.log((100).toString());
console.log(100..toString()); // the same to print 100 as string , and why two dots and not only one because if we use one dot it considered like a decimal
console.log(100.10.toString());// floating point number

console.log(100.555555.toFixed(2));// take two numbers after the point and cast them and return string
console.log(100.554555.toFixed(2));

console.log(parseInt("100"));// return number 100

console.log(Number("100 mhd"));//NaN
console.log(+"100 mhd");//NaN
console.log(parseInt("100 mhd"));//100
console.log(parseInt("mhd 100 mhd"));//NaN



console.log(parseFloat("100 mhd"));
console.log(parseFloat("100.500 mhd"));
console.log(parseInt("100.500 mhd"));

console.log(Number.isInteger("100"));//false
console.log(Number.isInteger(100.500));//false
console.log(Number.isInteger(100));


console.log(Number.isNaN(100));//FALSE
console.log(Number.isNaN("MHD"));//FALSE
console.log(Number.isNaN("MHD" / 2));// NAN TRUE


