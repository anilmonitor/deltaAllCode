// json
/*
let jsondata =
  '{"activity":"Volunteer at a local animal shelter","availability":0.5,"type":"charity","participants":1,"price":0.1,"accessibility":"Minor challenges","duration":"hours","kidFriendly":true,"link":"","key":"1382389"}';

console.log(jsondata);

//converting json into js object
let finaljs = JSON.parse(jsondata);
console.log(finaljs.activity);

// js objec to json
let collection = {
  Name: "Anil",
  age: 23,
};

let jstojson = JSON.stringify(collection);

console.log(jstojson);
*/

/*
//My first API requst (https://catfact.ninja/fact, https://dog.ceo/api/breeds/image/random)
let url = "https://dog.ceo/api/breeds/image/random";

fetch(url)
  .then((response) => {
    console.log("Res1: ", response);

    return response.json();
  })

  .then((data) => {
    console.log("data 1:", data.message);
    return fetch(url);
  })

  .then((respose) => {
    console.log("Res2: ", respose);

    return respose.json();
  })

  .then((data2) => {
    console.log("Data2: ", data2.message);
  })
  .catch((err) => {
    console.log("Something Error --> ", err);
  });
*/

/*
//   same work using async and await
// api url = https://catfact.ninja/fact

let URL = "https://catfact.ninja/fact";
async function randomFact() {
  try {
    let RESPONSE1 = await fetch(URL);
    console.log("RES1", RESPONSE1);

    let DATA1 = await RESPONSE1.json();
    console.log("DATA1", DATA1.fact);

    let RESPONSE2 = await fetch(URL);
    console.log("RES2: ", RESPONSE2);

    let DATA2 = await RESPONSE2.json();

    console.log("DATA2: ", DATA2.fact);
  } catch (error) {
    console.log("GOT ERROR: ", error);
  }
}

randomFact();
*/

// using Axios (https://github.com/axios/axios)
// -- genrally we use axios mostly but internally it use fetch.
// (Both fetch and axios are same)

let apiUrl = "https://catfact.ninja/fact";

async function factGen() {
  let res = await axios.get(apiUrl);
  console.log(res.data.fact);

  let res2 = await axios.get("https://dog.ceo/api/breeds/image/random");
  console.log(res2.data.message);
}

factGen();
// I have made a project to generate the random fact and
//Genrate random dog images
//check folder 13.3 of DAY13

//Axios - Sending header (https://icanhazdadjoke.com)
async function demo() {
  let jokeUrl = "https://icanhazdadjoke.com";
  try {
    let additonalWork = { headers: { Accept: "application/json" } };
    let res = await axios.get(jokeUrl, additonalWork);
    console.log("Using axios header joke: ", res.data.joke);
  } catch (e) {
    console.log("Something errr: ", e);
  }
}

demo();

//
