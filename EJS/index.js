import express from "express";

const app = express();
const PORT = 3000;
app.listen(PORT, () => {
  console.log("App is listening on port", PORT);
});

app.set("view engine", "ejs");



app.get("/", (req, res) => {
  res.render("home.ejs");
});
