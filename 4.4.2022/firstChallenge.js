// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

// Task
// Write a function that returns both the minimum and maximum number of the given list/array.

// Examples
// minMax([1,2,3,4,5])   == [1,5]
// minMax([2334454,5])   == [5, 2334454]
// minMax([1])           == [1, 1]

let itemsArray = [1, 7, 3, 11, 198];

function minMax(arr) {
  // find the min and max numbers in the array
  let buyPrice = Math.min(...arr);
  let salePrice = Math.max(...arr);
  // create the array and push the min / max nums
  let answerArray = [];
  answerArray.push(buyPrice, salePrice);
  // return the answer
  return answerArray;
}

console.log(minMax(itemsArray));

// After revision
function revisedMinMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}
