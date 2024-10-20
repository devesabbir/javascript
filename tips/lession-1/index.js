/*
 * Tips No:1
 * This JavaScript code snippet creates an array `arr` containing numbers, a boolean value (`false`), and `undefined`.
 */

let arr = [1, 2, 3, 4, 5, false, undefined];

/*
 * The line `let truthyValues = arr.filter(Boolean);` is creating a new array called `truthyValues` by filtering the elements of the `arr` array using the `Boolean` function as a filter criterion. */
let truthyValues = arr.filter(Boolean);

// console.log(truthyValues);

/*
 * Tips No:2
 * casting value to Boolean
 */

let playerName = "Sabbir";
// console.log(!!playerName);

/*
 * Tips No:3
 * Resize an Array
 */
let numbers = [1, 2, 3, 4, 5];
numbers.length = 3;
// console.log(numbers);

/*
 * Tips No:4
 * Multi-dimensional array to flat  array
 */

let multiDimensionalArray = ["🥙", ["❤️", ["⚙️"]], "🤣", ["😂"], "🤩"];
/*
 *The line `let flatArray = multiDimensionalArray.flat(Infinity);` is flattening a multi-dimensional array `multiDimensionalArray` into a single-dimensional array `flatArray`.
 * The `flat()` method is used to flatten nested arrays up to the specified depth, and passing `Infinity` as the argument ensures that all nested arrays are flattened recursively to the deepest level possible. In this case, it will flatten all nested arrays within `multiDimensionalArray` into a single flat array. */
let flatArray = multiDimensionalArray.flat(Infinity);
// console.log(flatArray);

/*
 * Tips No:5
 * Short conditional  statement
 */

let isAdult = 25;
// console.log(isAdult >= 18 ? "Adult" : "Not Adult");

/*
 * Tips No:6
 * Replace all occurances of a string
 */
const text = "Hello, my name is Sabbir and I am a developer.";
const replaceText = text.replace(/Sabbir/g, "Sabbir Hossain");
console.log(replaceText);

/*
 * Tips No:7
 * Log values with variable names smartly
 */

let name = "Sabbir";
let age = 25;

// console.log(`Name: ${name}, Age: ${age}`'
/*
 * This code snippet is using object literal shorthand in JavaScript to log values with variable names smartly.
 */
// console.log({ name, age });

/*
 * Tips No:8
 * Know performance of a task
 */

let startTime = performance.now();

for (let i = 0; i < 1000; i++) {
  // console.log(i);
}

let endTime = performance.now();
// console.log({ totalTime: endTime - startTime });
