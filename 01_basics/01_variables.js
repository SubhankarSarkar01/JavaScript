const accountId = 53627
let accountName = "Subhankar"
let accountEmail = "subhankar@google.com"
var accountPassword = "12345"

accountState = "WestBengal"

// console.log(accountId)

// accountId = 234 //Not allowed
accountEmail = "Subhankar@microsoft.com"
accountPassword = "25363"

/* prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountId,accountName,accountEmail,accountPassword,accountState])
