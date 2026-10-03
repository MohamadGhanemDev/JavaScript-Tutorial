
function sayHello(userName , age){
    console.log(`Hello ${userName} your age is ${age}`);
        if(age<18){
            console.log(`App not suitable for you , under age`);
        }
        else if(age>20 && age<40){
            console.log(`Limited access on the App according to your age`);
        }
        else{
            console.log(`Full Access`);
        }
}

// sayHello("Mohammad");// undefined age error
sayHello("Mohammad" , 17);
sayHello("Ahmad" , 25);
sayHello("Doureid" , 40);