// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

var isHappy = function (n) {
  if (n === 1) return true;

  let slowPointer = n;
  let fastPointer = n;

  while (true) {
    slowPointer = sumOfSquares(slowPointer);
    fastPointer = sumOfSquares(sumOfSquares(fastPointer));
    if (slowPointer == fastPointer) break;
  }

  return slowPointer === 1;
};

var sumOfSquares = function (num) {
  let sum = 0;
  while (num > 0) {
    let lastDigit = num % 10; //remove the last digit
    sum += lastDigit ** 2; // square last digit
    num = Math.floor(num / 10);
  }
  return sum;
};
