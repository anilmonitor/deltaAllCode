// let ar = [1, 2, 3, 4];

// let obj = {
//   name: "Anil",
//   age: 23,
// };

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
