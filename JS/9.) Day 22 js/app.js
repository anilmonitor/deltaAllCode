// Day 22
// document.all[7].innerText = "ANIL MONITOR";
// console.log(document.all[7].innerText = "ANIL MOnitor" );

// Selecting Element
// i.) getElementById("");
console.log("d");
let h1obj = document.getElementById("pagehead");
console.log(h1obj.innerText); //Current text is Raj Monitor
h1obj.innerText = "ANIL MONITOR";
console.log(h1obj.innerText); // Now its become ANIL MONITOR

//we have changed old image to new
let imgobj = document.getElementById("topimg");
imgobj.src =
  "https://cdn.pixabay.com/photo/2025/06/14/21/41/ladybug-9660338_1280.jpg";

// ii.) getElementsByClassName("")
// similarly we can do for this selector as id selector
let h2obj = document.getElementsByClassName("h2Text");
h2obj[0].innerText = "Anil Monitor is a youtube channel";

let photos = document.getElementsByClassName("fruit");
console.log(photos); //a collection with index
//let's change 0 index wla image to another image
photos[0].src =
  "https://cdn.pixabay.com/photo/2018/01/25/14/12/nature-3106213_1280.jpg";

//let's change all image via loop
for (let i = 0; i < photos.length; i++) {
  photos[i].src =
    "https://cdn.pixabay.com/photo/2023/11/25/08/07/tree-8411271_1280.jpg";
  console.log(`Image of ${i} is changed`);
}

//selectingElementsByTagName
let allPTag = document.getElementsByTagName("P");
console.log(allPTag); //print collection of p preset in html documents

// let's change the p of 1st index
allPTag[1].textContent = "My name is ANIL and I love making videos";

// selecctElementByQuerySelector
let singleP = document.querySelector("p");
console.log(singleP);
console.log(document.querySelector("p")); // we get only fist p
console.log(document.querySelector(".fruit")); // we get only fist element with class .fruit
console.log(document.querySelector("#an")); // we get only fist element with id #an
console.log(document.querySelector("div img")); //we get only first img of div

//by using this we can select all p, li, etc
// selecctElementByQuerySelectorAll
let allLi = document.querySelectorAll("li");
allLi[0].innerText = "My name is ANIL";

console.log(allLi);

// Using propertie and Methods
let AboutAnil = document.querySelector("#about-me");
console.log(AboutAnil.innerText);
console.log(AboutAnil.innerHTML);
console.log(AboutAnil.textContent);

// AboutAnil.innerHTML = "<b> Anil </b>  "; //it will write Anil is Bold without showing b tag in viweport
// AboutAnil.innerText = "I am Anil"

// let's underline page heading
let Heading = document.querySelector("#pagehead");
Heading.innerHTML = `<u> ${Heading.innerText} </u>`;
