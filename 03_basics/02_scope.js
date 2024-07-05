// var c =300
let a =100
if(true){
    let a =10
    const b = 20
    var c =30
    console.log("Inner :",a)
}
console.log(a)
// console.log(b)
// console.log(c)

function one(){
    const userName = "Subhankar"
    function two(){
        const website = "chai aur code"
        console.log(userName)
    }
    // console.log(website)
    two()
}
one()
if (true) {
    const username = "subhankar"
    if (username === "subhankar") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);
// ----------------- Instersting ---------------
console.log(addone(5))
function addone(num){
    return num + 1
}
// console.log(addTwo(5))
// const addTwo = function(num){
//     return num + 2
// }