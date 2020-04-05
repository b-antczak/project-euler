exports.isPalindrome = (n) => {
  const s = n.toString();
  return s === s.split('').reverse().join('');
}
