// if statement
let Age = 23;
if (Age >= 18) {
    console.log("You can vote");
}
if (Age < 8) {
    console.log("Ths is wrong");
}

// ex 2
let firstName = "ANIL";
if (firstName === "ANIL") {
    console.log(`Welcome Mr. ${firstName}`);
}

// Practice Qs --> What to do based on color.
// Traffic light system
let color = "red";
if (color === "red") {
    console.log("Stop!! color is Red.");
}
if (color === "yellow") {
    console.log("Be ready to go, color is yellow.")
}
if (color === "green") {
    console.log("Go, color is Green.")
}






// else if condition --> ex 1
let age = 13;
if (age >= 18) {
    console.log("You can vote");
} else if (age < 18) {
    console.log("you can not vote");
}
else if (age = 13) {
    console.log("you will be able to vote soon");
}

// example 2 
let marks = 60;
if (marks >= 80) {
    console.log("You have got grade: A+");
} else if (marks >= 60) {
    console.log("You have got grade: A");
} else if (marks >= 33) {
    console.log("You have got grade B");
} else if (marks < 33) {
    console.log("You are fail !!");
}





// else condition ex --> 1
let ageV = 17;
if (ageV >= 18) {
    console.log("You can vote");
} else {
    console.log("You can not vote dear");
}

//  ex 2
let coloR = "blue";
if (coloR === "red") {
    console.log("Stop !!");
} else if (coloR === "yellow") {
    console.log("Be Ready");
} else if (coloR === "green") {
    console.log("Go");
} else {
    console.log("Traffic light is not working");
}

// Practice Question 
let sizePopcorn = "Sm";
if (sizePopcorn === "XL") {
    console.log("Price of XL size popcorn is: 250 ");
} else if (sizePopcorn === "L") {
    console.log("Price of L size popcorn is: 200");
} else if (sizePopcorn === "M") {
    console.log("Price of M size popcorn is: 100");
} else if (sizePopcorn === "S") {
    console.log("Price of S size popcorn is: 50");
} else {
    console.log(`Sorry!! There is no any popcorn preset in this Size ${sizePopcorn}`)
}


// Nested if-else concept 
let markS = 99;
if (markS >= 33) {
    console.log("Pass");
    if (markS >= 80) {
        console.log("You have got grade: O+"); //O+ for outstanding
        if (markS >= 100) {
            console.log("You are eligible to get Money also");
        } else {
            console.log("You are not eligible to get money!!");
        }
    } else {
        console.log("You have got grade: A");
    }
}
else {
    console.log("Fail !!!");
}




// Logical operators
// use of && AND operator
let p = (6 > 1); //true
let q = (2 > 1);  //true
let m = (10 < 2); //false
let n = (20 > 100); //false

console.log(p && q); //--> true
console.log(m && n); //--> false
console.log(p && m); //--> false
console.log(m && p); //--> false




// use of || OR operator
console.log(p || q);  //--> true
console.log(p || m); //--> true
console.log(m || p); //--> true
console.log(m || n);   //--> false



//use of ! NOT Operator
console.log(!p);
console.log(p);
console.log(!m);
console.log(!n);
console.log(!(10 < 1));

// Practice Question   Q1
let str = "anil";
if ((str.length > 3) && (str[0] === "a" || str[0] === "A")) {
    console.log("Good String");
} else {
    console.log("Bad string");
}

// Practice Question   Q2
let NNum = 12;
if (

    (NNum % 3 === 0) && ((NNum + 1 == 15) || (NNum - 1 == 11))) {
    console.log("Safe");
} else {
    console.log("unsafe");
}


// truthy and falsy

if ("ANil") {
    console.log("This is true value");
} else {
    console.log("This is False value");
}



// switch statement
let colorr = "red";

switch (colorr) {
    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Be ready to go");
        break;

    case "green":
        console.log("Go!!");
        break;

    default:
        console.log("Traffic light is broken");
}
//  example
let rank = 72;
switch (rank) {
    case (100):
        console.log("You will seat on 1st bench");
        break;

    case 90:
        console.log("You will seat on 2nd bench");
        break;

    case 80:
        console.log("You will seat on 3rd bench");
        break;
    case 70:
        console.log("You will seat on 4th bench");
        break;
    default:
        console.log("Sorry! Mr. Anil , you are failed!!🙂");
}


let ANILL = "12";
switch (ANILL) {
    case "red":
        console.log("This is red color, Stop Now");
        break;
    case "yellow":
        console.log("This is yellow color, Ready to go.");
        break;
    case "green":
        console.log("This is green color, Go now!!");
        break;
    default:
        console.log("Traffic light has broken so you can't go now. Go back to your home");

}

// Practice Qus
let day = 6;
switch (day) {
    case 1:
        console.log("Today Day is --> Monday");
        break;
    case 2:
        console.log("Today Day is --> Tuesday");
        break;
    case 3:
        console.log("Today Day is --> Wednesday");
        break;
    case 4:
        console.log("Today Day is --> Thursday");
        break;
    case 5:
        console.log("Today Day is --> Frieday");
        break;
    case 6:
        console.log("Today Day is --> Saturday");
        break;
    default:
        console.log("Today Day is --> Sunday");
}


// ALert, Prompt and Warning , error.

// alert ("How are you bro?");
// prompt("What is your roll no.: ");


// let's print prompt on console 
// let firstNamE = prompt("Enter your first Name: ");
// let lastNamE = prompt("Enter Your lastName: ");
// console.log(firstNamE + lastNamE);
// console.error(firstNamE + lastNamE);
// console.warn(firstNamE + lastNamE);






