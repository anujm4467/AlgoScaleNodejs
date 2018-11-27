const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter the Array ? ", array => {
  let x = 0;
  let wArray = array.split(" ");
  var arr = wArray.map(function(item) {
    return parseInt(item, 10);
  });
  // console.log(b);
  if (recursiveFunction(arr, x, 0, arr.length - 1))
    console.log("Element found");
  else console.log("Element not found");
  rl.close();
});

let recursiveFunction = function(arr, x, start, end) {
  // Base Condtion
  if (start > end) return false;
  // Find the middle index
  let mid = Math.floor((start + end) / 2);
  // Compare mid with given key x
  if (arr[mid] === x) return true;
  // If element at mid is greater than x,
  if (arr[mid] > x) return recursiveFunction(arr, x, start, mid - 1);
  else return recursiveFunction(arr, x, mid + 1, end);
};
