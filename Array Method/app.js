/*

// array methods
const fruits = ['apple', 'orange', 'banana', 'grape']

// find method return single value
const findResult = fruits.find((f) => {
    return f === "apple"
})

console.log(findResult) // print result apple

// findIndex method return index number of value
const findIndex = fruits.findIndex((f) => f === "apple")

console.log(findIndex) // print index number 0


// filter method return a array of values

const filterResult = fruits.filter((f) => f === "apple")

console.log(filterResult) // print result new array


// SLice method return new array from array
const sliceResult = fruits.slice(3, 4)

console.log(sliceResult)


// sploce method remove/insert new value into specific index and return new array with removed values 
const spliceResult = fruits.splice(1, 2, 'new value', 'new value 2')

console.log(spliceResult)
console.log(fruits) // also mutate main array


// concat method 
const concatResult = fruits.concat('new value', 'new value')

console.log(fruits)
console.log(concatResult) 

*/


const cities = ['Dhaka', 'Kolkata', 'Hamburg', 'New Caledonia', 'New York', 'California']

// for (let i = 0; i < cities.length; i++) {
//    console.log(cities[i])
// }

// const result = cities.forEach(c => {
//      console.log(c)
// })

const result = cities.map(c => {
     if (c === 'New York') {
         return 'New York';
     } else {
        return 'N/A'
     }
})

console.log(result)




