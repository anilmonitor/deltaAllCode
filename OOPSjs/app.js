// let ar = [1, 2, 3, 4];

// let obj = {
//   name: "Anil",
//   age: 23,
// };

/*
//factor function
function personMaker(name, age) {
  const person = {
    name: name,
    age: age,
    talk: function () {
      console.log(`I am ${this.name}`);
    },
  };
  return person;
} 

let s1 = personMaker("Anil", 22);
let s2 = personMaker("Rahul", 23);

console.log(s1);
console.log(s2);

*/

/*

//new operator
// Constructors --> It does't return and It start with capital letter
function Person(name, age) {
  this.name = name; //--> ( here this refer to p1,p2,p3,..... objects )
  this.age = age;
}

Person.prototype.talk = function () {   //-->  (ye prototype ab p1,p2,p3.... objects ke pas bhi rhega )

  console.log(`I am ${this.name}`);
};

let p1 = new Person("ANIL", 23);
let p2 = new Person("Rahul", 25);

console.log(p1);
console.log(p2);
*/

// Class (OOPS)

class Person {
  constructor(name, age) { //--> yaha pe constructor is a method which will create obj
    this.name = name; //--> (here this is refer to p1,p1.... objects)
    this.age = age;
  }
  talk() {
    console.log(`I am ${this.name} and my age is ${this.age}`);
  }
}

let p1 = new Person("Anil", 23);
let p2 = new Person("Rahul", 25);
console.log(p1); //this will print p1 obj
console.log(p2.talk()); //this will print Hi I am Anil and my age is 23
