import express from "express";

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

//insta PAGE
app.get("/instagram/:user/:pageAge", (req, res) => {
  let followers = ["Anil", "Rahul", "Gautam", "Manjeet", "Manish Rajak"];
  const username = req.params;
  res.render("insta.ejs", {
    username,
    followers,
  });
  console.log(followers);
  console.log(username);
});

app.get("/rollDice", (req, res) => {
  let randomVal = Math.floor(Math.random() * 6 + 1);
  res.render("rollDice.ejs", {
    randomVal,
  });

  console.log(randomVal);
});
