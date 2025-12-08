// Day 28 --> Day 5 of js
// Topic --> object literal

// examples 1/3
const student = {
  Name: "Anil",
  Age: 22,
  Marks: 77,
};

// examples 2/3
const item = {
  Name: "Lolipop",
  Price: 32,
  Discout: 34,
  color: ["Red", "Hotpink", "PINK", "Yellow"],
};

console.log(student);
console.log(item);

// examples 3/3  --> create an object literal for the properties of twitter which include
// usename, content/title, like, repost, tags, share, view, comment

const post = {
  username: "@anilmonitor",
  content: "Varansi viral reels",
  like: 2334,
  repost: 43,
  tags: ["@raj bhai", "Rahul thakur", "Manjeet babu", "Omkar bhai"],
  share: 675,
  view: 100000,
  comment: 34,
};

//Accessing value using key
console.log(post["tags"]);
console.log(post.username);
let LIKE = post.like;
console.log(LIKE);
console.log(post.tags[1]);

//coversion in key
const info = {
  1: "anil",
  2: "computer",
  true: 32,
  null: "raj verma",
  undefined: "how are u",
};

console.log(info[1]);
// console.log(info.1) --> NOT Allowed
console.log(info[null]);
console.log(info.null);
console.log(info.undefined);
let hey = info[1];
console.log(hey);

console.log("___add new key value___");
// add/update delete key value in object literal
const stu = {
  name: "Anil",
  age: 22,
  marks: 29.32,
};

stu["gender"] = "male";
stu.dist = "Garhwa";
stu["1"] = 23;
console.log(stu["gender"]);
console.log(stu.dist);
console.log(stu[1]);
console.log(stu);

//updating old key value
stu.age = 50;
stu["name"] = 7091704927;
console.log(stu.age);
console.log(stu.name);
console.log(stu);

//deleting key value
delete stu.name;
delete stu[1];
delete stu["marks"];
delete stu.gender;
delete stu.age;
console.log(stu); //remaining key value is -> dist: Garhwa

//Object of Object
const details = {
  anil: {
    dist: "Garhwa",
    age: 22,
    gender: "male",
  },
  abhijeet: {
    dist: "Bokaro",
    age: 18,
    gender: "female",
  },
  aman: {
    dist: "hazaribagh",
    age: 17,
    gender: "male",
  },
  vishal: {
    dist: "Giridih",
    age: 20,
    gender: "male",
  },
};

console.log(details["anil"]);
console.log(details.abhijeet);

//deleting (abhijeet dist)details.abhijeet.dist
delete details.abhijeet.dist;
console.log(details.abhijeet);

//adding new key:value to details.abhijeet
details.abhijeet.relatioship = "Single";
console.log(details.abhijeet);

//changing abhijeet age
details.abhijeet.age = 102;
console.log("Abhijeet age is: ", details.abhijeet.age);

//adding new object in details with raj name
details.raj = {
  age: 44,
  dist: "Ranchi",
  gender: "male",
};
console.log("Raj age is: ", details.raj.age);
// lets update age of raj from 44 to 103
details.raj.age = 103;
console.log("Now raj age is: ", details.raj.age);

console.log("----ARRay of object----");
// ARRAY of object
const table = [
  {
    name: "Anil",
    age: 22,
    gender: "male",
  },
  {
    name: "swati",
    age: 30,
    gender: "female",
  },
];

console.log(table);
console.log(table[0]); //accesing 0 index object
table[0].age = 105;
console.log("Now Anil age is: ", table[0].age);
delete table[1];
console.log(table);

//lets add new objet at 2nd index of array table
// changes will occcur in original
(table[2] = {
  name: "abhijeet",
  age: 43,
  dist: "bokaro",
}),
  console.log(table);

// Math Object
console.log("Pi value is: ", Math.PI);
console.log("E value is: ", Math.E);

console.log(Math.abs(-10)); // 10
console.log(Math.abs(10)); // 10

console.log(Math.pow(2, 3)); //8
console.log(Math.floor(5.999));

//Math.floor()
// It provides nearest smallest value
console.log(Math.floor(5)); //5
console.log(Math.floor(5.5)); //5
console.log(Math.floor(-5)); //-5
console.log(Math.floor(-5.000938)); //-6

// Math.ceil
// it provides nearest largest value
console.log(Math.ceil(5)); //5
console.log(Math.ceil(5.4)); //6
console.log(Math.ceil(-5)); //-5
console.log(Math.ceil(-5.76));
-5;

// Math.random()
// It generates random number B/W 0 to 1 (Except 1)
console.log(Math.random()); //0.3178415712762923
console.log(Math.random()); // 0.9604502403150708

//Generating Random integer using Math.random()
let num = Math.random();
let INT = num * 10;

let final_integer = Math.floor(INT);
let smallest = Math.ceil(INT);
console.log(final_integer);
console.log(smallest);


