const promiseOne = new Promise(function(resolve, reject){
    //do an async word
    //db calls, cryptography, network
    setTimeout(function(){
        console.log('async task is completed');
        resolve()
    },1000)
})
promiseOne.then(function(){
    console.log("promise consumed");
})

new Promise(function (resolve, reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve()
    }, 1000)
})
.then(function(){
    console.log("async 2 resolved");
})

const promiseThree = new promiseOne(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "asmi", email: "asmi@gmail.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "asmi", password: "asmi"})
        }else{
            reject('error something went wrong')
        }
    } ,1000)
})

 promiseFour
 .then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){ 
    console.log(error);
})
.finally(()=> console.log("the promise is either resolved or rejected."))

const promiseFive =  new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "javascript", password: "asmi"})
        }else{
            reject('error: JS went wrong')
        }
    } ,1000)
})
async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()

/* 
async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log(error)
    }
}
getAllUsers()
*/

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error))

