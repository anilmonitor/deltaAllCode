// const figlet = require("figlet");

// figlet("ANIL MONITOR", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });

// random pass/String Generator
import cryptoRandomString from "crypto-random-string";
console.log(cryptoRandomString({ length: 10, type: "ascii-printable" }));
