/**
 * 
 * 
 * @var is reasignable and accessible as global variables 
 * @let is reasignable and accessible only on block area
 * @const is not reasignable but changeable reference values
 * 
 * 
 */


var lang = "Science"

function learn (topic) {
    var lang = topic
    console.log(`I am learning ${lang}`)
}

learn('English')

console.log(lang)


// Regular Function
function hello() {
    console.log('Hello world')
    // return undefined
}
hello()
console.log(hello()) // return undefined


// Function Expression
const helloWorld = function () {
   console.log('Hello world')
}

helloWorld()
console.log(helloWorld())

// Name Function Expression
const nameFunction = function nameFunction() {
    console.log('Name function expression')
}

nameFunction()

// Arrow Function 

const arrowFunction = () => {
    console.log('Arrow function expression')
}

arrowFunction()

// Arrow Function return in single line
const arrowFunctionReturn = (a, b) => a + b 

console.log(arrowFunctionReturn(3,6))


// return object with arrow function

const arrowFunctionReturnObject = (a, b) => {
    return {
        a:a, b:b,
    }
}

console.log(arrowFunctionReturnObject(3,5))


// Anonymous function

const exampleAnonymous = () => {
    return () => {
        console.log('Anonymous function')
    }
}

exampleAnonymous()()


