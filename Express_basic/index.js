// import { add, sub } from "./ok/index.js";
import express from "express";

// import { generateSlug } from "random-word-slugs";

// const slug = generateSlug();
// console.log("NEW JOKE IS: ", slug, slug);

const app = express();
const PORT = 3000;
app.listen(PORT, () => {
  console.log("PORT is listing");
});

// 1st  GET HTTP request --> Data read / dekhne ke liye
app.get("/Anil", (req, res) => {
  res.send(" I am ANIL");
});

// 2nd POST HTTP request --> Data send / create karne ke liye
app.post("/users", (req, res) => {
  res.send("This is post respose");
});

// 3rd PUT HTTP request --> Full update ke liye
app.put("/users/:id", (req, res) => {
  res.send("Updated");
});

// 4th PATCH HTTP request -->  Partial update (sirf ek field)
app.patch("/users/:id", (req, res) => {
  res.send("Partially updated");
});

// 5th DELETE HTTP request -->  Data remove karne ke liye
app.delete("/users/:id", (req, res) => {
  res.send("Deleted");
});

// 6th app.USE --> har type ka http request ko listen karta hain.
app.use("/jsonRes", (req, res) => {
  let student = {
    name: "ANil",
    age: 22,
    address: "Garhwa",
  };
  // let collection = ["Anil", "Rahul", "manish"];
  res.send(student);
});

//html res
app.use("/htmlRes", (req, res) => {
  let data = "<h1> My name is anil </h1>  <p> this is HTML http res </p> ";

  res.send(data);
});

//Path prameter
// app.get("/easylike/:username/:pass", (req, res) => {
//   let login = req.params;
//   // let {username, pass} = req.params;
//   //  let user = "<input type="text" placeholder=" username">"
//   res.send(`Your username is: ${login.username} and pass is: ${login.pass}`);
//   console.log(`Your username is: ${login.username} and pass is: ${login.pass}`);
// });

app.get("/:username/:gender/:age", (req, res) => {
  let data = req.params;
  console.log(data);

  // res.json({
  //   message: "Data received",
  //   data: data,
  // });

  res.send(data.age);
});

//query string
app.get("/search", (req, res) => {
  let q = req.query;
  console.log(q);
  res.send(q);
});
