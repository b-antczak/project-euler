const isPrime = num => {
  for (let i = 2; i <= Math.sqrt(num); ++i) {
    if (num % i === 0) {
      return false; 
    }
  }
  return num > 1;
}

/**
 * Idea:
 * Start with the first odd number that is <= sqrt(n), then work downwards (skipping over
 * the even numbers) until the first prime factor is found -- this one will be the largest.
 */
function determineLargestPrimeFactor(n) {
  let num = Math.ceil(Math.sqrt(n)) - 1;
  if (num % 2 === 0) {
    num--;
  }
  while (num > 0) {
    if (n % num === 0 && isPrime(num)) {
      return num;
    }
    num -= 2; // we can skip even numbers
  }
  return 0;
}

console.log(determineLargestPrimeFactor(600851475143));
