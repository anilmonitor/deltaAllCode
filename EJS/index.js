import express from "express";

const app = express();
const PORT = 3000;
app.listen(PORT, () => {
  console.log("App is listening on port", PORT);
});

//ejs
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/ejs", (req, res) => {
  const username = req.query.username;
  res.render("learnEjs.ejs", {
    name: username,
    age: 10,
  });
});
