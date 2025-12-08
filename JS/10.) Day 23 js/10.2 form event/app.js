// Day 23 pg 10 = 10.2
let form = document.querySelector("#form1");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Form is submitted!!");
  console.log(form[0].value); //print the value of username
  console.log(form[1].value);
});

//other methods to acces form data

// ..
// some more event
// i. change event  ii. input event

let form2 = document.querySelector("#form2");
form2.addEventListener("submit", (event) => {
  event.preventDefault();
});

// i. example of change event
let Name = document.querySelector("#userN");
Name.addEventListener("change", () => {
  console.log("Change event fired!");
  console.log(Name.value);
});

//ii. example of input event
let userr = document.querySelector("#passW");
userr.addEventListener("input", () => {
  console.log("Change event fired!");
  console.log(userr.value);
});

//Notepad game
let text = document.querySelector("#text");
text.addEventListener("input", () => {
  let p = document.querySelector("p");
  p.innerText = text.value;
  console.log(text.value);
});
