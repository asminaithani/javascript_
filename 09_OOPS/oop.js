const user = {
    name: "asmi",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("got user details from Database");
        console.log(`username: ${this.username}`);
        console.log(this)
    }
}
console.log(user.name);
//console.log(user.getUserDetails())
console.log(this);

const promiseOne = new Promise()
const date = new Date()


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function(){
        console.log(`welcome ${this.username}`);
    }

    return this
}
const userOne = new User("Asmi", 12, true)
const userTwo = new User("chai", 33, false)
console.log(userOne.constructor);
console.log(userOne);

//new
// empty object is created
// constructor function is called by new keyword
//this keyword ke andr ke saare argumnets inject hote hain
//function ke andr mil jata hai 