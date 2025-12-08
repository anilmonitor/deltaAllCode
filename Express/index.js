let express = require("express");

let app = express();
// console.log(express);
let port = 8080;

app.listen(port, () => {
  console.log(`app is listening on the port ${port}`);
});

/*
//sending a response
app.use((req, res) => {
  console.log("New incoming request");
  res.send("This is basic respose");

  next();
});
*/

/*
//sending object in response
app.use((req, res) => {

   console.log("Another New incoming request");
  res.send({
    name: "anil",
    age: 23,
    gender: "male",
    year: 2025,
  });
});

*/

/*
// sending response in html formate
app.use((req, res) => {
  let newRes =
    "<h1> This is response </h1> <ol> <li> Anil </li> <li> Manjeet </li> </ol>";
  res.send(newRes);
});
*/

/*
// Routing --> using get() method
app.get("/", (req, res) => {
  res.send("This is Home page!!");
});

app.get("/about", (req, res) => {
  res.send("<h1> About us page </h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1> Contact us: +91 7488168228 </h1>");
});

app.use((req, res) => {
  res.send("<h1> This page not available !!! </h1>");
});
*/

// Path parameter
app.get("/:username/:pass", (req, res) => {
  let { username, pass } = req.params;
  console.log(username, pass);
  res.send(`Your Instagram id ${username} and pass ${pass}`);
});

// Query strings
app.get("/search", (req, res) => {
  console.log(req.query);
  let { q } = req.query;
  res.send(`Your Queries is: ${q}`);
});
