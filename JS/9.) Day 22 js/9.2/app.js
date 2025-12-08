// Day 22 page no. 3
// Adding Element to html
// appendChild(element) and append(element)
let h3 = document.createElement("h3");

// lets add/append this h3 to body
let body = document.querySelector("body");
body.append(h3);
h3.innerText = "Hey My this is New H3 created !!"; //this text is added to h3

let newBtn = document.createElement("button");
newBtn.append("I am new button");
console.log(newBtn);
body.append(newBtn);
body.append(newBtn);

// iii) prepend(element)
let h4 = document.querySelector("h4"); //selected h4
let h6 = document.createElement("h6"); //created new h6 element
h6.append("This is h6 inside h4"); //added inner text
h4.prepend(h6); //added h6 inside h4  before h4 text

//iv.) insertAdjacentElement(position, element)
// beforebegin, afterbegin, beforeend, afterend

let btn2 = document.createElement("button");
btn2.append("2nd button");
let divPara = document.querySelector(".para");
divPara.insertAdjacentElement("afterbegin", btn2);

//Removig Element
// i.) removechild(elemenet), // ii.) remove()

let spannlast = document.querySelector(".spannlast");
body.removeChild(spannlast);
// body.remove(); //all body will removed
