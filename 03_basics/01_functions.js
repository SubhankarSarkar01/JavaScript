function myName() {
    console.log("Subhankar Sarkar")
}
// myName()
function addTwonumbers(num1,num2){
    // console.log(num1 + num2)
    // let result  = num1 + num2
    // return result

    return num1 + num2
}
const result = addTwonumbers(3,4)
// console.log("Result : ",result)

function loggedInuser(userName){
    if(userName == undefined){
        console.log("Please enter user name")
        return
    }
    return `${userName} just logged in`
}
// console.log(loggedInuser("Subhankar"))
// console.log(loggedInuser())

function calculatePrice(...num1){
    return num1
}

// console.log(calculatePrice(4,5,6))

const user = {
    userName : "SUbhankar",
    price : 399
}
function handleObject(anyobject){
    return `UserName is ${anyobject.userName} and price is ${anyobject.price}`
}
// console.log(handleObject(user))
console.log(handleObject({
    userName : "Sarkar",
    price : 400
}))

const myArray = [100,200,300]
function returnValue(getArray){
    return getArray[1]
}
console.log(returnValue(myArray))
