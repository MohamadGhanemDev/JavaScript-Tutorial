let numbers = [10, 20, 30];

// Without ...
console.log(numbers); 
// Output: [10, 20, 30]  <-- Prints 1 array (a box containing numbers)

// With ...
console.log(...numbers); 
// Output: 10 20 30      <-- Prints 3 individual numbers!