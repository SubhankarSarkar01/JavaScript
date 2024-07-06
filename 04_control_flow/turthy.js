const userEmail = {}

if(userEmail){
    console.log("Got user Email")
}else{
    console.log("Don't have user Email")
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, udefined, NaN

// Truthy values
// "0","false"," ",[],{},function(){} 

// if(userEmail.length === 0 ){
//     console.log("Array is empty")
// }

const emptyObj = {}
if(Object.keys(emptyObj).length===0){
    console.log("Object is empty")
}


// Nullish Coalescing Operator(??) : null undefined
let val1;
val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 10
val1 = null ??10 ??20
console.log(val1)

// Ternary Operator 

// condition ? True : False

const iceCreamPrice = 200
iceCreamPrice >=100 ? console.log("Price is more than 100") : console.log("Price is less than 100")
