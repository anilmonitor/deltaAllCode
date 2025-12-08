// Day 23js part 10
//DOM Event
//i.) onclick
let btns = document.querySelectorAll(".b1 button");
for (bt of btns) {
  bt.onclick = sayhello;
}

function sayhello() {
  alert("hello !!");
}

// exmp 2
let newBtn = document.querySelector("#btn3");
let btn2Func = function () {
  //   console.log("Button 3 was clicked !!");
  newBtn.style.color = "red";
};

newBtn.onclick = btn2Func; //function executed on newBtn click

// ii.) onmouseenter
newBtn.onmouseenter = function () {
  newBtn.style.backgroundColor = "purple";
  newBtn.style.color = "white";
};

//Event Listener
// addEventListener
let h1 = document.querySelector("h1");
let work1 = function () {
  console.log("heyyy");
};

let work2 = () => {
  console.log("This is work 2");
  h1.style.color = "red";
};

h1.onmouseenter = function () {
  h1.style.color = "green";
};

h1.onmouseleave = function () {
  h1.style.color = "blue";
};

h1.addEventListener("click", work1);
h1.addEventListener("click", work2);
let body = document.querySelector("body");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}
newBtn.addEventListener("click", function () {
  let multicolor = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  body.style.backgroundColor = multicolor;
});

// we have added following features in h1
// i.) work1 --> print "hey"
// ii.) work2 --> print "This is work 2" and change color to "red"
// iii.) onmouseenter --> color change to green
// iv.) onmouseleave --> color chnage to blue

// 10.1 I have done activity --> to generate Random color

// Even listeners for Elements
let divv = document.querySelector(".divv");
console.log(divv);

divv.addEventListener("mouseenter", function () {
  divv.style.backgroundColor = "red";

  console.log("Color update");
});

//this in Event Listeners
let h5 = document.querySelector("#cont #ach5");
let para = document.querySelector("#cont #para");
let spa = document.querySelector("#cont #spa");

let changeColor = function () {
  this.style.backgroundColor = "blue";
  this.style.color = "white";
};
h5.addEventListener("click", changeColor);
para.addEventListener("click", changeColor);
spa.addEventListener("click", changeColor);

//Keyboard EVENT
// i. keydown, ii. keyup, iii. keypress - it not detect all key
let input = document.querySelector("#inp1");
console.log(input);

input.addEventListener("keyup", (event) => {
  console.log("Key = ", event.key); ///.key gives us value exact value of keypess = like A,B,1,2,3..
  console.log("key Code = ", event.code); // .code give us code of key that which key was pressed like - keyA, digit5,keyM...
  console.log("Key keydown was pressed!");
});

//lets make a character game using keydown
// we have 4 keys to control it
// 1. ArrowUp ii. ArrowDown iii ArrowLeft iv ArrowRight
let gameInput = document.querySelector("#gameInput");
gameInput.addEventListener("keydown", (e) => {
  if (e.code == "ArrowUp") {
    console.log("Car Move FORWARD!!");
  } else if (e.code == "ArrowDown") {
    console.log("Car Move BACKWARD!!");
  } else if (e.code == "ArrowLeft") {
    console.log("Car Move LEFT!!");
  } else if (e.code == "ArrowRight") {
    console.log("Car Move RIGHT!!");
  } else {
    console.log("Wrong key press !!");
  }
});

// example ii
let textAreaEl = document.getElementById("textAreaEl");
textAreaEl.addEventListener("keydown", (e) => {
  // console.log("Textarea keydown");dc
  console.log(e.code);
});

// example iii
let sel = document.querySelector("#sel");
sel.addEventListener("keyup", (e) => {
  console.log(e.code);
});
