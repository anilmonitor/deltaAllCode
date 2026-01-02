const express = require("express");
const { dirname } = require("path");
const app = express();
const port = 3000;
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log("Server is listening at port: ", port);
});

let posts = [
  {
    username: "anilmonitor",
    content: "I love coding",
  },

  {
    username: "renukumari",
    content: "I want to become IAS",
  },

  {
    username: "rahulthakur",
    content: "I love teaching students",
  },
];

app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/posts", (req, res) => {
  let data = req.body;
  posts.push(data);
  res.redirect("http://localhost:3000/posts");
});
