//async function
// ham chahe to normal function wo bhi async function bana sakte hain
// aur wo funtion ek Promise return karega
// and we can use .then() and .catch method

/*
async function demo() {
  return "hello bro";
}

// console.log(demo());
demo()
  .then((result) => {
    console.log("Result is: ", result);
  })

  .catch((err) => {
    console.log("I am error: ", err);
  });

//Arrow  async function --self throw error
let hello = async () => {
  throw "this is self created error";

  return "this is arrow async function";
};
console.log(hello());
*/

/*
// using await keyword
function demo() {
  return new Promise((result, rejected) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 10) + 1;

      console.log(num);
      result("Num print completed");
    }, 1000);
  });
}

//print random num after 1s each num
async function printMultiNum() {
  await demo();
  await demo();
  await demo();
  demo();
}

printMultiNum();
*/

// lets make color changing after 1s using await keyword
// ii.) handling rejection
function changeColor(color, delay) {
  return new Promise((result, rejected) => {
    let rand = Math.floor(Math.random() * 10) + 1;

    if (rand > 5) {
      rejected("Rejected due to rand");
    }
    let h1 = document.querySelector("h1");
    setTimeout(() => {
      h1.style.color = color;

      result();
      console.log(`Color change into ${color}`);
    }, delay);
  });
}

async function change() {
  // we use try anc catch to handle rejection

  try {
    await changeColor("red", 1000);
    await changeColor("yellow", 1000);
    await changeColor("pink", 1000);
    await changeColor("green", 1000);
  } catch (error) {
    console.log("A error found", error);
  }
}

change();

// next 13.2 API
