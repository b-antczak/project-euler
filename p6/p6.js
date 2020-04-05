const sumPowersUpTo = (n, p) => [...new Array(n)].reduce((acc, _, i) => acc + Math.pow(i + 1, p), 0);

const n = 100;
console.log(Math.abs(Math.pow(sumPowersUpTo(n, 1), 2) - sumPowersUpTo(n, 2)));
