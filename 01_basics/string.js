const userName = "subhankar"
const repoCount = 50
// console.log(userName + repoCount + "Value") //not used 

console.log(`Hello my name is ${userName} and my repo count is ${repoCount}`)

const gameName = new String("Subhankartech")
// console.log(gameName[0])
// console.log(gameName.__proto__)
// console.log(gameName.length)
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('h'))

const newString  = gameName.substring(0,4)
console.log(newString)
const anotherString = gameName.slice(-12,4);
console.log(anotherString)

const newStringone = "    subh   "
console.log(newStringone)
console.log(newStringone.trim())

const url = "subhanakar%220sarkar"
console.log(url.replace("%220","-"))
console.log(url.includes('sarkar'))

const newgameName = "subhankar-tech"
console.log(newgameName.split('-'))