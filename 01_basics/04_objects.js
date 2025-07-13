//singleton
//oject.create
//object literals
const mySym = Symbol("key1")
const JsUser = {
    name: "asmi",
    [mySym]: "mykey1",
    age: 20,
    location: "roorkee",
    email: "asminaithani@gmail.com",
    isLoggedIn: false
}

//console.log(JsUser.email)
//console.log(JsUser["email"]);
//console.log(JsUser[mySym]);
JsUser.email = "hxbh@gmail.com"

JsUser.greeting = function(){
    console.log("hello users");
}
JsUser.greetingtwo = function(){
    console.log(`hi js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());

