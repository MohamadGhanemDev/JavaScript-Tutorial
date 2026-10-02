

/*
  Challenge 1
*/

let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);
console.log(++a + -b + +c++ - -a++ + +a);
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

/*
  [++a] [+] [+b++] [+] [+c++] [-] [+a++]

  [++a]
  - Value: 11
  - Explain: preincrement add the new value and update it directly and take it 
  [+]
  - Explain: addition calculate
  [+b++]
  - Value: 20
  - Explain: unary plus and post increment it takes the old value and work with it =>20 , post increment print the old value 20 then add the new value if we want to show the new value 21 we need to print it again
  [+c++]
  - value: 80
  [+a++]
  -value: 11 post increment not taking the updated value it works with the old one
  output: 11+20+80-11=100
*/

/*
  Challenge 2
*/

let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice

console.log(-d * + e); // 2000
console.log(-d + +e*2 + f + g); // 173