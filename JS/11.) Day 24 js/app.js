//Part 10 --> Day 24 js
let div = document.querySelector(".d1");
let ul = document.querySelector(".ull");
let li = document.querySelector("li");

div.addEventListener("click", (event) => {
  console.log("div was clicked!");
});

ul.addEventListener("click", (event) => {
    event.stopPropagation();
  console.log("ul was clicked!");
});

li.addEventListener("click", (event) => {
    event.stopPropagation();
  console.log("li was clicked!");
});


//todo made in 11.1 <-- check this page