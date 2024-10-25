/*
 * Tips No:1
 * Swaping Values
 */

let array = [1, 2, 3, 4, 5];
let temp = array[0];
array[0] = array[array.length - 1];
array[array.length - 1] = temp;
// console.log(array); // Output: [5, 2, 3, 4,

// with array destructing
[array[0], array[array.length - 1]] = [array[array.length - 1], array[0]];
// console.log(array);

let duplicateArray = [1, 2, 3, 4, 4, 5, 5, 5, 6, 7, 8, 8, 9];
let removeDuplicate = new Set(duplicateArray);

console.log([...removeDuplicate]);
