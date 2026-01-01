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

//new operator --> It does't return and It start with capital letter
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.talk = function () {
  console.log(`I am ${this.name}`);
};

let p1 = new Person("ANIL", 23);
let p2 = new Person("Rahul", 25);

console.log(p1);
console.log(p2);
