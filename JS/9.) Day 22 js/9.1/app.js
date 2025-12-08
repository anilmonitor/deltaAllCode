// 2nd page of Day 22 - 9

// obj.getAttribute()
// obj.setAttribute(,)
let headder = document.querySelector("#head");
console.log(headder.getAttribute("id")); //--> #head is the id
console.log(headder.getAttribute("class")); //there is no call, hence we will get null

// let's add class attributes in above
headder.setAttribute("class", "mainhead");
console.log(headder.getAttribute("class")); //mainhead is the class
// headder.setAttribute("id", "ok"); --> NOW id is - #ok (we can change its id anytime but older style will be removed due to id change)

// manipulating Style
let stl = document.querySelectorAll(".all_list li");
for (list of stl) {
  list.style.color = "hotpink";
  list.style.background = "green";
} //we can do many more changes in style

// using classList - to manipulate styling
let phal = document.querySelector("h4");
phal.classList.add("purple");

let bgg = document.querySelectorAll(".all_list li");
for (let i = 0; i < bgg.length; i++) {
  bgg[i].classList.add("textDecoration"); //added textDecoration
  bgg[i].classList.remove("textDecoration"); //removed textDecoration
  bgg[i].classList.toggle("textDecoration"); //added textDecoration
  console.log(bgg[i].classList.contains("textDecoration")); //checking that textDecoration class available on not
}

let rituName = document.querySelector("#ritu");
rituName.classList.add("blackbg"); //added blackbg class
rituName.classList.add("white"); //added white class
rituName.classList.toggle("white"); //removed white class

//Navigation
let para = document.querySelector("div p");
console.log(para.parentElement); //<p> ka parent element div hain

let div = document.querySelector(".photohub");
console.log(div.children); // 3 children are there which is img
console.log(div.childElementCount); //3 children

let previous = document.querySelector(".all_list");

previous.previousElementSibling.style.color = "yellow"; //color is chansed into yellow
previous.nextElementSibling.style.backgroundColor = "magenta"; //bg color changed
