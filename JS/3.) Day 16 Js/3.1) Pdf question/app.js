// Q1 
let arr = [7, 9, 0, -2];
let n = 3;
console.log(arr.slice(0, n));

// Q2 
let array = [7, 9, 0, -2];
let N = 3;
console.log(array.slice(-N));


// Q3 
// let str = prompt("Enter string Name");
// if (str.length === 0){
//     console.log("String is emty");
// } else(
//     console.log(`String is not empty`)
// )

// Q4 
let stR = "aNiLkUmAr";
let givenchar = 2;
if (stR[givenchar] === stR[givenchar].toLocaleLowerCase()) {
    console.log("lower case");
} else (
    console.log("Upper case")
)

// Q5
let arraY = ["hello", 1, 2, 44, 56, "b"];
let ele = "hello";
if (arraY === ele){
    console.log("element exist in array")
} else {
    console.log("element not exist in array")
} 
