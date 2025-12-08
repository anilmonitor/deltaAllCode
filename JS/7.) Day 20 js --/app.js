// Day 20 js:-


// .this keyword in js
//without .this we can't access collection key:value in stufinfo function
const collection = {
  Name: "anil",
  age: 23,
  gender: "male",

  studinfo: function () {
    let info = `Name is ${this.Name}, age ${this.age} gender ${this.gender}`;
    return info;
  },
};

console.log(collection.studinfo());

//try and catch
// use to check error and catch them and run program without any error

// Example 1
try {
  console.log(a);
} catch (error11) {
  console.log("We have not defined a"); //execute when try get error
  console.log(error11); //printing actual error
}

// Example 2
let m = 304;
try {
  console.log("Value of m is: ", m); //no error hence m is printed
} catch {
  console.log("There is a error tith m"); //no error hence m is printed
}

// Arrow function =>
const add = (a, b) => {
  console.log(a + b);
};

add(3, 4); //function call

const hello = () => {
  console.log("Hello world!!");
};

hello();

const table = (n) => {
  for (let i = n; i <= n * 10; i = i + n) {
    console.log(i);
  }
};

table(2);

let cube = () => {
  console.log(Math.floor(Math.random() * 6 + 1));
};
cube();

//implicit function (automatic return)
const hey = () => "Hellow world";
console.log(hey());

// ex 2
let multi = (a, b) => a * b;
console.log(multi(55, 55));

let pow = (a, b) => a ** b;

console.log(pow(3, 4));

setTimeout;
console.log("Hello ");
setTimeout(
  () => {
    console.log("Welcome here");
  },

  4000
);

console.log("Mr. ANIL");

// example 2
function count() {
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
}

let counT = function () {
  console.log("This is counting number");
};

setTimeout(
  counT,

  6000
);

setTimeout(() => {
  console.log("Hey buddy");
}, 10000);

//setInterval

let id1 = setInterval(() => {
  console.log("hi");
}, 2000);
console.log(id1);

// to stop above we can use its id
clearInterval(id1); //this will stop the setinterval




