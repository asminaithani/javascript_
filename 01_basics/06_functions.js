/*function addTwoNum(num1, num2){
    console.log(num1 + num2);
}
addTwoNum(3, 8)
*/
function addTwoNum(num1, num2){
    let result = num1 + num2
    return result
}
const result = addTwoNum(3,6)
console.log("result", result);

function calculateCartPrice(...num1){ //rest operator
    return num1
}
console.log(calculateCartPrice(200, 700,89))

const user = {
    username: "asmi",
    price: 999
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and the 
        price is ${anyobject.price}`);
    
}
handleObject(user)