console.log("hello Nodejs");

// let prompt = process.argv;
// console.log(prompt);

// for (let i = 2; i <= 5; i++) {
//   // console.log(`Welcome ${prompt[i]}to ANIL MONITOR's house`);
// }

// requare() --> it help us to receive or import the data from other file present in same directory
// module.exports  --> use to export the file data
let MathBundle = require("./math");

console.log(MathBundle); //it will print all the math collection obj
console.log("Sum is: ", MathBundle.sum(1, 4)); //5
console.log("Subtract: ", MathBundle.sub(10, 7)); //3
console.log("Product: ", MathBundle.mult(4, 6)); //24
