import express from "express";
import data from "./data.json" assert { type: "json" }; //--> assert { type: "json" } kya hai? --> Isse Node.js ko clear bataya jata hai ki: “Bhai, main JSON file import kar raha hoon, JS module nahi.”

const app = express();
const PORT = 3000;
app.listen(PORT, () => {
  console.log("App is listening on port", PORT);
});

//ejs
app.set("view engine", "ejs");

app.use("/home", (req, res) => {
  let details = req.query;
  res.render("home.ejs", { details });

  console.log(details);
});

app.get("/ejs", (req, res) => {
  const username = req.query.username;
  res.render("learnEjs.ejs", {
    name: username,
    age: 10,
  });
});

//dice roll
app.get("/rollDice", (req, res) => {
  let randomVal = Math.floor(Math.random() * 6 + 1);
  res.render("rollDice.ejs", {
    randomVal,
  });
  console.log(randomVal);
});

//insta PAGE
app.get("/instagram/:username", (req, res) => {

  console.log(data);
  // res.render("insta.ejs");
});
