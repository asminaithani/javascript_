//if
const isUserLoggedIn = true
const temp = 41
if(temp<50){
    console.log("less than 50")
}else{
    console.log("temp greater than 50");

}
//<,>,<=,>=,==,!=, ===, !==

const score = 200
if (score>100){
    const power = "fly"
    console.log(`user power: ${power}`);
}
console.log(`user power: ${power}`);

const balance = 1000
if(balance > 500) console.log("test"),
console.log("test2");


//if,else if,else
//switch
//break
//truthy and falsy
//falsy: false, 0, -0, BigInt, 0n, "", undefined, null,NaN
//truthy: "0",'false', "", [], {}, function(){}
//nullish coalescing operator (??): null undefined

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10 ?? 20
val1 = undefined  ?? 10
console.log(val1);

//ternary operator
//condition?true:false

const iceTeaPrice = 100
iceTeaPrice >=80? console.log("less than 80"): console.log("more than 80");

