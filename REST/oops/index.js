console.log("hey");

class Parent {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  talk() {
    console.log(`Hey I am ${this.name}`);
  }
}

class Student extends Parent {
  constructor(name, age, marks, gender) {
    super(name, age, gender);
    this.marks = marks;
  }
  talk() {
    console.log(`Hey I am ${this.name}`);
  }
}

let s1 = new Student("Anil", 23, 84, "Male");
let s2 = new Student("Neha kumari", 20, 90, "Female");

console.log(s1, s2);

class Teacher extends Parent {
  constructor(name, age, gender, subject) {
    super(name, age, gender);
    this.subject = subject;
  }

  talk() {
    console.log(
      `I am ${this.name} and my age is ${this.age} and I teach ${this.subject}`
    );
  }
}

let t1 = new Teacher("Ahmad raja", 45, "male", "Mathematics");
console.log(t1);
