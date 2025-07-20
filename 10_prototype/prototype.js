let myName = "asmi    "
console.log(myName.truelength);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spider power is ${this.spiderman}`);
    }
}

Object.prototype.asmi = function(){
    console.log(`asmi is present in all objects`)
}

heroPower.asmi()
myHeros.asmi()

Array.prototype.heyHitesh = function(){
console. log (`Hitesh says hello`);}
// heroPower.hitesh()
myHeros.hitesh();
myHeros.heyHitesh();
heroPower.heyHitesh();

//inheritance

const User = {
    name: "chai",
    email: "cjai@google"
}
const Teacher = { 
    makeVideo: true
}
const TeachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

//modern syntax

Object.setPrototype0f(TeachingSupport, Teacher)
let anotherUsername = "ChaiAurCode   "
String.prototype.trueLength = function (){
    console.log ('${this}'); 
    console.log ('${this.name}');
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"asmi".trueLength()