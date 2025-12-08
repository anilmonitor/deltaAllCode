// let h1 = document.querySelector("h1");

// setTimeout(() => {
//   h1.style.color = "red";
// }, 2000);

// setTimeout(() => {
//   h1.style.color = "green";
// }, 3000);

// let pink = function () {
//   h1.style.color = "pink";
// };
// setTimeout(pink, 4000);

/*
//call back hell
let h2 = document.querySelector("h2");

function changeColor(color, delay, nextColorChange) {
  setTimeout(() => {
    h2.style.color = color;
    if (nextColorChange) nextColorChange();
  }, delay);
}

changeColor("red", 1000, () => {
  changeColor("yellow", 1000, () => {
    changeColor("Blue", 1000, () => {
      changeColor("pink", 1000, () => {
        changeColor("green", 1000);
      });
    });
  });
});

// above callback nesting is called call by hell --> Itz not recomended,
// its not understanable, to be safe from this we use promises, async & await
*/

/*
// example 2 callback hell
function saveDB(data, success, failure) {
  let internetSpeed = Math.floor(Math.random() * 10 + 1);

  if (internetSpeed > 4) {
    success();
  } else {
    failure();
  }
}

//callback hell
saveDB(
  "I am data1",
  () => {
    console.log("success1 saved");
    saveDB(
      "I am data2",
      () => {
        console.log("Success2 saved");
        saveDB(
          "I am data3",
          () => {
            console.log("success3 saved");
          },
          () => {
            console.log("Weak connetion 3");
          }
        );
      },
      () => {
        console.log("Weak connection 2");
      }
    );
  },
  () => {
    console.log("Weak connection");
  }
);
*/

//refactoring with Promises --> Promise is a object and it have many objects like then() & catch()
// resolve and reject

function saveDB(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10 + 1);

    if (internetSpeed > 4) {
      resolve("Success: Data was saved");
    } else {
      reject("Failure: weak connection");
    }
  });
}
// console.log(saveDB("Hey buddy"));

//Promise
//  then() & catch()
// then() --> if promise will fulfil then we will use .then()
// catch() --> if promise is rejected then we will  use .catch()

/*
// let request = saveDB("Welcome to Promise");
saveDB("We can remove request and directly use then and catch method")
  .then(() => {
    console.log("Promise resolved");
    // consolo.log(request);
  })

  .catch(() => {
    console.log("promise rejected");
    // console.log(request);
  });
*/

// Promise improved version -- This is the simple version of callback hell
// So in  this way we can be safe from callback hell

// by the help of  result we can find the result of Promise and
//similarly for the error, we can know the Error of promise
saveDB("Anil ko save kro i")
  .then((result) => {
    console.log("Data 1 is saved: resolved");
    console.log("Result of Promise:", result);
    return saveDB("Nawaid ko save kro ii");
  })
  .then((result) => {
    console.log("Data 2 is saved: resolved");
    console.log("Result of Promise:", result);
    return saveDB("Aman ko save kro iii");
  })
  .then((result) => {
    console.log("Data 3 is saved: resolved");
    console.log("Result of Promise:", result);
  })

  .catch((error) => {
    console.log("Promise Rejected");
    console.log("Error of Promise:", error);
  });
