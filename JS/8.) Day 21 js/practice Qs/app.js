// Qs1. Square and sum the array elements using the arrow function and then find the
// average of the array.

// Square
let array = [1, 2, 3, 4, 5];
let newArray = array.map((el) => {
  return el ** 2;
});
console.log(newArray); // 1, 4, 9, 16, 25

// sum of element
array = [1, 2, 3, 4, 5];
let sum = array.reduce((result, el) => {
  return result + el;
});
console.log(sum); //15

// avg of array
array = [10, 5];
let avg = array.reduce((result, el) => {
  return (result + el) / array.length;
});
console.log(avg); //7.5

// Qs2. Create a new array using the map function whose each element is equal to the
// original element plus 5. --means add +5 in each element
let Arr = [1, 2, 3, 4, 5];
let NewArray = Arr.map((el) => {
  return el + 5;
});
console.log(NewArray); //[ 6, 7, 8, 9, 10 ]

// Qs3. Create a new array whose elements are in uppercase of words present in the
// original array.
let wordCollection = ["anil", "Rahul", "mandeep"];
wordCollection.map((el) => {
  console.log(el.toUpperCase());
});

// Qs4. Write a function called doubleAndReturnArgs which accepts an array and a
// variable number of arguments. The function should return a new array with the original
// array values and all of the additional arguments doubled.

// Qs5. Write a function called mergeObjects that accepts two objects and returns a new
// object which contains all the keys and values of the first object and second object.

let student1 = {
  name: "Anil",
  age: 23,
  city: "Garhwa",
};

let student2 = {
  name: "Moni",
  age: 17,
  city: "Ranchi",
};

function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}
console.log(mergeObjects());
