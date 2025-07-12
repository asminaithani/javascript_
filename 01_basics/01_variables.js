const accountId = 1445
let accountEmail = "asmi@gmail.com"
var accountPass = "3678"
accountCity = "jaipur"
let accountState

//accountId = 2// not allowed

accountEmail ="hu@gmail.com"
accountPass = "2121"
accountCity = "roorkee"


console.log(accountId);

/*
prefer not to use var becoz of issue in
block scope and functional scope
*/

console.table([accountEmail, accountId, accountPass, accountCity, accountState])
