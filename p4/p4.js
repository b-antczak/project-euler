const ip = require("../util").isPalindrome;

function p4() {
  let max = 0;
  for (let i = 999; i >= 100; --i) {
    for (let j = 999; j >= 100; --j) {
      let v = i * j;
      if (ip(v) && v > max) {
        max = v;
      }
    }
  }
  return max;
}

console.log(p4());  
