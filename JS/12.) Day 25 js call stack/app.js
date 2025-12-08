// 12.) Day 25 js
// Call stack --> Visualising call stack

function one() {
  return 1;
}

function two() {
  return one() + one();
}

function three() {
  let final = two() + one();
  console.log(final);
}

three(); //function call --> 3

//Js is Single threaded

console.log("1st This is first");
setTimeout(() => {
  console.log("2nd Hello this is set timeout!!");
}, 2000);
console.log("3rd Hello!!");
