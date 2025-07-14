const user = {
    username: "asmi",
    price: 999,
    welcomeMessage: function(){
        //console.log(`${this.username}, welcome to website`);
        //console.log(this);
        
    }

}
user.welcomeMessage()
user.username="sam"
user.welcomeMessage()

//console.log(this);
//function chai(){
//    let usernane = "asmi"
//    console.log(this);
//}
//chai()

//const chai = function (){
//    let usernane = "asmi"
//    console.log(this.username);
//}

//const chai =  () => {
//    let usernane = "asmi"
//    console.log(this.username);
//}
//chai() 

//const addTwo = (num1, num2) => {
//    return num1 + num2
//}
//console.log(addTwo(3, 5));

const addTwo = (num1, num2) =>  num1 + num2
console.log(addTwo(3,7));

