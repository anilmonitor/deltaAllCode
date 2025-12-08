// Video and pdf practice Question
let body = document.querySelector("body");
let mainDiv = document.createElement("div");
body.append(mainDiv);
mainDiv.style.border = "2px solid black";

// Qi.) a <p> with red text that says "Hey I'am red!"
let p1 = document.createElement("p");
p1.append("I am red!");
mainDiv.append(p1);
p1.style.color = "red";

// Qii.) an <h3> with blue text that says "Hey I am a blue h3!"
let h3 = document.createElement("h3");
mainDiv.append(h3);
h3.append("I am blue h3");
h3.style.color = "blue";

// Qiii.) a <div> with a black border and pink backgroud color with the folling elements inside it
// a. another <h1> that say "I am a div"
//b. a <p> that says "Me Too !"

let div2 = document.createElement("div");
div2.classList.add(".childDiv"); //class a class in div2
mainDiv.append(div2);
div2.style.border = "2px dotted green";
div2.style.backgroundColor = "pink";

// a. another <h1> that say "I am a div"
let h1 = document.createElement("h1");
h1.append("I am in a Div");
div2.append(h1);
h1.style.backgroundColor = "white";

//b. a <p> that says "Me Too !"
let p2 = document.createElement("p");
p2.append("ME TOO!");
div2.append(p2);
p2.style.backgroundColor = "yellow";
