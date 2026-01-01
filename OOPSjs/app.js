// let ar = [1, 2, 3, 4];

// let obj = {
//   name: "Anil",
//   age: 23,
// };

//factor function

function student(name, age) {
  const person = {
    name: name,
    age: age,
    talk: function () {
      console.log(`I am ${this.name}`);
    },
  };
}

let s1 = student("Anil", 22);
let s2 = student("Rahul", 23);