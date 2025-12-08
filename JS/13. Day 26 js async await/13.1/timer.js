//program to open a link after 5 second

/*
// using time interval
function callit() {
  let num = 0;
  let btn = document.querySelector("button");
  let id = setInterval(() => {
    if (num == 4) {
      clearInterval(id);

      document.querySelector("a").click();
      console.log("Linked open");

    }
    num = num + 1;
    btn.innerText = num;
  }, 1000);
}
*/
// Color changing

function colorchange(color, delay) {
  return new Promise((result, rejected) => {
    let h1 = document.querySelector("h1");

    setTimeout(() => {
      h1.style.color = color;

      console.log(`Color updated into ${color}`);
      result();
    }, delay);
  });
}

async function start(result) {
  await colorchange("red", 1000);
  await colorchange("blue", 1000);
  await colorchange("pink", 1000);
  await colorchange("yellow", 1000);
  colorchange("green", 1000);
}

start();
