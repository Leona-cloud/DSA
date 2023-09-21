// Given an array of integers temperatures represents the daily temperatures,
//return an array answer such that answer[i] is the number of days you have to wait after the ith
//day to get a warmer temperature. If there is no future day for which this is possible,
//keep answer[i] == 0 instead.

function dailyTemp(temperature) {
  let n = temperature.length;
  let res = new Array(n).fill(0);
  let stack = [];

  for (let i = 0; i < n; i++) {
    // [73,74,75,71,69,72,76,73]
    // [ 1, 1, 4, 2, 1, 1, 0, 0]
    while (stack.length && temperature[i] > temperature[stack[stack.length - 1]]) {
      let index = stack.pop();
      res[index] = i - index;
    } 
    stack.push(i);
  }
  return res;
}



const temperature = [73,74,75,71,69,72,76,73];
var newNum = dailyTemp(temperature);
console.log(newNum);
