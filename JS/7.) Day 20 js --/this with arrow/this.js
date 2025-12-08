// this with arrow function
let student = {
  //parrent ka this will be -- window object
  name: "Anil",
  age: 23,
  pro: this,
  getName: function () {
    console.log(this); //iska this will be Calling object
    console.log(this.name); // hence calling object is "student"
    console.log("hii !"); // So, Student object is this.
  },

  getAge: () => {
    console.log(this); //iska this parrent ka this hoga
    console.log(this.age); // hence the parrent this is window object
    console.log("hey"); // to iska this bhi - window object hi hoga
  },
};

// console.log(student.getName());
// console.log(student.getAge());

//IN CASE OF USING THIS inside inbuilt function like setTimeout (then here this will behave in other way)
let student2 = {
  //parrent ka this will be -- window object
  name: "Anil",
  age: 23,
  pro: this,

  info1: function () {
    setTimeout(() => {
      console.log(this); //ye function apna parrent ka this dekhega
    }, 2000); //hence iska parrent line no. 29 wala function hain.
  }, //aur line no. 29 ka this "student2" object hain.

  info2: function () {
    setTimeout(function () {
      console.log(this); //ye apna calling object ko dekhega to iska calling object
    }, 2000); //setTimeout (object) h, aur setTimeout ka this Window object hain
  }, //isiliye hame window object yaha pe milta hain.
};

console.log(student2.info1());
console.log(student2.info2());
