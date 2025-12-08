let sum = (a, b) => {
  return a + b;
};

let sub = (a, b) => {
  return a - b;
};

let mult = (a, b) => {
  return a * b;
};

  

let mathCollection = {
  sum: sum,
  sub: sub,
  mult: mult,
};

module.exports = mathCollection; //exported
