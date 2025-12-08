// String method
// 1.) variable.trim()

let msg = "      Hello     ";
let = newmsg = msg.trim();
console.log(msg.trim());
console.log(msg);
console.log(newmsg);


// let pass = prompt("enter your pass");
// console.log(pass.trim());
// console.log(pass);



// 2.) toLowerCase:-
let namE = "Anil KuMar";
let newName = namE.toLowerCase();
console.log(namE.toLowerCase());
console.log(namE);
console.log(newName);


// 3.) toUpperCase:-
let NAME2 = "This is upper case Name";
let newName2 = NAME2.toUpperCase();
console.log(NAME2.toUpperCase());
console.log(newName2);
console.log(NAME2);




// String methods with arguments:-
let str = ("ILoveCoding");
console.log(str.indexOf("Love"));
console.log(str.indexOf("d"));
console.log(str.indexOf("o"));
console.log(str.indexOf("y"));
console.log(str.indexOf("P"));

// other way 
let newStr = str.indexOf("n");
console.log(newStr);




// #Method chaining:-
let user = "    this is Anil kumar    ";
console.log('usign method chaining: ', user.toUpperCase().trim());
console.log("withoutmethod: ", user);

// other way of method chainig
let newUser = (user.toUpperCase().trim());
console.log(newUser);


// Slice method:-
let stR = "ILoveCoding";
console.log(stR.slice(5));
console.log(stR.slice(1,4));
console.log(stR.slice(-2));

// storing in new variable 
let newstR = (stR.slice(5));
console.log(newstR);



//Replace method:-
let string = "MyNameIsAnil";
console.log(string.replace("Anil", "Rahul"));
console.log(string.replace("i", "ee"));
console.log(string);

// or 
let newString = string.replace("My", "His");
console.log(newString);

// storing in in variable using prompt  
// let thisII= prompt("Enter your name");
// console.log(thisII.trim().toUpperCase());



// repeat method:-
let party = "I am anil";
console.log(party.repeat(3));
console.log(party.replace("anil", "RAHUL"));


// Practice Qs
let lstr = "    help   " ;
console.log(lstr.trim().toUpperCase() ); // Q 1.) output --> "HELP" 

let sstr = "apnacollege";
console.log(sstr.slice(4, 9)); // Q2 a.) output -> colle 
console.log(sstr.indexOf("na"));  // Q2 b.) output --> 2
console.log(sstr.replace("apna", "our"));  //Q2 C.) output --> ourcollege

console.log(sstr.slice(4).replace("l", "t")); //Q3.) Output cotlege


// Array :-
let studen = ["Anil", "Rahul", "Mohit", "pankaj"];
console.log(studen);

// we inserting value on any index of arry ex of mutable
studen[17] = "Ankit";
console.log(studen); //Now lenght is 18 and index 4 to 16 is empty

//Array methods
// 1.) push 
let phone = ["realme", "apple", "oppo", "vivo"];
console.log(phone);
phone.push("samsung", "techno", "lava");
console.log(phone); //3 phone added at last
// 2.) pop 
phone.pop();
console.log(phone); //lava removed from last and return "lava"


// 3.) unshift
phone.unshift("Anil", "Rahul", "Someone");
console.log(phone); //3 name added in phone at first
// 4.) shift 
phone.shift();
console.log(phone); //Anil removed from first and return Anil


//Practice QS 
let start = ['january', 'february', 'march', 'august'];
start.shift();
start.shift(); 

start.unshift('july', 'june');
console.log(start);

//indexOf method in array:-
let car = ['tata', 'xuv','nano','toyota'];
console.log(car);
console.log(car.indexOf('toyota')); //index is 3
console.log(car.indexOf('scorpio')); // -1 not found

// include methods:-
console.log(car.includes('toyota')); //true
console.log(car.includes('xuv'));  //true
console.log(car.includes('scorpio'));  //false


// concat method in array:-
let primary = ["red", "yellow", "green"];
let secondary = ["blue", "pink", "black", "hotpink", "skycolor"];
console.log(primary.concat(secondary)); //primary and secondary both mixed
console.log(primary);

console.log(primary.reverse());  //output --> green, yellow, red
console.log(primary); // mutable --> changes to original varible/array

//slice method in array:-
let emoji = ['rona', 'hasna', 'style', 'hero', 'attitude'];

console.log(emoji.slice(2)) ;
console.log(emoji.slice(1, 4)) ;
console.log(emoji.slice(emoji.length-2)) ;
console.log(emoji.slice(-2)) ;


// Splice methods in array :-
let family = ["anil","rahul","pinky","khusi", "neha"];
let removedArray = (family.splice(1,3));
console.log(removedArray); //-->  rahul, pinky,khusi
console.log(family) //remaining in main family array -> anil, neha


let  fam2 = ["someone", "rekha", "ranjeet", "ojie", "ajie", "urfie"];
console.log(fam2.splice(2,3, "new1", "new2", "new3", "new4")); //index 2 to 4 removed -> ranjeet, ojie, ajie,AND added "new1", "new2", "new3", "new4"
console.log(fam2);

// adding value at 1st index 
console.log(fam2.splice(1, 0, "Dungu"));
console.log(fam2);



// sort methods in array:-
let din = ["anil", "riyu", "neha", "rahul"];
console.log(din.sort());

let chaar = ["b", "c", "f", "z", "y", "e"];
console.log(chaar.sort());


//practice Qs
// Q1)
unchange = ['january', 'july', 'march', 'august'];
console.log(unchange.splice(0,2, "july", "june")); //january, july removed and july, june added

// Q2 
let lang = ["c", "c++", "html", "javascript", "python", "java", "C#", "sql"];
console.log(lang.reverse().indexOf("javascript")); //output will be 4


// Array Refrences :-

console.log([]==[]);
console.log(["a", "b"]==["a", "b"]); //false becoz address of both array is not same.


let arr = ["a", "b", "c",];
let arrCopy = arr;
console.log(arr); 
console.log(arrCopy); //bot output is same becoz we have added both each others

arr.push("d", "e");
console.log(arr);
console.log(arrCopy);


//Constant array:-
const pie = 3.14;
console.log(pie);
// pie = 10; //error becoz we can't change const value
// console.log(pie); //error

const NUMBER = [1,2,3];
console.log(NUMBER);

NUMBER.push(10,12); //we can change value but not address due to const 
// NUMBER = [5,6,7]; //error, becoz we can't change address of array becoz array is constant




// Nested array:-
let nested = [[2,4,6], [3,6,9,12,5], [4,5,6,9,12,7]];
console.log(nested);

console.log(nested[0][2]); //1st index array ka 2nd index pe value = 6
console.log(nested[2][4]); //output is --> 12


// Practice QS --> Video
let game = [['X', null, "O"], [null, "X", null], ['O', null, "X"]];
console.log(game);
// now remove all null and store 0
console.log(game[0][1] = 0);
console.log(game[1][0] = 0); console.log(game[1][2] = 0) 
console.log(game[2][1] = 0)

console.log(game);

// End of day 16
