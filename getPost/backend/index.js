const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.listen(PORT, () => {
  console.log(`Server listening at PORT ${PORT}`);
});

app.get("/register", (req, res) => {
  let data = req.query;
  res.send(`Hey Mr. @ ${data.user} your pass is ${data.pass}`);
});

app.set("view engine", "ejs");
app.post("/register", (req, res) => {
  let data = req.body;
  console.log(data.cats.posts[0].image);
  //   res.send(`Hey Mr. @ ${data.cats.posts[0].image}`);
  //   res.send("data received");

  let pic = data.cats.posts[0].image;
  // console.log({pic})
  res.render("ok.ejs", { pic });
});
