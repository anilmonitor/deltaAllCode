// pdf practice Question
// Qsl. Create a new input and button element on the page using JavaScript only. Set the
// text of button to "Click me'

let body = document.querySelector("body");
let btn = document.createElement("button");
body.append(btn);
btn.innerText = "click me!";

//input element
let input = document.createElement("input");
input.type = "text";
input.placeholder = "Enter some text";
body.append(input);

// Qs2. Add following attributes to the element :
// Change placeholder value of input to "username"
// Change the id of button to "but1

input.placeholder = "username";
btn.setAttribute("id", "btn1");

// Qs3. Access the btn using the querySelector and button id. Change the button background
// color to blue and text color to white.

let btnStyle = document.querySelector("#btn1");
btnStyle.style.backgroundColor = "blue";
btnStyle.style.color = "white";

// Qs4. Create an hl element on the page and set its text to "DOM Practice" underlined.
// Change its color to purple
let h1 = document.createElement("h1");
h1.innerHTML = "<u> DOM Practice </u>";
body.append(h1);
h1.style.color = "purple";

// Qs5. Create a p tag on the page and set its text to "My channel name is ANIL MONITOR !!",
// where ANIL MONITOR is bold.
let p = document.createElement("P");
body.append(p);
p.innerHTML = "My channel name is <b> ANIL MONITOR </b> !!";
