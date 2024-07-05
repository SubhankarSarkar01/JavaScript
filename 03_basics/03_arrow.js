const user = {
    userName : "Subhankar",
    price :367,
    welcomemessage : function (){
        console.log(`${this.userName}, welcome to our website`)
        // console.log(this)
    }
}
user.welcomemessage()
user.userName = "sarkar"
user.welcomemessage()
// console.log(this)

const chai = function (){
    let userName = "Subhankar"
    console.log(this.userName)
}
chai()
const chai1 = () =>{
    let userName = "Subhankar"
    console.log(this.userName)
}
chai1()
// Method 1
const addTwo = (num1,num2) =>{
    return num1 + num2
}
// Method 2
// const addTwo = (num1,num2) => num1 + num2
// Method 3
// const addTwo = (num1,num2) => (num1 + num2)

// const addTwo = (num1, num2) =>({userName: "Subhankar"})
console.log(addTwo(4,5))