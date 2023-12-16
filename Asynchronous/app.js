// CallBack Function
// function fetchUser(id,cb){
//     setTimeout(function(){
//         console.log('User Fetching...')
//         const user = {
//             id: id,
//             name:'Sabbir',
//             age:40
//         }
//         cb(user) 
//     },2000)
 
// }

// function sendMail(name, cb){
//      setTimeout(function(){
//      console.log(`Send mail to ${name}`)
//      const res = { status:'Success'}
//      cb(res)
//     },3000)
// }

// fetchUser(2,(u) => {
//     sendMail(u.name, (r) => {
//        console.log(r)
//     })
// })



// Promise Function 
function fetchUser(id){
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
           console.log('User Fetching...')
           const user = {
              id: id,
              name: 'Sabbir',
              age: 36
           }
           resolve(user)
        },2000)
     })
    return promise
}

function mailSender(user){
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Mail Sending...')
            const res = { 
                success: true,
                id:user?.id, 
                name:user?.name   
              }
            resolve(res)
           
        },5000)
    })
    return promise
}

// Promise call
fetchUser(124)
.then((res) => mailSender(res))
.then((res) => {
   console.log(res)
}).catch((err) => {
   console.log(err)
})

// Promise With Async-Await 
async function getUser(id){
   try {
      let user = await fetchUser(id) 
      let res = await mailSender(user)
      console.log(res)
   } catch (error) {
      console.log(error)
   }
}

getUser(123)



const user = {
   firstName: 'Sabbir',
   lastName: 'Hossain',
   fullName: function(){
      return this.firstName + ' ' + this.lastName
   }
}


const names = {
   firstName: 'John',
   lastName: 'Doe',
}


let result = user.fullName.apply(names, ['hell0'])

console.log(result)