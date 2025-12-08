// Js Day 21
// #1 forEach method
let array = [1, 2, 3, 4, 5];
let print = function (elemnt) {
  console.log(elemnt);
};

array.forEach(print);
console.log("______________");

// OR

array.forEach(function (elemt) {
  console.log(elemt);
});

// using array function
console.log("___using array fun____");

array.forEach((elmnt) => {
  console.log(elmnt);
});

// Accesing using object property

let student = [
  {
    name: "Anil",
    age: 23,
    gender: "Male",
  },
  { name: "Rahul", age: 25, gender: "Male" },
  {
    name: "Neha",
    age: 45,
    gender: "female",
  },
];

// Accesing all object
student.forEach((elemt) => {
  console.log(elemt);
});

// Accesing all name of object
student.forEach((elemt) => {
  console.log(elemt.name);
});

// Accessing gender of object
student.forEach((elemt) => {
  console.log(elemt.gender);
});

// #2 using map method
// Example 1 --> doubling the array elemnt
let num = [1, 2, 3, 4, 5];

let double = num.map((element) => {
  return element * 2; // we can do many more operation
});

console.log(double);

// Example 2
let STUDENTS = [
  { name: "Anil", marks: 23 },
  {
    name: "Rahul",
    marks: 25,
  },
];

let GPA = STUDENTS.map((element) => {
  return element.marks / 10;
});

console.log(GPA);

// #3 Filter method

// example 1
let numbers = [2, 3, 5, 6, 7, 8, 3, 12, 31];

let even = numbers.filter((num) => {
  return num % 2 == 0; //even --  true , odd -- false
}); //true wala sara even variable me store ho jayega

console.log(even);

// example 2  --> I want to filter the numbers which is greater than 10;
let NUM = [1, 2, 3, 5, 10, 6, 8, 53, 12, 3, 2, 553, 4, 500, 23, 100];

let filNum = NUM.filter(function (filt) {
  return filt > 10;
});

console.log("Below Filtered numbers");
console.log(filNum);

// #4 Every -- it work like AND (&&) operator

// example 1
let nums = [2, 4, 6, 8, 10];
let stored = nums.every((element) => {
  return element % 2 == 0;
});

console.log(stored); //true

// example 2
let NUMS = [1, 2, 4, 8];
let stor = NUMS.every((element) => {
  return element % 2 == 0;
});

console.log(stor); //false --> because there is a odd num
console.log("_________");

// #5 Some --> it work like OR (||) operator
// example 1
let coll = [2, 4, 6, 8];
let ans1 = coll.some((element) => {
  return element % 2 == 0; //true
});

console.log(ans1);

// example 2
let coll2 = [1, 2, 4, 6, 8];
let ans2 = coll2.some((element) => {
  return element % 2 == 0; //true
});

console.log(ans2);

// #6  reduce
let arr1 = [1, 2, 3, 4];

let newReduce = arr1.reduce((result, element) => {
  //  console.log(result);
  return result + element;
});

console.log(newReduce);

// Q find the max element in array using reduce method
// using for loop
let arr = [2, 3, 5, 85, 1, 2, 500, 46, 7540];
let max = -1;
for (let i = 0; i <= arr.length; i++) {
  if (max < arr[i]) {
    max = arr[i];
    let ok = i;
  }
}
console.log(max); //7540

// using reduce method
arr = [2, 3, 5, 85, 1, 2, 500, 46, 645, 45, 100, 63430];
let finalResultMax = arr.reduce((result, element) => {
  if (result > element) {
    return result;
  } else {
    return element;
  }
});
console.log(finalResultMax);

let arry = [10, 20, 30, 20, 100, 40];
// pracice Qs2 check if all numbers in our array are multiple of 10 or not
let res = arry.every((element) => {
  return element % 10 == 0;
});
console.log(res);

// q2 waf to find min num from a array
function getMin(nums) {
  let finalAns = nums.reduce((min, Element) => {
    if (min < Element) {
      return min;
    } else {
      return Element;
    }
  });

  return finalAns;
}

let numss = [323, 32, 10, 320, 232, 30, 6, 223];
console.log(getMin(numss));

// spread
let Numbes = [1, 2, 3, 4, 5, 67, -1, -3, 12];
let Name = "AnilMonitor";

console.log(...Name); //(...) these 3 dots are spread symbol

console.log(Math.min(...Numbes)); // min is -3
console.log(Math.max(...Numbes)); //max is 67

// spread with array literals
let mixNum = [1, 2, 3, 45, 6];
let newAr = [...mixNum];
console.log(newAr);

let mixx = ["Anil"];
let charr = [..."Anil"];
console.log(charr);

// concatinate two array in one
let odd = [1, 3, 5, 7, 9, 11];
let Even = [2, 4, 6, 8, 10, 12];
let finalArray = [...odd, ...Even];
console.log(finalArray);
console.log(...finalArray);

//Spread with object (string, array, object)
let stude = {
  name: "Anil",
  age: 23,
};

let newStudent = { ...stude, makrs: 89, email: "anilarangi6@gamil.com" };
console.log(newStudent);

//with array
let A = [1, 2, 3, 4, 5];
let newArray = { ...A };
console.log(newArray);

//with string
let oldname = "Kumar";
let updatedName = { ...oldname };
console.log(updatedName);

// Rest concept
function hey() {
  return arguments;
}
console.log(hey(3, 3, 3));

// Q lets make a function to return a min val
function min(...nums) {
  return nums.reduce((min, el) => {
    if (min < el) {
      return min;
    } else {
      return el;
    }
  });
}
console.log(min(1, 2, 2, 3, 4, 87, -86));

// passing msg also
function sum(msg, ...nums) {
  console.log(msg);
  return nums.reduce((res, el) => {
    return res + el;
  });
}

console.log(sum("This is no. 6587878", 8, 4, 5, 9));

//Destructing
let newName = ["Anil", "Neha", "Moni", "All girls"];
let [winner, ...other] = newName;

console.log(`Winner is: MR. ${winner}`);
console.log(other);

// Destructing in object literals
let STUDENT = {
  name: "Anil",
  age: 23,
  email: "anilarangi6@gmail.com",
  password: "abc00",
  city: "Garhwa",
  subject: ["Maths", "English", "Physics"],
};

// suppose i want id and pass
let { email, password } = STUDENT;
console.log(email, ",", password);
// I want ki password ka variable name alag rhe
let { name, password: secreat, city, food = "Nothing" } = STUDENT;
console.log(secreat); //abc00
console.log(city); // Garhwa
console.log(food); //Nothing
console.log(STUDENT); //Original object

//-- Day 21 ended --
// practice Qs in others folder of day 21 (8)
