
// A company is planning to interview 2n people. Given the array costs where costs[i] = [aCosti, bCosti], the cost of flying the ith person to city a is aCosti, and the cost of flying the ith person to city b is bCosti.

// Return the minimum cost to fly every person to a city such that exactly n people arrive in each city.

 


/**
 * @param {number[][]} costs
 * @return {number}

 sort in descending order -> take absolute difference and sort from highest impact to lowest impact
 set a cap of people to sent to respective cities(cost.lenght/2)
 have counters for each city to keep track for the no of people
 return sum(city with the lower cost, when adding to the lower cost)
 */

 //TC = O(nlogn)
 // SC = O(n)
 var twoCitySchedCost = function (costs) {

    costs.sort((a, b) => {
        return Math.abs(b[0] - b[1]) - Math.abs(a[0] - a[1])
    });

    let sum = 0
    const cap = costs.length / 2
    let cityA = 0;
    let cityB = 0;

    for (let i = 0; i < costs.length; i++) {
        let costCityA = costs[i][0];
        let costCityB = costs[i][1];

        //if cityA is cheaper
        if (costCityA <= costCityB) {
            if (cityA < cap) {
                sum += costCityA
                cityA++
            } else {
                sum += costCityB
                cityB++
            }
        } else {
            if (cityB < cap) {
                sum += costCityB
               cityB++
            } else {
                sum += costCityA
                cityA++
            }
        }
    }

    return sum

};