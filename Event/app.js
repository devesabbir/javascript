const btnEl = document.getElementById('btn');


// best approach
btnEl.addEventListener('click', function(){
    console.log('Hello world')
})

function hello () {
    console.log('Hello world')
}

const multiplier = (a , b, c) => {
     return {
        a: a,
        b: b,
        c: c
     }
 }
 


const curryConverter = (fn) => {
    return function curried (...args) {
        if (args.length >= fn.length) {
            return fn(...args)
        } else {
            return function(...args2) {
               return curried(...args,...args2)
            }  
        }
    }
}


let a = [20,10]
let b = a

b[0] = 100


console.log(b, a)



