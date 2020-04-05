exports.isPalindrome = (n) => {
  const s = n.toString();
  return s === s.split('').reverse().join('');
}

exports.isPrime = n => {
  for (let i = 2, s = Math.sqrt(n); i <= s; i++)
    if (n % i === 0) return false; 
  return n > 1;
}
