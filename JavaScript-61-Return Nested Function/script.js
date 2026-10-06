

//Example 1

function sayHelloMessage(fName , lName){
 let message = `Hello`;
    //nested function
    function concatMsg(){
        message = `${message} ${fName} ${lName}`;
    }

    concatMsg();

    return message;
}

console.log(sayHelloMessage("Mohammad" , "Ghanem1"));


console.log("-----------------------------------------------------------");
//Example 2
function sayHelloMessage2(fName , lName){
 let message = `Hello`;
    //nested function
    function concatMsg2(){
        return `${message} ${fName} ${lName}`;//return the value
    }

    return concatMsg2();//return the retured value
}

console.log(sayHelloMessage2("Mohammad" , "Ghanem2"));


console.log("-----------------------------------------------------------");

//Example 3

function sayHelloMessage3(fName , lName){
 let message = `Hello`;
    //nested function
    function concatMsg3(){
            function getFullName(){
                return `${fName} ${lName}`; 
            }
        return `${message} ${getFullName()}`;//return the value
    }

    return concatMsg3();//return the retured value
}

console.log(sayHelloMessage3("Mohammad" , "Ghanem3"));