// array
const myArr = [0,1,2,3,4,5]
const Heros = ["spiderman","superman"]

const myArr2 = new Array(1,2,3,4,5)
// console.log(myArr[1])

// Array methods
// myArr.push(5)
// console.log(myArr)
// myArr.pop(5)
// console.log(myArr)

const newArr = myArr.join()
// console.log(myArr)
// console.log(newArr)
// console.log(typeof newArr)

// -- slice, splice --
console.log("A",myArr)
const myn1 = myArr.slice(1,3)
console.log(myn1)
console.log("B",myArr)

const myn2 = myArr.splice(1,3)
console.log("c", myArr)
console.log(myn2)