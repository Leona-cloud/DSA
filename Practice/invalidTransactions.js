// A transaction is possibly invalid if:

// the amount exceeds $1000, or;
// if it occurs within (and including) 60 minutes of another transaction with the same name in a different city.
// You are given an array of strings transaction where transactions[i] consists of comma-separated values representing the name,
//time (in minutes), amount, and city of the transaction.

// Return a list of transactions that are possibly invalid. You may return the answer in any order.

var invalidTransactions = function (transactions) {
  const n = transactions.length;
  const added = new Array(n).fill(false);
  const res = [];

  for (let i = 0; i < n; i++) {
    const [name1, time1, amount1, city1] = transactions[i].split(",");

    if (amount1 > 1000 && !added[i]) {
      res.push(transactions[i]);
      added[i] = true;
    }

    for (let j = i + 1; j < n; j++) {
      const [name2, time2, amount2, city2] = transactions[j].split(",");

      if (name1 === name2 && Math.abs(time1 - time2) <= 60 && city1 === city2) {
        if (!added[j]) {
          res.push(transactions[j]);
          added[j] = true;
        }

        if (!added[i]) {
          res.push(transactions[i]);
          added[i] = true;
        }
      }
    }
  }
  return res;
};
