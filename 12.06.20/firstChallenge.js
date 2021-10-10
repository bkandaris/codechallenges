// Question:
// In this Kata, you will be given an array of unique elements, and your task is to rerrange the values so that the first max value is followed by the first minimum, followed by second max value then second min value, etc.

// Example:
// solve([15,11,10,7,12]) = [15,7,12,10,11]
// The first max is 15 and the first min is 7. The second max is 12 and the second min is 10 and so on.

function solve(arr) {
    // sort the array
    let answer = []
    let sorted = arr.sort(function (a, b) {  return a - b;  });
    
    while (sorted.length > 0) {
        answer.push(sorted[sorted.length - 1])/
        answer.push(sorted[0])
        
        sorted.shift()
        sorted.pop()
        
    }
    let answer2 = [...new Set(answer)]
    
    return answer2;
}

console.log(solve([15,11,10,7,12])) // [15,7,12,10,11]