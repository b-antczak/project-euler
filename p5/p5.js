const PRIMES_UP_TO_20 = [2,3,5,7,11,13,17,19];

function p5() {
  const n = 20;
  if (n < 3) {
    return n;
  }
  let smallestMultiple = 1;
  for (let prime of PRIMES_UP_TO_20) {
    let factor = 2;
    while (Math.pow(prime, factor) <= n) {
      factor += 1;
    }
    smallestMultiple *= Math.pow(prime, factor-1);
  }
  return smallestMultiple;
}

console.log(p5());
