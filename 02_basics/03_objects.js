// singleton
// Object literals
const mySum = Symbol("key1")

const JsUser = {
    name : "subhankar",
    "full name": "subhankar sarkar",
    [mySum] : "mykey1",
    age : 34,
    location : "Kolkata",
    email : "subhankar@google.com",
    isLoggedIn: false,
    lastLoginDays : ["Monday","Saturday"]

}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySum])
// console.log(typeof JsUser[mySum])
JsUser.email = "subhankarsarkar@microsoft.com"
// Object.freeze(JsUser)
JsUser.email = "subhankar@charGpt.com"
// console.log(JsUser)


JsUser.grettings = function(){
    console.log("Hello JS user")
}
JsUser.grettingsTwo = function(){
    console.log(`Hello JS user, ${this.name}`)
}

console.log(JsUser.grettings())
console.log(JsUser.grettingsTwo())