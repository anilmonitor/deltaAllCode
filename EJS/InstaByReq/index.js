const express = require("express");
const finalData = require("./data.json");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.listen(PORT, () => {
  console.log("App is listening on port", PORT);
});

//insta PAGE
app.get("/instagram/:username", (req, res) => {
  const { username } = req.params;
  const data = finalData[username];

  if (!data) {
    res.render("notFound.ejs", { username });
  }

  res.render("insta.ejs", { data });
});

app.get("/", (req, res) => {
  res.send("<h1>Search for: i. /instagram/cats and ii. /instagram/dogs</h1>");
});
