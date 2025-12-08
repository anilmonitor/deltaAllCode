// Fav Movie Game 
let favMovie = "pushpa";
let guess = prompt("Enter my fav movie name");

while ((favMovie != guess) && (guess != "quit")) {
    guess = prompt("you are wrong! please try again 🥲");
}

if (guess === favMovie) {
    console.log("Congrats you guess correct 😊");
} else {
    console.log("You quit the game");
}