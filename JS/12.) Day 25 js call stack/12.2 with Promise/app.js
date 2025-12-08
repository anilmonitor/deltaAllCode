let h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((result, rejected) => {
    if (color == "hotpink") {
      rejected("Hotpink not Allowed");
    } else {
      setTimeout(() => {
        h1.style.color = color;
        result("Color changed");
      }, delay);
    }
  });
}

changeColor("red", 1000)
  .then((result) => {
    console.log("red", result);

    return changeColor("green", 1000);
  })

  .then((result) => {
    console.log("green", result);
    return changeColor("hotpink", 1000);
  })

  .catch((error) => {
    console.log(error);
  });
