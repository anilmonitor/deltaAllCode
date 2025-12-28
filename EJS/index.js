import express from "express";

const app = express();
const PORT = 3000;
app.listen(PORT, () => {
  console.log("App is listening on port", PORT);
});

//ejs
app.set("view engine", "ejs");

app.get("/ejs", (req, res) => {
  const username = req.query.username;
  res.render("learnEjs.ejs", {
    name: username,
    age: 10,
  });
});

app.get("/random", (req, res) => {
  let randomVal = Math.floor(Math.random() * 6 + 1);
  res.render("rollDice.ejs", {
    value: randomVal,
  });
});

//insta PAGE
app.get("/instagram/:user/:pageAge", (req, res) => {
  const username = req.params;
  res.render("insta.ejs", {
    username,
  });
  console.log(username);
});

app.get("/home", (req, res) => {
  let details = req.query;
  res.render("home.ejs", { details });

  console.log(details);
});
