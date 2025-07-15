/*
for (let i = 0; i < array.length; i++) {
    const element = i;
    if(element == 5){
       //console.log("5 is the best");
    }
    //console.log(element);
}

let i = 0
while(2==2){
   // console.log(`val of index is ${1}`);
    i = i+2
}

let myArray = ['flash', "batman", "superman"]
//let arr = 0
while(arr<myArray.length){
    //console.log(`value is ${myArray[arr]}`)
    arr = arr+1
}

let score = 1
do {
    //console.log(`score is ${score}`);
    score++
} while (score <=10 );



const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
    
}

const greetings = "hello"
for (const greet of greetings) {
    //console.log(`each char is ${greet}`);
}
*/

//MAPS: for unique values and same order

const map = new Map()
map.set('IN', "INDIA")
map.set('USA', "United states of america")

console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
    
}

//for objects

const myObj = {
    'game1' : 'nfs',
    'game2' : 'spiderman'
}

for (const [key, value] of myObj) {
    console.log(key, ':-', value);
    
}