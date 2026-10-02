/*

what is variable? its like a container to store data to reuse it in many places

why we use it because i have something like a title and we need to change it 
without the variable we need to go to every place to edit it 
while when we use variable we change all from one single place

js is loosely type language and not strongly typed in meaning we don't need to specify the type of the variable string double int

we cant use variable before declaring it , so declare then use.
*/

//declare a variable:
// syntax (keyword) => var => varname => assignment operator => var value => ;

var user ="Mhd", age =25;
// var age = 25;

console.log(user);// to select more than one word shortcut => select the word then ctrl d and hover downward
console.log(user);
console.log(user);
console.log(user);
console.log(user);
console.log(age);

//global var from html by id
console.log(hello);

hello.innerHTML = "changed text from js file by global variable";