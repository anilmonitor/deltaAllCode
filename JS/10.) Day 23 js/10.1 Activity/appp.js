const h1 = document.querySelector("h1");
const btn = document.querySelector("button");
const box = document.querySelector("#box");

//Generating random RGB color
let randomNum = (num) => {
  return Math.floor(Math.random() * (num + 1));
};

//function for callback
let btnclick = function () {
  let color = `rgb(${randomNum(255)},${randomNum(255)},${randomNum(255)})`;

  box.style.backgroundColor = color;
  h1.innerHTML = `${color}`;
};

// DOM event listener
btn.addEventListener("click", btnclick);
