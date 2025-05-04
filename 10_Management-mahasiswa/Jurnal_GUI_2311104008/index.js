const { fpb, kpk, turunan, integral } = require('./matematika');

console.log("FPB(60, 45):", fpb(60, 45));
console.log("KPK(12, 8):", kpk(12, 8));
console.log("Turunan dari [1, 4, -12, 9]:", turunan([1, 4, -12, 9]));
console.log("Integral dari [4, 6, -12, 9]:", integral([4, 6, -12, 9]));

