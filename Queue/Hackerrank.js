function maxMinProduct(operations, x) {
    let elements = [];
    let products = [];
    let min = Infinity;
    let max = -Infinity;

    for (let o = 0; o < operations.length; o++) {
        for (let i = o; i < x.length; i++) {
            if (operations[o] === 'push') {
                elements.push(x[i]);
            } else if (operations[o] === 'pop') {
                let index = elements.indexOf(x[i]);
                if (index !== -1) {
                    elements.splice(index, 1);
                }
            }

            for (let j = 0; j < elements.length; j++) {
                min = Math.min(min, elements[j]);
                max = Math.max(max, elements[j]);
            }

            products.push(min * max);
            min = Infinity;
            max = -Infinity;

            break;
        }
    }

    return products;
}


 // Output: [1, 2, 3, 6]


const operations = ["push", "push", "push", "pop"]

const x = [1, 2, 3, 1];


const test = maxMinProduct(operations, x);
console.log(test);





function maxProfit(costPerCut, salePrice, lengths) {
    let max_profit = 0;

    for (let sale_length = 1; sale_length <= Math.max(...lengths); sale_length++) {
        let sale_price_per_rod = salePrice * sale_length;
        let profit = 0;

        for (let i = 0; i < lengths.length; i++) {
            let rod_length = lengths[i];
            let uniform_rods = Math.floor(rod_length / sale_length);

            if (uniform_rods > 0) {
                let extra_cut = rod_length % sale_length > 0 ? 1 : 0;
                let total_cuts = uniform_rods - 1 + extra_cut;

                let costs = total_cuts * costPerCut;
                let revenues = uniform_rods * sale_price_per_rod;

                if (revenues > costs) {
                    profit += revenues - costs;
                }
            }
        }

        if (profit > max_profit) {
            max_profit = profit;
        }
    }

    return max_profit;
}

// Example usage
let costPerCut = 100;
let salePrice = 10;
let lengths = [26, 103, 59];
let result = maxProfit(costPerCut, salePrice, lengths);
console.log(result);



function minTotalCost(nums) {
    nums.sort((a, b) => a - b); // Sort the array in ascending order
    let totalCost = 0;

    while (nums.length > 1) {
        const sum = nums[0] + nums[1]; // Sum of the smallest two elements
        console.log(sum)
        totalCost += sum; // Add the sum to the total cost
        nums.splice(0, 2); // Remove the smallest two elements
        nums.push(sum); // Add the sum to the end of the array
        nums.sort((a, b) => a - b); // Re-sort the array
    }

    return totalCost;
}

const nums = [4, 2, 7, 6];
const result1 = minTotalCost(nums);
console.log("Minimum total cost:", result1);



function countPalindromeSubstrings(s) {
    let count = 0;

    for (let center = 0; center < 2 * s.length - 1; center++) {
        let left = Math.floor(center / 2);
        let right = left + center % 2;

        while (left >= 0 && right < s.length && s[left] === s[right]) {
            console.log(s)
            count++;
            left--;
            right++;
        }
    }

    return count;
};


const pal = 'palindrome';
const pali = countPalindromeSubstrings(pal);
console.log(pali, 'palindrome')