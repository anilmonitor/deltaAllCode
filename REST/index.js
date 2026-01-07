const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const { str10_36 } = require("hyperdyperid/lib/str10_36"); //random id generator
const methodOverride = require("method-override"); //for method override

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log("Server is listening at port: ", port);
});

let posts = [
  {
    id: str10_36(),
    username: "anilmonitor",
    content: "I love coding",
  },

  { id: str10_36(), username: "renukumari", content: "I want to become IAS" },

  {
    id: str10_36(),
    username: "rahulthakur",
    content: "I love teaching students",
  },
];

app.get("/posts", (req, res) => {
  let id = str10_36();
  res.render("index.ejs", { posts, id });
});

app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/posts", (req, res) => {
  let { username, content, photo } = req.body;
  let id = str10_36();
  posts.push({ id, username, content, photo });
  res.redirect("http://localhost:3000/posts");
  // console.log(req.body);
});

app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  res.render("viewPost.ejs", { post });
});

app.delete("/posts/:id", (req, res) => {
  let { id } = req.params;
  posts = posts.filter((p) => id !== p.id);

  // res.send("delete su");

   res.redirect("http://localhost:3000/posts"); 
});
