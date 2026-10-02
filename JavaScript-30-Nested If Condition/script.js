

let price = 100;
// let discount = true;
    let discount = false;
let discountAmount=30;
    //let country = "Lebanon";
    let country = "Germany";
        // let country = "KSA";
    let student = true;

if (discount === true) {
    //price = price - 30;
    //price -= 30;
    price -= discountAmount;
} 
else if (country == "Germany" && student == true) {

    if (student == true) {
        price -= discountAmount + 30 ;
    } else {
        price -= discountAmount ;
    }
}
else {
    price -= discountAmount - 20;
}
console.log(price);