function print1to3() {
  //function defination
  for (let i = 1; i <= 3; i++) {
    console.log(i);
  }
}

print1to3(); //function call

// QS --> Write a function to ask user is age and print he is adult or NOT
function adultcheck() {
  let age = prompt("Enter your age");
  if (age >= 18) {
    console.log(`He is adult becoz age is: ${age}`);
  } else {
    console.log(`NOT adult becoz age is: ${age}`);
  }
}

// adultcheck(); //function call

//Practice Q2 Create a function to roll a dice and print 1 to 6
function diceRoll() {
  let rolled = Math.floor(Math.random() * 6 + 1);
  console.log(`Th number is: ${rolled}`);
}

// diceRoll(); //function call

//Function with argument
// Q1 WAf to print student info
function studentinfo(name, age, city, country) {
  console.log(`My name is ${name} and my age is ${age} and I am from ${city}`);
}
studentinfo("Anil", 22, "Ramgarh");

// Q2 WAF to sum two num
function sum(a, b, c, d) {
  console.log("Sum is: ", a + b);
}
sum(5, 15); //function call

// Q3  WAF to print average of three number
function avg(a, b, c) {
  console.log("Average of a, b and c is: ", (a + b + c) / 3);
}

avg(10, 5, 30); //function call

// Q4 WAF to print the multiplication table of n number
function multi(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(i * n);
  }
}
multi(0); //function call

//Return keyword use
function SUM(a, b) {
  return a + b;
}

let summ = SUM(5, 8);
console.log(summ);
console.log(SUM(99, 1));

//returning string
function ISadult(age) {
  if (age >= 18) {
    return "Adult";
  } else {
    return "NOT adult";
  }
}

ISadult(20);
console.log(ISadult(13));

// practic SQ --> WAF to return the sum of 1 to n;
function sum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum = sum + i;
  }

  return sum;
}

console.log(sum(5)); //function call

// Practice SQ --> WAF to concate all the string present in a array
let arry = ["Anil ", "Rahul ", "Mandeep"];
function concat(arry) {
  let ALLConcat = " ";
  for (let i = 0; i < arry.length; i++) {
    ALLConcat = ALLConcat.concat(arry[i]);
  }
  return ALLConcat;
}
console.log(concat(arry));

// OR

let str = ["He", "is", "a", "Boy"];
function con(str) {
  allstr = " ";
  for (let i = 0; i < str.length; i++) {
    allstr = allstr + str[i];
  }
  return allstr;
}
console.log(con(str));

//Scope
//function scope
let summm = 54;
let mul = 103;
function sumcal(a, b) {
  let summm = a + b;
  console.log("Internal sum", summm);
  console.log("External sum", mul);
}

sumcal(5, 1);
console.log("External sum", summm);

// Block scope
{
  let AGE = 50;
}

console.log(AGE); //NOT allowed to use

{
  const AGE = 50;
}
console.log(AGE); //NOT allowed

{
  var AGE = 25;
}
console.log(AGE); //Allowed --> we have used var keyword to declare the variable AGE

for (let i = 1; i <= 6; i++) {}
// console.log(i); //NOT allowed to use outside of block

// Lexical Scope
function outerfun() {
  let x = 5;
  let y = 10;

  function innerfun() {
    console.log("Value (x) from inner fun", x);
    console.log("Value (y) from inner fun", y);

    let v = 10;
  }
  innerfun(); //inner function call
  // console.log(v); //NOT allowed to use innerfun() variable to outer funtion
}
outerfun(); //outer function call --> Inner function indirectely called
//NOTE: we can't call inner function to ouside of outer funtion

//Pracice QS --> What will be the output
let greet = "hello";

function changegreet() {
  let greet = "namaste";
  console.log(greet);

  function innergreet() {
    console.log(greet);
  }
}

console.log(greet); //hello
changegreet(); //namaste

// function expression
let hello = function () {
  console.log("Hello world !!");
};

hello(); //Nameless function call

//lets change hello nameless function to do another work
hello = function () {
  console.log("Bonjur !!");
};

hello(); //nameless function call

// Example 1
//Higher order function
let Greet = function () {
  console.log("Hello");
};

function printgreek(fun, n) {
  //higher order function
  for (let i = 1; i <= n; i++) {
    fun();
  }
}
printgreek(Greet, 10); //function call --> this will call greet function 10 times

// Example 2
let tablle = function () {
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
};

function callfunn(fun, n) {
  for (let i = 1; i <= n; i++) {
    fun();
  }
}

callfunn(tablle, 2);

// OR --> we can all do it in another way
callfunn(function () {
  console.log("Hi bro !!");
}, 5);

//Higher Order functions (return)

function testOddEven(req) {
  if (req == "odd") {
    return function (n) {
      console.log(!(n % 2 == 0));
    };
  } else if (req == "even") {
    return function (n) {
      console.log(n % 2 == 0);
    };
  } else {
    console.log("Wrong request");
  }
}

console.log(testOddEven("even")(34));

// two way to define function
function myName(a, b) {
  return a + b; //primary way to define function
}

let MyName = function (x, y) {
  return x + y; //we store funtion in variable name
};

console.log(MyName(10, 5));
console.log(myName(5, 5));

// Methods
let calculator = {
  sum: function (a, b) {
    return a + b;
  },
  sub: function (a, b) {
    return a - b;
  },

  mul: function (a, b) {
    return a * b;
  },

  div: function (a, b) {
    return a / b;
  },
};

console.log("--------");
//lets call above function
console.log(calculator.sum(4, 2)); //6
console.log(calculator.sub(10, 5)); //5
console.log(calculator.mul(2, 3)); //6
console.log(calculator.div(16, 4)); //4

//other way to write
let Calculator = {
  sum(a, b) {
    return a + b;
  },
  sub(a, b) {
    return a - b;
  },

  mult(a, b) {
    return a * b;
  },
};

console.log("--------");
//lets call above function
console.log(Calculator.sum(65, 7)); //72
console.log(Calculator.sub(100, 50)); //50
console.log(Calculator.mult(5, 9)); //45

// ----- Day 19 ended ------
