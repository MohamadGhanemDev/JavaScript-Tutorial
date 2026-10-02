/*
Control flow
if
else if
else

    if(condition) {
        Block of code
    }
*/

let price = 100;
// let discount = true;
    let discount = false;
let discountAmount=30;
    //let country = "Lebanon";
    //let country = "Germany";
        let country = "KSA";
if(discount === true){

    //price = price - 30;
    //price -= 30;
    price -= discountAmount;
}else if (country === "Lebanon") {
    price -= discountAmount + 10 ;
}else if(country == "Germany"){
    price -= discountAmount + 20 ;
} else{
    price -= discountAmount - 20;
}
console.log(price);