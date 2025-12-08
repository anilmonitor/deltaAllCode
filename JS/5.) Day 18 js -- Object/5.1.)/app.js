// Q1.) Generate random num from 1 to 100
let num = Math.random();
num = num * 100 + 1;

num = Math.floor(num);
console.log(num);

// OR
let random = Math.floor(Math.random() * 100 + 1);
console.log(random);

// Q2.) Generate random num from 1 to 5
let NUM = Math.random();
NUM = NUM * 5 + 1;
NUM = Math.floor(NUM);
console.log(NUM);

// OR

let RANDOM = Math.floor(Math.random() * 5 + 1);
console.log(RANDOM);

/*
//Guessing game
let maxnum = prompt("Enter the range: ");
let random_num = Math.floor(Math.random() * maxnum + 1);

let Guessnum = prompt("Guess the correct number: ");
while (true) {
  if (Guessnum == random_num) {
    console.log(`Correct guess! Num is ${Guessnum}`);
    break;
  } else if (Guessnum == "quit") {
    console.log("You quit5 the game!!");
    break;
  } else {
    if (Guessnum < random_num) {
      Guessnum = prompt("You enter smallest! try more larger NUM: ");
    } else if (Guessnum > random_num) {
      Guessnum = prompt("You enter Biggest! try more Smaller NUM: ");
    }
  }
} */

//   Qs1. Create a program that generates a random number representing a dice roll.
// [The number should be between 1 and 6].
let dice = Math.floor(Math.random() * 6 + 1);
console.log("Dice roll no. is: ", dice);

// //Qs - Qs2. Create an object representing a car that stores the following properties for the
// car: name, model, color.
// Print the car’s name.

const car = {
  name: "Bugati",
  model: "BU453",
  color: "Black",
};

console.log("The car name is: ", car.name);

// QS 3 Qs3. Create an object Person with their name, age and city.
// Edit their city’s original value to change it to “New York”.
// Add a new property country and set it to the United States.

const Person = {
  name: "Anil",
  age: 22,
  city: "Ramgarh",
};

Person.city = "New York"; //changec city name from Ramgarh to New York
Person.County = "United state"; //added new country feature in person class

console.log(Person);
