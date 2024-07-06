//if- else statement

// const balance = 1000
// if(balance<500){
//     console.log("Less than 500")
// }else if(balance < 750){
//     console.log("Less than 750")
// }else{
//     console.log("Less than 1200")
// }

const userLoggedIn  = true
const debitCard = true

if(userLoggedIn && debitCard){
    console.log("Allow to buy course")
}

const loggedInFromGoogle = false
const loggedInFromEmail = true

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged in")
}

// Switch
const month = 3
switch (month) {
    case 1:
        console.log("January")
        break;
    case 2:
        console.log("Feb")
        break;
    case 3:
        console.log("March")
        break;
    case 4:
        console.log("April")
        break;
    default:
        console.log("Enter Right value")
        break;
}


