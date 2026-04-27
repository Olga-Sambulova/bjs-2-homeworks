"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;
  if (d < 0) {
  return arr;
}
  if (d === 0) {
    let root = -b / (2 * a);
    arr.push(root);
    return arr;
  }
  if (d > 0) {
    let root1 = (-b + Math.sqrt(d)) / (2 * a);
    let root2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(root1, root2);
    return arr;
  }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let P = percent / 100 / 12;
  let S = amount - contribution;

  if (S <= 0) {
    return 0;
  }
  let n = countMonths;
  let monthlyPayment = S * (P + (P / (Math.pow(1 + P, n) - 1)));
  let totalAmount = monthlyPayment * n;
  totalAmount = Math.round(totalAmount * 100) / 100;
  return totalAmount;
}