const accountId = 14455
let accountEmail = "kd@gmail.com"
var accountPass = "12345"
accountCity = "Bengaluru"
let accountState;

// accountId = 2  not allowed

/*
prefer not to use var
because of issue in blocl scope and functional scope 
*/


accountEmail = "kd1@gmail.com"
accountPass = "67887"
accountCity = "Mumbai"



console.log(accountId);
console.table([accountId, accountEmail, accountPass, accountCity, accountState])