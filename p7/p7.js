const ip = require("../util").isPrime;

function p7() {
  let c = 0;
  let n = 2;
  while (true) {
    if (ip(n)) {
      c++;
      if (c == 10001) {
        break;
      }
    }
    n++;
  }
  return n;
}

console.log(p7());
