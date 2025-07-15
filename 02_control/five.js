/*const myNums = [1,2,3,4,5,6,7,8,9,10]

//const newNums = myNums.filter((num)=> num > 4 )
//console.log(newNums);

const newNums = myNums.filter((num)=> {
    return num > 4
} )
console.log(newNums);


const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.map((num)=> num+10)
console.log(newNums);


//CHAINING

const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums
.map((num)=> num*10)
.map((num)=> num+1)
.filter((num)=> num >= 40)

console.log(newNums)
*/

const myNum = [1,2,3]
const myTotal = myNum.reduce((acc, currval)=> acc+currval ,0)
console.log(myTotal);

const myShoppingCart = [
    {
        course: "java",
        price: 2999
    },
    {
        course: "javascript",
        price: 1999
    },
    {
        course: "python",
        price: 999
    },
    {
        course: "mobile dev",
        price: 12999
    }
]
const totalPay = myShoppingCart.reduce((acc, item)=> acc + item.price ,0)
console.log(totalPay);
