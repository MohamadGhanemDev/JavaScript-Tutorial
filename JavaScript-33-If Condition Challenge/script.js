/*
  If Condition Challenge
*/

let a = 10;

if (a < 10) {
  console.log(10);
} else if (a >= 10 && a <= 40) {
  console.log("10 To 40");
} else if (a > 40) {
  console.log("> 40");
} else {
  console.log("Unknown");
}
// Write Previous Condition With Ternary If Syntax

a<10 
? console.log("10") 
: a>=10 && a<=40 
? console.log("10 to 40") 
: a>40 
? console.log(">40")
: console.log("Unknown");

let st = "Elzero Web School";

if ( (st.length*2).toString() === "34") {
  console.log("Good");
}

// W Position May Change
//  extract the char , find the index 
if ( st.charAt(st.indexOf("W")).toLowerCase() === "w") { // or st[st.toLowerCase().indexOf("w")]
  console.log("Good");
}

if (typeof st.length !== "string") {
  console.log("Good");
}// the comparison is by value and type typeof st.length gives string number => good ,  
//                                      st => good
//                                      st.length => good
//                                      typeof st.length => good
//                                      typeof +st => good
//                                      typeof st => no log 
//                                      typeof (typeof st) => no log

if ( typeof st.length === "number") {
  console.log("Good");
}

if (st.substr(0, 6).repeat(2) === "ElzeroElzero") { // or st.slice(0,6).repeat(2) , or st.slice(0,6)+st.slice(0,6) , or st.split(" ")[0].repeat(2)
  console.log("Good");
}