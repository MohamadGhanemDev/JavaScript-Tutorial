

// DRY DON'T REPEAT YOU SELF => FUNCTIONS
// TWO kinds of function 
// - build in functions
// - User Defined functions

// console is an object have many methods and functions , log make logging to the message and print it in the console
console.log(typeof console.log);// function log is build in function


// user define function

// 1-keyword 2-identifier=> the function name 3- () 4-{} 5-{block of code the task}
function  sayHello (){
    console.log("Hello Mohammad");
}

sayHello();//calling the method

                    //Parameter or Variable
function  sayHello (userName){
    console.log(`Hi ${userName}`);// in order of DRY We can change hello to Hi easily in one line 
}
        //Argument or value
sayHello("Mohammad");//calling the method
sayHello("Ahmad");
sayHello("Osama"); // don't repeat your self