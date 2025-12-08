// Cocept 2
// let a = 100;
// let b = 34;
// console.log(a+b);
// console.log("sum of a and b is:" , a+b);

// let a = 12;
// let b = 8;
// console.log("My name is Anil and I am a tech content creator", 'sum of variable a and b is: ', a+b, "This is Number 12321");




// Concept 2
let penPrice = 15;
let copyPrice = 35;

// By using Template literals
console.log(`Total price is ${penPrice+copyPrice} rupees`) //1
let finalPrice = (`Total price is ${penPrice+copyPrice} rupees`);  //2
console.log(finalPrice); 

// withoutlkiterals
console.log("Total price is" , (penPrice+copyPrice), "rupees"); //3


// cocept 3 --> Operators
let a = 10;
let b = 5;

// Arthemetic operators
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b); //remainder after deviding a with b
console.log(a**b); //a to the power b


//Unary operator
let y = 10;
console.log(a++); //output 10
console.log(++a); //output 12 --> +1 inceased by post increment 
console.log(y--); //oputput 10
console.log(--y);  //output 8 --> -1 decreased by post decrement


// Assignment operator
let m = 10;
let n = 20;
console.log (m = n); //oputput 20
console.log (m+= 100); //output 120
console.log (m-= 90); //output 30
console.log (m*= 5); //output 150
console.log (m/= 25); //output 6
console.log (m%= 4); //output 2
console.log (m**= 2); //output 30


//Comparison Operator
a = 12;
b = 12;
console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);
console.log(a==b);
console.log(a!=b);
console.log('55' == 55);
console.log('55' != 55);


//Comparison value, not type (== Double equal to)
console.log("123"==123); //true
console.log(1==12); //false
console.log(1=='1'); //true
console.log(0 == ""); ///true
console.log(0 == false); //true
console.log(null == undefined); //true


// comparison type and value (=== triple equal to)
console.log("123"===123); //false
console.log(1===12); //false
console.log(1==='1'); //false
console.log(0 === ""); //false
console.log(0 === false); //false
console.log(null === undefined); //false


//Comparison for non-numbers
console.log('a'>'A')
console.log('a'<'A')
console.log('$'>'@')







