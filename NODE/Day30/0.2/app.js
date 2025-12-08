// Lets aquire infromation from fruits directory

let fruitCollection = require("./fruits");

console.log(fruitCollection); // print array of fruits
console.log(fruitCollection[0]); //apple wala obj aayega
console.log(fruitCollection[1]); // banana wala obj

console.log(fruitCollection[1].name); //coconut
console.log(fruitCollection[0].color); // red
console.log(fruitCollection[1].size); // big

// import cryptoRandomString from "crypto-random-string";
// let randompass = cryptoRandomString({ length: 10, type: 'ascii-printable' });

// console.log("Your random pass", randompass);
