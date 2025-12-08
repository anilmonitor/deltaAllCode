// for loop:-
// without for loop printing No. 1 to 5
console.log(1);
console.log(2);
console.log(3);

console.log("Using for loop");
//using for loop  printing No. 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// example 
for (let i = 14; i >= 0; i--) {
    console.log(i);
}


// Qs Print odd number from 1 to 25 
console.log("Q1. Print odd number 1 to 25")
for (let i = 1; i <= 25; i = i + 2) {
    console.log(i);
}


// Qs 2 
console.log("Q2. Print even number 2 to 25")
for (let i = 2; i <= 24; i = i + 2) {
    console.log(i);
}

console.log('Backward direction me')
for (let i = 24; i >= 2; i = i - 2) {
    console.log(i);
}

// Q3 
console.log('Print multiplication table for 5');
for (let i = 5; i <= 50; i = i + 5) {
    console.log(i);
}

console.log("Let's ask with user that which no. table want");

// let n = prompt("Enter your number to print table");
// n = parseInt(n);
// for (let i = n; i <= n * 10; i = i + n) {
//     console.log(i);
// }


// Nested for loop:-
for (let i = 1; i <= 3; i++) {
    console.log(`Loop Run when i value is ${i}`)
    for (let j = 1; j <= 3; j++) {
        console.log(j);
    }
}

console.log("While loop:-")
// while loop:- 
let j = 1;
while (j <= 20) {
    console.log(j);
    j++;
}


console.log("Print odd no. using While loop:-")
//Print odd no. using while loop
let k = 1;
while (k <= 15) {
    console.log(k);
    k = k + 2;
}


console.log("use of break keyword")
// break keyword:-

let i = 1;
while (i <= 5) {
    if (i === 3) {
        break;
    }
    console.log(i);
    i++;
}


// loop  with array 
let fruits = ["Apple", "banana", "mango", "litchi", "grapes", "orange"];

for (let i = 0; i < fruits.length; i++) {
    console.log(i, fruits[i]);
}


console.log("reverse order me")
for (let i = fruits.length - 1; i >= 0; i--) {
    console.log(i, fruits[i]);
}

//  loop with nested array:- ex 1
let student = [["Aman", "Anil", "Rohit"], ["Rahul", "Ranjeet", "Ankit", "Rajkant"]];
for (let i = 0; i < student.length; i++) {
    console.log(`jab "i" ${i} time run kiya to `, student[i]);
    for (let k = 0; k < student[i].length; k++) {
        console.log(`k = ${k} `, student[i][k]);
    }
}


// example 2 
let classmate = [["Rahul", 99], ["Neha", 101], ["Khusi", 78], ["Pinky", 56], ["Ranjeet", 89], ["Ankit", 88]];
for (let i = 0; i < classmate.length; i++) {
    console.log(`jab 'i' = ${i}`, classmate[i]);
    for (let j = 0; j < classmate[i].length; j++) {
        console.log(classmate[i][j]);
    }
}


// for-of loops:- 
// example 1 
let fruitS = ["Mango", "Apple", "Banana", "Litchi", "Orange"];
for (frui of fruitS) {
    console.log(frui);
}


// example 2
for (character of "Anil") {
    console.log(character);
}


// example 3
for (Name of "Good boy") {
    console.log(Name);
}


// example 4
for (frui of fruitS[0][3]) {
    console.log(frui);
}

// example 5 
let gh = "Anil";
for (character of gh[1]) {
    console.log(character);
}


// Nested for-of loops:- 
let heroes = [["superman", "batman", "wonder woman"], ["spiderman", "ironman", "thor"], ["Rahul", "Neha", "Anil"], ["Ranjeet", "Ankit", "Abhay"]];

// Example 1 
for (list of heroes) {
    console.log(list);

    for (Name of list) {
        console.log(Name);
    }
}

// Example 2
console.log("These all are the example of Nested for of loop");
for (list of heroes) {

    for (Name of list) {
        console.log(Name);
    }
}

// Example 3
for (all of heroes[2][1]) {
    console.log(all);
}
